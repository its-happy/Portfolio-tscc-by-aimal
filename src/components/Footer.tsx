import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-blue-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col sm:flex-row items-center justify-between">
        {/* Name & Title */}
        <p className="text-sm sm:text-base font-semibold">
          Designed & Developed by <span className="text-orange-600">Aimal Khan</span>
        </p>

        {/* Social Media Links */}
        <div className="mt-4 sm:mt-0 space-x-4">
          <a href="h" target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline-block text-xl sm:text-2xl hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="inline-block text-xl sm:text-2xl hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="inline-block text-xl sm:text-2xl hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="inline-block text-xl sm:text-2xl hover:text-orange-600 transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} Aimal Khan. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
