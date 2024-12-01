import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="relative h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="/path-to-hero-image.jpg" 
          alt="Solar Panel Installation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          Leading the Future of Solar Energy Solutions
        </h1>
        <p className="text-xl text-white mb-6">
          The Best Solar Power Provider in USA
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero; 