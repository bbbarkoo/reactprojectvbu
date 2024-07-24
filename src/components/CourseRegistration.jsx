import React, { useState } from 'react';

const CourseRegistration = () => {
  const [availableCourses, setAvailableCourses] = useState([
    { id: 1, name: 'Marketing Keynote Presentation', teacher: 'Teacher Name', quota: 23 },
    { id: 2, name: 'Business Analytics', teacher: 'Teacher Name', quota: 30 }
  ]);

  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedRegisteredCourses, setSelectedRegisteredCourses] = useState([]);

  const handleSelectCourse = (courseId) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.includes(courseId)
        ? prevSelected.filter((id) => id !== courseId)
        : [...prevSelected, courseId]
    );
  };

  const handleSelectRegisteredCourse = (courseId) => {
    setSelectedRegisteredCourses((prevSelected) =>
      prevSelected.includes(courseId)
        ? prevSelected.filter((id) => id !== courseId)
        : [...prevSelected, courseId]
    );
  };

  const handleAddCourses = () => {
    const coursesToAdd = availableCourses.filter((course) => selectedCourses.includes(course.id));
    setRegisteredCourses((prevRegistered) => [...prevRegistered, ...coursesToAdd]);
    setAvailableCourses((prevAvailable) => prevAvailable.filter((course) => !selectedCourses.includes(course.id)));
    setSelectedCourses([]);
  };

  const handleRemoveCourses = () => {
    const coursesToRemove = registeredCourses.filter((course) => selectedRegisteredCourses.includes(course.id));
    setAvailableCourses((prevAvailable) => [...prevAvailable, ...coursesToRemove]);
    setRegisteredCourses((prevRegistered) => prevRegistered.filter((course) => !selectedRegisteredCourses.includes(course.id)));
    setSelectedRegisteredCourses([]);
  };

  return (
    <div className="sm:px-6 w-full min-h-screen">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-center">
          <p tabIndex="0" className="focus:outline-none text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-normal text-gray-800">
            COURSE REGISTRATION
          </p>
        </div>
      </div>

      <div className="mt-7 overflow-x-auto grid grid-row-3 ">
        <div className="w-full overflow-x-auto">
          <p tabIndex="0" className="focus:outline-none flex justify-center text-base sm:text-lg md:text-xl lg:text-2xl mb-1 ml-3 font-bold leading-normal text-gray-800 underline">
            Available Courses
          </p>
          <table className="w-full whitespace-nowrap" id="table1">
            <tbody>
              {availableCourses.map((course) => (
                <tr key={course.id} tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                  <td>
                    <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          type="checkbox"
                          className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          checked={selectedCourses.includes(course.id)}
                          onChange={() => handleSelectCourse(course.id)}
                        />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center pl-5 pr-3">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">{course.name}</p>
                    </div>
                  </td>
                  <td className="pl-8">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">{course.teacher}</p>
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
                      <p className="text-sm leading-none text-gray-600 ml-2">Quota</p>
                    </div>
                  </td>
                  <td className="pl-5 pr-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">{course.quota}</p>
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
              {registeredCourses.map((course) => (
                <tr key={course.id} tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                  <td>
                    <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          type="checkbox"
                          className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                          checked={selectedRegisteredCourses.includes(course.id)}
                          onChange={() => handleSelectRegisteredCourse(course.id)}
                        />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center pl-5 pr-3">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">{course.name}</p>
                    </div>
                  </td>
                  <td className="pl-8">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">{course.teacher}</p>
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
                      <p className="text-sm leading-none text-gray-600 ml-2">Quota</p>
                    </div>
                  </td>
                  <td className="pl-5 pr-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">{course.quota}</p>
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
      </div>
    </div>
  );
};

export default CourseRegistration;
