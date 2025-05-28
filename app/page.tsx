import { motion } from 'framer-motion';
import Link from 'next/link';
import Services from './services/page';
import Work from './work/page';
import Contact from './contact/page';

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

const heroTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900">
      {/* Navigation */}
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
              <span className="bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Edge Media
              </span>
            </motion.div>
            <div className="flex gap-8">
              {['services', 'work', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white transition-colors uppercase"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.a 
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LET'S GROW
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative pt-20">
        <motion.div 
          className="absolute top-1/2 right-8 transform -translate-y-1/2"
          animate={{ 
            rotate: 360,
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div className="rounded-full p-8 border border-gray-800">
            <div className="w-24 h-24 flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">em</span>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto text-center py-32">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif mb-12 leading-tight"
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            Create the{' '}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              growth
            </motion.span>
            <br />
            your company is
            <br />
            <span className="italic relative">
              capable of
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are Edge Media, a full-service marketing agency based in the digital realm. 
            We work with visionaries & innovators to help them achieve their digital presence.
          </motion.p>

          <motion.a 
            href="#services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Services
          </motion.a>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Services />
      </motion.section>

      {/* Work Section */}
      <motion.section 
        id="work" 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Work />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.section>
    </main>
  );
} 