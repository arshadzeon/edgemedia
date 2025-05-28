import { motion } from 'framer-motion';
import Services from './services/page';
import Work from './work/page';
import Contact from './contact/page';
import MobileResponsiveNav from './components/MobileResponsiveNav';

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
      <MobileResponsiveNav />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative pt-16 sm:pt-20">
        <motion.div 
          className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 hidden sm:block"
          animate={{ 
            rotate: 360,
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div className="rounded-full p-4 sm:p-8 border border-gray-800">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">em</span>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto text-center py-16 sm:py-32">
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-serif mb-8 sm:mb-12 leading-tight px-2"
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
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are Edge Media, a full-service marketing agency based in the digital realm. 
            We work with visionaries & innovators to help them achieve their digital presence.
          </motion.p>

          <motion.a 
            href="#services"
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-base sm:text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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