import { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SolarInstallation from '../assets/why-us.png';

const WhyUs: FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="pb-16 pt-24 bg-gray-50" id="about" ref={ref}>
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="space-y-8 ">
                        <motion.h2 
                            className="text-[54px] leading-[64px] font-semibold mb-8"
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} 
                            transition={{ duration: 0.5 }}
                        >
                            Why We Are Best<br />From Other
                        </motion.h2>
                        <motion.p 
                            className="text-gray-700 text-base leading-8"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: isInView ? 1 : 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            A Saudi Company With Over 10 Years Of Experience In Renewable Energy,
                            Providing Top Global Products And Comprehensive Technical Support.
                            Focused On Solar Energy Solutions Like Heaters, Lighting Poles, And Water
                            Pumps To Reduce Pollution And Carbon Emissions. We Combine The Latest
                            Technologies, Research, And Continuous Development To Offer High-Quality,
                            Affordable, And Sustainable Solutions Tailored For The Saudi And Arab
                            Markets.
                        </motion.p>
                        <motion.img
                            src={SolarInstallation}
                            alt="Solar Installation"
                            className="rounded-lg w-full"
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 shadow-2xl rounded-[40px]">
                        <div className="space-y-4 py-20 pl-8 pr-4">
                            {[
                                { title: "Expert Installation", description: "Seamless, Professional Installation Guaranteed." },
                                { title: "Customized Solutions", description: "Tailored Systems For Maximum Efficiency" },
                                { title: "Cutting-Edge Technology", description: "Using Advanced Solar Technology." },
                            ].map((service, index) => (
                                <motion.div 
                                    key={service.title}
                                    className='flex space-x-4'
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                >
                                    <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-4 bg-[#FFECD9] py-20 pl-6 pr-4 sm:rounded-r-[40px] sm:rounded-bl-none rounded-b-[40px]">
                            {[
                                { title: "10+ Experience", description: "Years Of Expertise In Solar Energy Solutions" },
                                { title: "24 MW Of Clean Energy", description: "Delivering High-Capacity, Clean Solar Power." },
                                { title: "Exceptional Support", description: "Ongoing Maintenance And Reliable Customer Service." },
                            ].map((service, index) => (
                                <motion.div 
                                    key={service.title}
                                    className='flex space-x-4'
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                >
                                    <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs; 