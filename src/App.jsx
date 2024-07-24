
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header';
// import Spinner from './components/Spinner';
// import MainContent from './components/MainContent';
// import LoginForm from './components/LoginForm';
// import LandingPage from './components/LandingPage';
// import Write from './components/Write';
// import Read from './components/Read';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showLoginForm, setShowLoginForm] = useState(false);



//   return (
//     <Router>
//       {/* <Header /> */}
//           <Spinner />
//           <Routes>
//             <Route path="/" element={<MainContent />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/landing" element={<LandingPage />} />
//             <Route path="/write" element={<Write />} />
//             <Route path="/read" element={<Read />} />

//           </Routes>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header2 from './components/Header2';
import Header from './components/Header';
import MainContent from './components/MainContent';

import Footer from './components/Footer';
import Spinner from './components/Spinner';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm'; // Assuming you have this component
import MyCoursesTable from './components/MyCoursesTable';
import CourseList from './components/CourseList';
import CourseRegistration from './components/CourseRegistration';
import UserContext from './components/UserContext';


function HeaderController() {
  const location = useLocation();
  return location.pathname === '/' || location.pathname === '/login' ? <Header /> : <Header2 />;
}

function App() {
  const [matchedStudent, setMatchedStudent] = useState(null);

  return (
    <UserContext.Provider value={matchedStudent}>
      <Router>
        <HeaderController />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/mycourses" element={<MyCoursesTable />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/register" element={<CourseRegistration />} />
        </Routes>
        <Footer />
        <Spinner /> {/* Assuming you want the spinner always visible */}
      </Router>
    </UserContext.Provider>
  );
}

export default App;