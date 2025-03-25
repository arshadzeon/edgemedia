import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Brand Evolution',
    category: 'Branding',
    description: 'Complete brand transformation for a tech startup',
    image: '/project1.jpg'
  },
  {
    title: 'Digital Presence',
    category: 'Social Media',
    description: 'Comprehensive social media strategy and execution',
    image: '/project2.jpg'
  },
  {
    title: 'Content Creation',
    category: 'Content',
    description: 'Engaging content strategy and production',
    image: '/project3.jpg'
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

export default function Work() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <motion.h2 
          className="text-4xl md:text-6xl font-serif mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our{' '}
          <span className="italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Work
          </span>
          <motion.div 
            className="absolute -bottom-6 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore our portfolio of successful projects and transformative digital solutions.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
            </div>
            
            <div className="relative z-20 p-6">
              <span className="inline-block px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>
              
              <motion.div 
                className="mt-6 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 