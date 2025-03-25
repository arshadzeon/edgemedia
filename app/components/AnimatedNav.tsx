'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function AnimatedNav() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Edge Media
            </Link>
          </motion.div>
          <div className="flex gap-8">
            {['services', 'work', 'contact'].map((item) => (
              <div
                key={item}
                onClick={() => handleScroll(`#${item}`)}
                className="text-gray-300 hover:text-white transition-colors uppercase cursor-pointer"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.span>
              </div>
            ))}
          </div>
          <div 
            onClick={() => handleScroll('#contact')}
            className="px-6 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all cursor-pointer"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LET&apos;S GROW
            </motion.span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 