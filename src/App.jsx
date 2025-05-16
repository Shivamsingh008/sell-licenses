import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="bg-white text-gray-800 font-sans transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      <Hero isDark={isDark} setIsDark={setIsDark} />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
