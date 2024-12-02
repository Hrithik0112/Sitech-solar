import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
  
const AllProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Project</span> We Have Done
          </h2>
          <motion.p 
            className="text-gray-700 text-lg leading-9 mx-20"
            initial={{ opacity: 0 }} 
            animate={{ opacity: isInView ? 1 : 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We successfully implemented a large-scale solar energy project, designing and installing a fully customized solar power system tailored to meet the specific energy needs of a commercial client. This comprehensive project included site assessment, system design, procurement of high-quality solar panels and components, installation of solar energy heaters, lighting poles, and water pumps, along with the integration of automation and energy-saving technologies. Our team also provided ongoing technical support, ensuring optimal performance, efficiency, and cost savings for the client. By utilizing cutting-edge technology, we helped reduce the client’s carbon footprint, contributing to environmental sustainability and cleaner energy use. The project stands as a testament to our commitment to delivering innovative, high-quality solutions in renewable energy for large-scale commercial operations in the region.
          </motion.p>
        </motion.div>

        {/* Project Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* You'll need to import and add your actual images here */}
          {[...Array(6)].map((_, index) => (
            <motion.div 
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={`/Image ${index + 1}.png`} 
                alt={`Project Image ${index + 1}`} 
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
