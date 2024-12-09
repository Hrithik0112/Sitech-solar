import React from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleViewAll = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16" id="projects" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between h-full gap-8">
          {/* Left Content */}
          <motion.div 
            className="max-w-xl h-full"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }} 
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-col gap-4'>
                <h2 className="text-orange-500 text-6xl mb-2">Project</h2>
                <h3 className="text-6xl font-bold mb-10">We Have Done</h3>
            </div>
            <p className="text-gray-600 text-2xl leading-[40px] mb-20">
              We successfully implemented a large-scale solar energy project, designing and installing a customized solar system for a commercial client. The project included more than 100 solar panels and a 200 kW solar inverter.
            </p>
            <motion.button 
              onClick={handleViewAll}
              className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-lg hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0 }} 
              animate={{ opacity: isInView ? 1 : 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className='text-base font-semibold'>View All</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* First Column */}
            <div className='flex flex-col gap-4 h-full'>
              {[1, 2].map((index) => (
                <motion.img 
                  key={index}
                  src={`/projects/Project${index}.png`} 
                  alt={`Project ${index}`} 
                  className="rounded-lg h-1/2"
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              ))}
            </div>
            {/* Second Column */}
            <div className='flex flex-col gap-4 h-full'>
              <motion.img 
                src="/projects/Project3.png" 
                alt="Project 3" 
                className="rounded-lg h-full"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
            {/* Third Column */}
            <div className='flex flex-col gap-4 h-full'>
              {[4, 5].map((index) => (
                <motion.img 
                  key={index}
                  src={`/projects/Project${index}.png`} 
                  alt={`Project ${index}`} 
                  className="rounded-lg h-1/2"
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;