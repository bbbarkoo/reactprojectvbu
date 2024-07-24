// src/components/Footer.jsx
import React from 'react';
import vakifImage from '../assets/Vakif-white.png'; // Adjust path as needed

const Footer = () => (
  <footer className="bg-black">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a href="" className="text-base text-white hover:text-white">
            #Home#
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <img src={vakifImage} alt="" className="h-5 w-32" />
      </div>
      <p className="mt-4 text-center text-base text-white">
        &copy; 2024 VBU. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
