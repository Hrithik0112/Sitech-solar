import { FC } from 'react';

interface Service {
  title: string;
  image: string;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: "On-Grid Pv System",
      image: "/services/ongrid.png",
    },
    {
      title: "Off-Grid Pv System",
      image: "/services/offgrid.png",
    },
    {
      title: "Hybrid Pv System",
      image: "/services/hybrid.png",
    },
    {
      title: "Roof Top PV System",
      image: "/services/rooftop.png",
    },
    {
      title: "Solar Water Pumping System",
      image: "/services/solarwater.png",
    },
    {
      title: "Solar Battery Charging System",
      image: "/services/solarbattery.png",
    },
    {
      title: "Solar Power Traffic Lighting System",
      image: "/services/solartraffic.png",
    },
    {
      title: "Solar Security Camera Poles",
      image: "/services/solarcamera.png",
    },
    {
      title: "Solar Heater System",
      image: "/services/solarheater.png",
    },
    {
      title: "Wind Turbine Power",
      image: "/services/solarturbine.png",
    },
    {
      title: "EV Chargers",
      image: "/services/solarEV.png",
    },
    {
      title: "Hydrogen Energy Solutions",
      image: "/services/solarh2.png",
    }
  ];

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[54px] leading-[80px] font-semibold mb-4">Services We Offer</h2>
          <p className="text-gray-600">
            Providing a Complete Range of Expert Solutions, Delivered Right to Your Doorstep
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 