import React from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Fast Payments',
    
  },
  {
    icon: '🔒',
    title: 'Secure Process',
   
  },
  {
    icon: '👨‍💼',
    title: 'Expert Valuation',
  
  },
  {
    icon: '💯',
    title: 'No Hidden Fees',
   
  },
];

const WhyChooseUs = () => (
  <section id='why-choose-us' className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 dark:text-gray-300">{item.title}</h3>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
