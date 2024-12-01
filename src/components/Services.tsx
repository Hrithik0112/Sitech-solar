import { FC } from 'react';

interface Service {
  title: string;
  image: string;
  description: string;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: "Solar Panel Installation",
      image: "/path-to-installation.jpg",
      description: "Professional installation of solar panels"
    },
    // Add more services...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 