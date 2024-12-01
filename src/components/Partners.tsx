import { FC } from 'react';

const Partners: FC = () => {
  const partners = ['Duford', 'Schneider', 'JA Solar', 'Veichi', 'Huawei'];
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl font-bold mb-8">Projects And Collaborations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="grayscale hover:grayscale-0 transition-all"
            >
              {/* Replace with actual partner logos */}
              <div className="w-32 h-16 bg-gray-200 flex items-center justify-center">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 