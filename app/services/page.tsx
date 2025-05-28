import { motion } from 'framer-motion';

const services = [
  {
    title: 'Content Strategy',
    description: 'Strategic content planning and creation that resonates with your target audience and drives engagement.',
    icon: '📝'
  },
  {
    title: 'Social Media',
    description: 'Comprehensive social media management to build and engage your community across platforms.',
    icon: '🌐'
  },
  {
    title: 'Brand Development',
    description: 'Creating and evolving distinctive brand identities that make lasting impressions.',
    icon: '✨'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-20">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8 sm:mb-12 relative inline-block px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our{' '}
          <span className="italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
          <motion.div 
            className="absolute -bottom-4 sm:-bottom-6 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We offer comprehensive digital marketing solutions tailored to your unique needs.
          Our expertise spans across various domains to help your business thrive in the digital landscape.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="group relative bg-gray-900/50 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}