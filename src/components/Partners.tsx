import { FC } from 'react';

const Partners: FC = () => {
    const partners = [
        { name: 'Aurora', image: '/partners/Auroro.png' },
        { name: 'Schneider', image: '/partners/Schneider.png' },
        { name: 'JA Solar', image: '/partners/Ja Solar.png' },
        { name: 'Veichi', image: '/partners/Veichi.png' },
        { name: 'Huawei', image: '/partners/Huawai.png' }
    ];

    return (
    <section className="py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-[54px] leading-[64px] font-medium mb-16 text-center">Projects And Collaborations</h2>
        <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto">
          {/* First column - Aurora */}
          <div className="flex flex-col justify-center items-center">
            <img 
              src={partners[0].image}
              alt={`${partners[0].name} logo`}
              className="h-40 object-contain hover:scale-110 transition-all duration-300"
            />
          </div>
          
          {/* Second column - Schneider and Veichi */}
          <div className="flex flex-col justify-center items-center gap-12">
            <img 
              src={partners[1].image}
              alt={`${partners[1].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
            <img 
              src={partners[3].image}
              alt={`${partners[3].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
          </div>
          
          {/* Third column - JA Solar and Huawei */}
          <div className="flex flex-col justify-center items-center gap-12">
            <img 
              src={partners[2].image}
              alt={`${partners[2].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
            <img 
              src={partners[4].image}
              alt={`${partners[4].name} logo`}
              className="h-16 object-contain hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <p className="text-center mt-8 font-medium">Our Exclusive Partner</p>
      </div>
    </section>
  );
};

export default Partners; 