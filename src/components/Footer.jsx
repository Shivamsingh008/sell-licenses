
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SoftSell</h3>
            <p className="text-gray-300">
              We help businesses sell surplus licenses quickly and safely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#How-It-Works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#Contact Form" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: info@softsell.com</p>
            <p className="text-gray-300 mb-2">Phone: +91 12345 67899</p>
            <p className="text-gray-300">Address: Gurgaon, India</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
