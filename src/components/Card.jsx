// src/components/Card.jsx
import React from 'react';

const Card = ({ href, imgSrc, title, description }) => (
  <div className="rounded overflow-hidden border-2 border-white shadow-lg flex flex-col">
    <a href={href}></a>
    <div className="relative">
      <a href={href}>
        <img className="w-full" src={imgSrc} alt={title} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </a>
    </div>
    <div className="px-6 py-4 mb-auto">
      <a href={href} className="font-semibold text-xl inline-block text-white transition duration-500 ease-in-out mb-2">
        {title}
      </a>
      <p className="text-gray-900 text-md">{description}</p>
    </div>
  </div>
);

export default Card;
