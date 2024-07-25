



import React, { useState, useEffect, useContext } from 'react';
import { StudentContext } from './StudentContext'; // Import the context
import { useLocation, useNavigate } from 'react-router-dom';

import app from "../firebaseConfig";
import { getDatabase, ref, set, push, get } from "firebase/database";
const CourseRegistration = () => {
  const [courseArray, setCourseArray] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [hasExistingRecord, setHasExistingRecord] = useState(false); // New state to track existing records

  const { studentNumber, setStudentNumber, } = useContext(StudentContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "school/courses");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setCourseArray(Object.values(snapshot.val()));
      } else {
        alert("Error fetching data");
      }
    };

    fetchData();
    // Check if there's an existing record for the current user
    const checkRecord = async () => {
      const recordExists = await checkExistingRecords();
      setHasExistingRecord(recordExists);
    };
    checkRecord();
  }, [studentNumber]);

  // Function for checking existing records
  const checkExistingRecords = async () => {
    const db = getDatabase(app);
    const enrolledCoursesRef = ref(db, "school/enrolledCourses");
    const snapshot = await get(enrolledCoursesRef);

    if (snapshot.exists()) {
      const existingRecord = Object.values(snapshot.val()).find(
        (record) => record.studentNumber === studentNumber
      );
      return existingRecord ? true : false;
    }
    return false;
  };

  const handleSelectCourse = (courseCode) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.includes(courseCode)
        ? prevSelected.filter((Code) => Code !== courseCode)
        : [...prevSelected, courseCode]
    );
  };

  const handleAddCourses = () => {
    const coursesToAdd = courseArray.filter((course) => selectedCourses.includes(course.courseCode));
    setRegisteredCourses((prevRegistered) => [...prevRegistered, ...coursesToAdd]);
    setCourseArray((prevAvailable) => prevAvailable.filter((course) => !selectedCourses.includes(course.courseCode)));
    setSelectedCourses([]);
  };

  const handleRemoveCourses = () => {
    const coursesToRemove = registeredCourses.filter((course) => selectedCourses.includes(course.courseCode));
    setCourseArray((prevAvailable) => [...prevAvailable, ...coursesToRemove]);
    setRegisteredCourses((prevRegistered) => prevRegistered.filter((course) => !selectedCourses.includes(course.courseCode)));
    setSelectedCourses([]);
  };


  const handleSaveCourses = async () => {
    const db = getDatabase(app);

    // Prepare data to be saved
    const enrolledCoursesData = registeredCourses.map(course => ({
      courseCode: course.courseCode,
      studentNumber: studentNumber,
      approved: "No"

    }));

    // Reference to the 'enrolledCourses' path in the database
    const enrolledCoursesRef = ref(db, "school/enrolledCourses");

    // Save each course's data to the database
    try {
      for (const courseData of enrolledCoursesData) {
        await push(enrolledCoursesRef, courseData);
      }
      alert("Data saved successfully");
    } catch (error) {
      alert("Error saving data: " + error.message);
    }
  };




  return (
    <div className=" w-full min-h-screen relative ">

      <div className="text-center">
        {hasExistingRecord ? (
          <div className='min-h-screen flex items-start justify-center body-bg'>
            <div className="bg-white max-w-lg mx-auto p-8 md:p-12 rounded-lg shadow-2xl mt-32">
              <section>
                <h3 className="font-bold text-2xl">You have already registered courses on VBU Course System</h3>
                <p className="text-gray-600 pt-2 mt-4">You will see your registered courses on<a href="/mycourses" className='text-yellow-500 hover:underline font-bold'> My Courses </a> page when your registration approved.</p>
              </section>

            </div>
          </div>) : (
          <div>
            <div className="px-4 md:px-10 py-4 md:py-7 mt-4 flex justify-between items-center">
              <div className="flex items-center justify-center">
                <p tabIndex="0" className="focus:outline-none text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-normal text-gray-800">
                  COURSE REGISTRATION
                </p>
              </div>
              <button
                onClick={handleSaveCourses}

                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute right-6 top-4 md:relative md:right-auto md:top-auto">
                Save
              </button>
            </div>

            <div className="mt-7 overflow-x-auto grid grid-row-3">
              <div className="w-full overflow-x-auto">
                <p tabIndex="0" className="focus:outline-none flex justify-center text-base sm:text-lg md:text-xl lg:text-2xl mb-1 ml-3 font-bold leading-normal text-gray-800 underline">
                  Available Courses
                </p>
                <table className="w-full whitespace-nowrap" id="table1">
                  <tbody>
                    {courseArray.map((course, index) => (
                      <tr key={index} tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                          <div className="ml-5">
                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                              <input
                                type="checkbox"
                                className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                checked={selectedCourses.includes(course.courseCode)}
                                onChange={() => handleSelectCourse(course.courseCode)}
                              />
                              <div className="check-icon hidden bg-yellow-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="ml-5">
                            <p className="text-sm leading-none text-gray-600 ml-2">#{course.courseCode}</p>

                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5 pr-3">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">{course.courseName}</p>
                          </div>
                        </td>
                        <td className="pl-8">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseTeacher}</p>
                          </div>
                        </td>
                        <td className="pl-5 pr-3">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseQuota}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleAddCourses}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Course
                  </button>
                </div>
              </div>

              <div className="w-full overflow-x-auto mt-10">
                <p tabIndex="0" className="focus:outline-none flex justify-center text-base sm:text-lg md:text-xl lg:text-2xl mb-1 ml-3 font-bold leading-normal text-gray-800 underline">
                  Registered Courses
                </p>
                <table className="w-full whitespace-nowrap" id="table2">
                  <tbody>
                    {registeredCourses.map((course, index) => (
                      <tr key={index} tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                          <div className="ml-5">
                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                              <input
                                type="checkbox"
                                className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                checked={selectedCourses.includes(course.courseCode)}
                                onChange={() => handleSelectCourse(course.courseCode)}
                              />
                              <div className="check-icon hidden bg-yellow-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="ml-5">
                            <p className="text-sm leading-none text-gray-600 ml-2">#{course.courseCode}</p>

                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5 pr-3">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">{course.courseName}</p>
                          </div>
                        </td>
                        <td className="pl-8">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseTeacher}</p>
                          </div>
                        </td>
                        <td className="pl-5 pr-3">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseQuota}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleRemoveCourses}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove Course
                  </button>
                </div>
              </div>
            </div></div>)}
      </div>
    </div>
  );
};

export default CourseRegistration;
