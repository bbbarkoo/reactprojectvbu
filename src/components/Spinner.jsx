import React, { useEffect, useState } from 'react';
import './styles/style.css'; // Ensure this file contains the correct styles

const Spinner = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading duration
    const loadingTimer = setTimeout(() => {
      setFadeOut(true); // Start fading out
      // Hide the spinner after fading out
      const hideTimer = setTimeout(() => setLoading(false), 1000); // Adjust based on your fade-out duration
      return () => clearTimeout(hideTimer);
    }, 1200); // Adjust based on your loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {loading && (
        <div
          id="spinner-container"
          className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-yellow-300"></div>
        </div>
      )}
    </>
  );
};

export default Spinner;
