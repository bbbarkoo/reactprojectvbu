// import React from 'react';
// import app from "../firebaseConfig";
// import { getDatabase, ref, get } from "firebase/database";
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Spinner from './Spinner';
// import './styles/style.css'; // Ensure this file contains the correct styles

// function LoginForm() {

//   let [studentArray, setStudentArray] = useState([]);
//   let navigate = useNavigate();
//   let [loading, setLoading] = useState(false);
//   const fetchData = async () => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, "school/students");
//     const snapshot = await get(dbRef);
//     if (snapshot.exists()) {
//       return Object.values(snapshot.val());
//     } else {
//       alert("error");
//       return [];
//     }
//   }

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const email = event.target.elements.email.value;
//     const password = event.target.elements.password.value;

//     const studentArray = await fetchData();

//     const match = studentArray.find(student => student.studentEmail === email && student.password === password);


//     if (match) {

//       setTimeout(() => {
//         navigate('/landing');
//         setTimeout(() => {
//           setLoading(false);
//         });
//       }, 1000); // Delay for 1 second
//     } else {
//       alert('Invalid email or password');
//       setLoading(false);
//     }
//   }




//   return (
//     <main className='min-h-screen flex items-start justify-center body-bg'>       {loading && <Spinner />}

//       <div className="bg-white max-w-lg mx-auto p-8 md:p-12 rounded-lg shadow-2xl mt-32">
//         <section>
//           <h3 className="font-bold text-2xl">Welcome to VBU Course Registration System</h3>
//           <p className="text-gray-600 pt-2">Login to your account.</p>
//         </section>

//         <section className="mt-10">
//           <form className="flex flex-col" onSubmit={handleLogin}>
//             <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Student Email</label>
//               <input type="text" id="email" name="email" placeholder="123123123@vakifbank.std" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-300 transition duration-500 px-3 pb-3" />
//             </div>
//             <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-300 transition duration-500 px-3 pb-3" />
//             </div>
//             <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" >
//               Login
//             </button>
//           </form>
//         </section>
//       </div>
//     </main>


//   );
// };

// export default LoginForm


import React, { useState, useContext } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import './styles/style.css'; // Ensure this file contains the correct styles
import { StudentContext } from './StudentContext'; // Import the context

function LoginForm() {
  const { setStudentName, setStudentNumber, setStudentGPA, setStudentEmail, setStudentDepartment } = useContext(StudentContext); // Get the setter function from context
  const [studentArray, setStudentArray] = useState([]);
  const [matchedStudent, setMatchedStudent] = useState(null); // State for holding matched student data
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "school/students");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      alert("error");
      return [];
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const students = await fetchData();

    const match = students.find(student => student.studentEmail === email && student.password === password);

    if (match) {
      setMatchedStudent(match); // Store matched student data
      setStudentName(match.studentName);
      setStudentNumber(match.studentNumber);
      setStudentGPA(match.studentGPA);
      setStudentEmail(match.studentEmail);
      setStudentDepartment(match.studentDepartment);

      localStorage.setItem('studentName', match.studentName);
      localStorage.setItem('studentNumber', match.studentNumber);
      localStorage.setItem('studentGPA', match.studentGPA);
      localStorage.setItem('studentEmail', match.studentEmail);
      localStorage.setItem('studentDepartment', match.studentDepartment);

      setTimeout(() => {
        navigate('/landing');
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Delay for 1 second
      });
    } else {
      alert('Invalid email or password');
      setLoading(false);
    }
  }

  return (
    <main className='min-h-screen flex items-start justify-center body-bg'>
      {loading && <Spinner />}
      <div className="bg-white max-w-lg mx-auto p-8 md:p-12 rounded-lg shadow-2xl mt-32">
        <section>
          <h3 className="font-bold text-2xl">Welcome to VBU Course Registration System</h3>
          <p className="text-gray-600 pt-2">Login to your account.</p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Student Email</label>
              <input type="text" id="email" name="email" placeholder="123123123@vakifbank.std" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-300 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-300 transition duration-500 px-3 pb-3" />
            </div>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">
              Login
            </button>
          </form>
        </section>
        {matchedStudent && (
          <section className="mt-10">
            <p className="text-gray-600">Welcome, {matchedStudent.studentName}!</p>
          </section>
        )}
      </div>
    </main>
  );
}

export default LoginForm;


