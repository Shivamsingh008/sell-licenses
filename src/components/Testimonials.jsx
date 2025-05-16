import React from 'react';

const testimonials = [
  {
    quote: '“SoftSell made it super easy to recover value from unused licenses.”',
    name: 'Aman Verma',
    position: 'IT Manager, TechNova',
    image: '/assets/man.jpeg', // put this in /public/image folder
  },
  {
    quote: '“Professional, fast, and totally secure. Highly recommended!”',
    name: 'Priya Singh',
    position: 'Procurement Lead, CodeClimb',
    image: '/assets/lady.jpeg', // another example image
  },
];

const Testimonials = () => (
  <section className="py-16 px-6 bg-blue-100 text-center dark:bg-gray-800 text-gray-800 dark:text-white">
    <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
    <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm animate-fade-in text-left dark:bg-gray-700"
        >
          <div className="flex items-center mb-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm opacity-80">{t.position}</p>
            </div>
          </div>
          <p className="italic">{t.quote}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
