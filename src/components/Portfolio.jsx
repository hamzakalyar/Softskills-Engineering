import React from 'react';
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Fintech Analytics Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'A high-performance enterprise dashboard built with React and Node.js.'
  },
  {
    id: 2,
    category: 'App Development',
    title: 'Health & Fitness Tracker',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop',
    description: 'Native iOS and Android application with real-time biometric syncing.'
  },
  {
    id: 3,
    category: 'Digital Marketing',
    title: 'Global E-Commerce Campaign',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
    description: 'Data-driven SEO and paid media strategy resulting in 300% ROI.'
  },
  {
    id: 4,
    category: 'Video Editing',
    title: 'Brand Anthem Commercial',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    description: 'Cinematic storytelling and motion graphics for a global tech launch.'
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
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Portfolio() {
  return (
    <section className="pt-12 pb-24 lg:pt-14 lg:pb-32 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <p className="label-small text-accent mb-4 font-bold tracking-[0.3em] uppercase" data-reveal>
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]" data-reveal>
            Our recent specialized work.
          </h2>
        </div>

        {/* Animated Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden bg-royalBlue/20 border border-white/5 cursor-pointer hover:border-white/20 transition-colors duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                {/* Overlay gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010521] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Info (Overlaid on bottom of image) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-accent">{project.category}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 drop-shadow-md">{project.title}</h3>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-3xl transition-colors duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
