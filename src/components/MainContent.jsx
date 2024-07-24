import React, { useEffect } from 'react';
import vakifImage from '../assets/Vakif-white.png'; // Adjust path as needed

const MainContent = () => {
  useEffect(() => {
    const text1 = document.getElementById('animated-text-1');
    const text2 = document.getElementById('animated-text-2');
    const button = document.getElementById('animated-button');
    const image = document.getElementById('animated-image');

    if (text1) {
      text1.classList.remove('hidden');
      text1.classList.add('animate-zoomIn');
    }

    const handleAnimationEnd = (nextElement, nextClass) => {
      if (nextElement) {
        nextElement.classList.remove('hidden');
        nextElement.classList.add(nextClass);
      }
    };

    const text1AnimationEnd = () => handleAnimationEnd(text2, 'animate-zoomIn');
    const text2AnimationEnd = () => handleAnimationEnd(button, 'animate-zoomIn');
    const buttonAnimationEnd = () => handleAnimationEnd(image, 'animate-zoomIn');

    if (text1) text1.addEventListener('animationend', text1AnimationEnd);
    if (text2) text2.addEventListener('animationend', text2AnimationEnd);
    if (button) button.addEventListener('animationend', buttonAnimationEnd);

    return () => {
      if (text1) text1.removeEventListener('animationend', text1AnimationEnd);
      if (text2) text2.removeEventListener('animationend', text2AnimationEnd);
      if (button) button.removeEventListener('animationend', buttonAnimationEnd);
    };
  }, []);

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="flex items-center justify-center mt-20 bg-transparent">
        <div className="text-center">
          <div id="animated-text-1" className="text-6xl font-bold text-gray-900 hidden">
            Welcome to VBU Course System
          </div>
          <div id="animated-text-2" className="text-3xl font-medium text-gray-700 hidden mt-4">
            Login and register to your courses
          </div>
          <a href="/login">
            <button id="animated-button" className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded hidden mt-6">
              Login to System
            </button>
          </a>
          <img id="animated-image" src={vakifImage} alt="Placeholder Image" className="hidden mt-6 mx-auto h-10 w-64" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
