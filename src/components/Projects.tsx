import React from 'react';
import { useNavigate } from 'react-router';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between h-full gap-8">
          {/* Left Content */}
          <div className="max-w-xl h-full ">
            <div className='flex flex-col gap-4'>
                <h2 className="text-orange-500 text-6xl mb-2">Project</h2>
                <h3 className="text-6xl font-bold mb-10">We Have Done</h3>
            </div>
            <p className="text-gray-600 text-2xl leading-[40px] mb-20">
              We successfully implemented a large-scale solar energy project, designing and installing a customized solar system for a commercial client. The project included more than 100 solar panels and a 200 kW solar inverter.
            </p>
            <button 
              onClick={handleViewAll}
              className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-lg"
            >
              <span className='text-base font-semibold'>View All</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* First Column */}
            <div className='flex flex-col gap-4 h-full'>
                <img src="/projects/Project1.png" alt="Project 1" className="rounded-lg h-1/2" />
                <img src="/projects/Project2.png" alt="Project 2" className="rounded-lg h-1/2" />

            </div>
            {/* Second Column */}

            <div className='flex flex-col gap-4 h-full'>
                <img src="/projects/Project3.png" alt="Project 3" className="rounded-lg h-full" />
            </div>
            {/* Third Column */}
            <div className='flex flex-col gap-4 h-full'>
                <img src="/projects/Project4.png" alt="Project 4" className="rounded-lg h-1/2" />
                <img src="/projects/Project5.png" alt="Project 5" className="rounded-lg h-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;