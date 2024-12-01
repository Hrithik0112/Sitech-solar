import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How long does solar panel installation take?",
      answer: "Typically, the installation process takes 1-3 days depending on the system size."
    },
    {
        question :"What are the maintenance requirements for a solar system?",
        answer :"Solar panels require minimal maintenance. Regular cleaning and occasional checks are recommended."
    },
    {
        question: "How much can I save on my energy bills with solar?",
        answer: "The savings vary based on your location, system size, and energy consumption. On average, homeowners see a 20-40% reduction in their electricity bills."
    },
    {
        question: "Is solar energy suitable for all types of properties?",
        answer: "Yes, solar energy is suitable for most types of properties, including residential, commercial, and industrial buildings."
    },
    {
        question : "What warranties do you offer on solar systems?",
        answer : "We offer comprehensive warranties on all solar systems to ensure your investment is protected."
    }, 
    {
        question : "Can I monitor my solar system's performance?",
        answer : "Yes, you can monitor your solar system's performance through our dedicated monitoring system."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 flex flex-col max-w-[700px]">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b rounded-lg">
              <button
                className="w-full text-left  py-4 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold ${openIndex === index ? 'text-[#FE7F00]' : ''}`}>
                  {faq.question}
                </span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden "
                  >
                    <div className=" py-4 ">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 