'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function MobileResponsiveNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = ['services', 'work', 'contact'];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            className="text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Edge Media
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleScroll(`#${item}`)}
                className="text-gray-300 hover:text-white transition-colors uppercase text-sm lg:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.button 
            onClick={() => handleScroll('#contact')}
            className="hidden md:block px-4 lg:px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LET'S GROW
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-white block transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="py-4 space-y-4 border-t border-gray-800">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleScroll(`#${item}`)}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors uppercase text-lg font-medium rounded-lg"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.button>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.button 
                  onClick={() => handleScroll('#contact')}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: menuItems.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LET'S GROW
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 