import { FC } from 'react';
import { motion } from 'framer-motion';
import HeroImage from "../assets/hero.png"
import { Link, useNavigate } from 'react-router';

const Hero: FC = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative flex flex-col items-center bg-gradient-to-r from-white via-white to-[#f4f3d4] pt-32 pb-10" id="home">
      <div className="container mx-auto px-8 text-center flex flex-col items-center justify-center mb-20">
        <motion.h2 
          className="text-6xl font-anta font-semibold text-orange-500 mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Si-Tech Solar
        </motion.h2>
        <motion.h1 
          className="md:text-5xl text-3xl mb-4 font-light tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Leading the Future of Solar Energy Solutions
        </motion.h1>
        <motion.p 
          className="md:text-5xl text-3xl mb-8 font-light tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          The Best Solar Power Provider in KSA
        </motion.p>
        <Link to="/contact">
        <motion.button 
          onClick={handleContact}
          className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 inline-flex items-center gap-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Contact us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </Link>
      </div>
      <motion.div 
        className="h-1/2"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <img 
          src={HeroImage} 
          alt="Solar Panel Engineer" 
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </motion.div>
      {/* orange color dot */}
      <div className="absolute top-40 left-1/4 size-2 bg-orange-500 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/3 right-56 size-[14px] bg-orange-500 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/3 left-20 size-[14px] bg-orange-500 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-40 right-40 size-5 bg-orange-500 rounded-full animate-pulse hidden md:block"></div>

    </section>
  );
};

export default Hero; 