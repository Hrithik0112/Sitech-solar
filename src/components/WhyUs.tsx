import { FC } from 'react';

const WhyUs: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Why We Are Best From Other</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img 
              src="/path-to-solar-image.jpg" 
              alt="Solar Installation" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 