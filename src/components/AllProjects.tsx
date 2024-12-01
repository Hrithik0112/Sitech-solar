import React from 'react';

const AllProjects: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Project</span> We Have Done
          </h2>
          <p className="text-gray-700  text-lg leading-9 mx-20">
          We successfully implemented a large-scale solar energy project, designing and installing a fully customized solar power system tailored to meet the specific energy needs of a commercial client. This comprehensive project included site assessment, system design, procurement of high-quality solar panels and components, installation of solar energy heaters, lighting poles, and water pumps, along with the integration of automation and energy-saving technologies. Our team also provided ongoing technical support, ensuring optimal performance, efficiency, and cost savings for the client. By utilizing cutting-edge technology, we helped reduce the client’s carbon footprint, contributing to environmental sustainability and cleaner energy use. The project stands as a testament to our commitment to delivering innovative, high-quality solutions in renewable energy for large-scale commercial operations in the region.          </p>
        </div>

        {/* Project Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* You'll need to import and add your actual images here */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 1.png" 
              alt="Solar Panel Installation" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 2.png" 
              alt="Electric Components" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 3.png" 
              alt="Solar Panel Array" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 4.png" 
              alt="Control Box" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 5.png" 
              alt="Solar Installation" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/Image 6.png" 
              alt="Electrical Setup" 
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
