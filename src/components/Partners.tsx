import { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Partners: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const partners = [
    { name: 'Aurora', image: '/partners/Auroro.png' },
    { name: 'Schneider', image: '/partners/Schneider.png' },
    { name: 'JA Solar', image: '/partners/Ja Solar.png' },
    { name: 'Veichi', image: '/partners/Veichi.png' },
    { name: 'Huawei', image: '/partners/Huawai.png' }
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-[54px] leading-[64px] font-medium mb-16 text-center"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} 
          transition={{ duration: 0.5 , delay: 0.4 }}
        >
          Projects And Collaborations
        </motion.h2>
        <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto">
          {/* First column - Aurora */}
          <motion.div 
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src={partners[0].image}
              alt={`${partners[0].name} logo`}
              className="h-40 object-contain hover:scale-110 transition-all duration-300"
            />
          </motion.div>
          
          {/* Second column - Schneider and Veichi */}
          <motion.div 
            className="flex flex-col justify-center items-center gap-12"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img 
              src={partners[1].image}
              alt={`${partners[1].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
            <img 
              src={partners[3].image}
              alt={`${partners[3].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
          </motion.div>
          
          {/* Third column - JA Solar and Huawei */}
          <motion.div 
            className="flex flex-col justify-center items-center gap-12"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img 
              src={partners[2].image}
              alt={`${partners[2].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
            <img 
              src={partners[4].image}
              alt={`${partners[4].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
          </motion.div>
        </div>
        <p className="text-center mt-8 font-medium">Our Exclusive Partner</p>
      </div>
    </section>
  );
};

export default Partners; 