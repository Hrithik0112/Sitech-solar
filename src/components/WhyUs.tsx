import { FC } from 'react';
import SolarInstallation from '../assets/why-us.png';

const WhyUs: FC = () => {
    return (
        <section className="pb-16 pt-24 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-20">

                    <div className="space-y-8 ">
                        <h2 className="text-[54px] leading-[64px] font-semibold mb-8">Why We Are Best<br />From Other</h2>
                        <p className="text-gray-700 text-base leading-8">
                            A Saudi Company With Over 10 Years Of Experience In Renewable Energy,
                            Providing Top Global Products And Comprehensive Technical Support.
                            Focused On Solar Energy Solutions Like Heaters, Lighting Poles, And Water
                            Pumps To Reduce Pollution And Carbon Emissions. We Combine The Latest
                            Technologies, Research, And Continuous Development To Offer High-Quality,
                            Affordable, And Sustainable Solutions Tailored For The Saudi And Arab
                            Markets.
                        </p>
                        <img
                            src={SolarInstallation}
                            alt="Solar Installation"
                            className="rounded-lg w-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2  shadow-2xl rounded-[40px]">
                        <div className="space-y-4 py-20 pl-8 pr-4">
                            <div className='flex space-x-4 '>
                                <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div>
                                    
                                <h3 className="font-semibold mb-2">Expert Installation</h3>
                                <p className="text-gray-600">Seamless, Professional Installation Guaranteed.</p>
                                </div>
                            </div>

                            <div className='flex space-x-4 '>
                            <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>

                                <h3 className="font-semibold mb-2">Customized Solutions</h3>
                                <p className="text-gray-600">Tailored Systems For Maximum Efficiency</p>
                                </div>
                            </div>

                            <div className='flex space-x-4 '>
                            <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>

                                <h3 className="font-semibold mb-2">Cutting-Edge Technology</h3>
                                <p className="text-gray-600">Using Advanced Solar Technology.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 bg-[#FFECD9] py-20 pl-6 pr-4 rounded-r-[40px]">
                            <div className='flex space-x-4 '>
                            <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>

                                <h3 className="font-semibold mb-2">10+ Experience</h3>
                                <p className="text-gray-600">Years Of Expertise In Solar Energy Solutions</p>
                                </div>
                            </div>

                            <div className='flex space-x-4 '>
                            <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>

                                <h3 className="font-semibold mb-2">24 MW Of Clean Energy</h3>
                                <p className="text-gray-600">Delivering High-Capacity, Clean Solar Power.</p>
                                </div>
                            </div>

                            <div className='flex space-x-4 '>
                            <div className='size-5 bg-orange-500 rounded-[4px] flex items-center justify-center flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>

                                <h3 className="font-semibold mb-2">Exceptional Support</h3>
                                <p className="text-gray-600">Ongoing Maintenance And Reliable Customer Service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs; 