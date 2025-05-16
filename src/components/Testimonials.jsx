import React from 'react';

const testimonials = [
  {
    quote: '“SoftSell made it super easy to recover value from unused licenses.”',
    author: '— Aman Verma, IT Manager, TechNova',
  },
  {
    quote: '“Professional, fast, and totally secure. Highly recommended!”',
    author: '— Priya Singh, Procurement Lead, CodeClimb',
  },
];

const Testimonials = () => (
  <section className="py-16 px-6 bg-blue-100 text-center dark:bg-gray-800 text-gray-800 dark:text-white">
    <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
    <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded shadow">
          <p className="italic">{t.quote}</p>
          <p className="mt-4 font-bold">{t.author}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
