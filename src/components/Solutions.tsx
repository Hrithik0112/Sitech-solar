import React from 'react';
import FarmIcon from "../assets/icon/farm.svg"
import BuildingIcon from "../assets/icon/apartment.svg"
import GasPumpIcon from "../assets/icon/gas-pump.svg"

const Solutions: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[54px] leading-[64px] font-semibold text-center mb-4">Offering Solutions For</h2>
        <p className="text-center text-gray-600 mb-12">
          We Specialize In Delivering Innovative Solar Energy Solutions, Catering To Various Properties And Ensuring Efficiency And Sustainability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Residential Card */}
          <div className="px-10 py-8 rounded-lg border border-gray-200 flex gap-x-4">
            <div className="text-orange-500">
              {/* You can use an icon library like heroicons or add your own SVG */}
              <img src={FarmIcon} alt="Farm Icon" className="w-15 h-15" />
            </div>
            <div className='flex flex-col'>

            <h3 className="text-xl font-semibold mb-2">Residential</h3>
            <p className="text-gray-600">
                Efficient solar solutions for homes, lowering energy costs sustainably.
              </p>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="px-10 py-8 rounded-lg border border-gray-200 flex gap-x-4">
            <div className="text-orange-500">
              <img src={BuildingIcon} alt="Building Icon" className="w-15 h-15" />
            </div>
            <div className='flex flex-col'>

            <h3 className="text-xl font-semibold mb-2">Commercial</h3>
            <p className="text-gray-600">
              Solar solutions for businesses, reducing energy costs.
            </p>
            </div>
          </div>

          {/* Automation Card */}
          <div className="px-10 py-8 rounded-lg border border-gray-200 flex gap-x-4">
            <div className="text-orange-500">
              <img src={GasPumpIcon} alt="Gas Pump Icon" className="w-15 h-15" />
            </div>
            <div className='flex flex-col'>

            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="text-gray-600">
              Automation solutions, boosting business efficiency.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;