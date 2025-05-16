import React from 'react'; // adjust path as needed


const Hero = ({ isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
     style={{ backgroundImage: "url('./assets/bg_pic.jpg')",
      filter: isDark ? 'brightness(80%)' : 'none',
      }}
    >
     
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
         className="absolute top-4 right-4 z-20 text-2xl bg-transparent border border-white   px-4 py-2 rounded-full transition"
      >
        {isDark ? '🌙' : '🌞'}
      </button>

      

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Turn Your Unused Software Licenses into Cash
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          We help businesses sell surplus licenses quickly and safely.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-bold transition"
        >
          Sell My Licenses
        </a>
      </div>
    </section>
  );
};

export default Hero;
