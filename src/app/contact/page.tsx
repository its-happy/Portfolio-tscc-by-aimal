import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white min-h-screen flex justify-center items-center py-16 px-6 sm:px-12">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            I’d love to hear from you! Feel free to reach out through any of the following options:
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="text-2xl text-blue-600">📞</div>
            <h2 className="text-xl text-gray-700 font-semibold">+92 1234568912</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl text-green-500">💬</div>
            <h2 className="text-xl text-gray-700 font-semibold">WhatsApp: +92 1234568912</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl text-yellow-500">✉️</div>
            <h2 className="text-xl text-gray-700 font-semibold">Email: aimalkhan@example.com</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl text-blue-600">🔵</div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl text-gray-700 font-semibold">Facebook: Aimal Khan</h2>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Or Leave a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
