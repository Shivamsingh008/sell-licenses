import React from 'react';



  const steps = [
  {
    title: 'Upload License',
    image: '/assets/file.png',
    description: 'Send us your unused or surplus software license details securely.',
  },
  {
    title: 'Get Valuation',
    image: '/assets/money.png',
    description: 'Our experts evaluate and give you the best market price.',
  },
  {
    title: 'Get Paid',
    image: '/assets/card.png',
    description: 'Once approved, you receive fast and secure payment directly.',
  },
];


const HowItWorks = () => (
  <section id='How-It-Works' className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>
      <h4 className="text-sm md:text-xl font-semibold text-center mb-16 ">
        Selling your unused software licenses is easy with our simple 3-step process
      </h4>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <img src={step.image} alt={step.title} className="w-24  mx-auto h-23" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
