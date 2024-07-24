// import React, { useState } from 'react';

// const Header2 = () => {
//   const [open, setOpen] = useState(false);

//   const toggleMenu = () => {
//     setOpen(prevOpen => {
//       console.log('Menu open:', !prevOpen); // Debug: Log menu state
//       return !prevOpen;
//     });
//   };

//   return (
//     <header className="border-b-4 border-yellow-300">
//       <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
//         <div className="flex flex-col max-w-screen-xl px-4 mx-auto">
//           <div className="p-4 flex flex-row items-center justify-between">
//             <a href="indexpage.html" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
//               VBU Course System
//             </a>
//             <button className="rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
//               <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
//               </svg>
//             </button>
//           </div>
//           <nav className={`flex-col ${open ? 'flex' : 'hidden'} md:hidden`}>
//           <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-300 rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="indexpage.html">Home</a>
//             <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="mycourses.html">My Courses</a>
//             <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="courselist.html">Course List</a>
//             <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="registration.html">Register to Courses</a>
//             <div className="relative mt-2" style={{ zIndex: 1000 }}>
//               <button onClick={toggleMenu} className="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent rounded-lg hover:text-gray-900 focus:shadow-outline">
//                 <span className="px-4 py-2 mt-2 text-sm font-semibold text-yellow-500 bg-gray-200 rounded-lg dark-mode:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-text-top h-5 w-5 mr-2">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm8 9a3 3 0 100-6 3 3 0 000 6zm-3 4a6 6 0 016 0H9z"></path>
//                   </svg>
//                   Barkın Özkaptan
//                   <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
//                   </svg>
//                 </span>
//               </button>
//               <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg ${open ? 'block' : 'hidden'}`}>
//                 <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
//                   <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="index.html">Sign Out</a>
//                 </div>
//               </div>
//             </div>          </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header2;




import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const matchedStudent = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="border-b-4 border-yellow-400 p-4">
      <div className="container mx-auto">
        <div className="px-4 flex flex-row justify-between items-center">
          <a href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg  focus:outline-none focus:shadow-outline">
            VBU Course System
          </a>
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-300 rounded-lg focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Home</a>
          <a href="/mycourses" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">My Courses</a>
          <a href="/courselist" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg   hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Course List</a>
          <a href="register" className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg   hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Register to Courses</a>
          <button onClick={toggleDropdown} className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  focus:outline-none focus:shadow-outline">
            <span className="px-4 py-2 mt-2 text-sm font-semibold text-yellow-500 bg-gray-200 rounded-lg   focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-text-top h-5 w-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm8 9a3 3 0 100-6 3 3 0 000 6zm-3 4a6 6 0 016 0H9z"></path>
              </svg>
              {matchedStudent.studentName}
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
          </button>
          <div className={`${isDropdownOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 py-2 bg-white rounded-md shadow ">
              <a className="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="index.html">Sign Out</a>
            </div></div>
        </nav>
      </div>
    </header>
  );
};

export default Header2