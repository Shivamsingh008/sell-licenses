import React from 'react';

const ContactForm = () => (
  <section id="contact" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-20">
    <div className="max-w-xl mx-auto px-4">
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Contact Us
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="license">License Type</label>
            <select
              id="license"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="">Select one</option>
              <option>Windows</option>
              <option>Adobe</option>
              <option>SAP</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
