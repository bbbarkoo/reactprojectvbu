import React from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from 'react';

function CourseList() {
    let [courseArray, setCourseArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "school/courses");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setCourseArray(Object.values(snapshot.val()));
        } else {
            alert("error");
        }
    }
    useEffect(() => {
        fetchData();
    }, []); // Empty array means this effect runs once on component mount

    return (
        <div className="sm:px-6 w-full min-h-screen">
            <div className="px-4 md:px-10 py-4 md:py-7 mt-4  flex justify-between items-center">
                <div className="flex items-center justify-center">
                    <p tabIndex="0" className="focus:outline-none text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-normal text-gray-800">
                        COURSE LIST
                    </p>
                </div>

            </div>
            <div className="mt-7 overflow-x-auto flex justify-between">
                <table className="w-full whitespace-nowrap mr-2" id="table1">
                    <tbody>
                        {courseArray.map((course, index) => (
                            <React.Fragment key={index}>
                                <tr tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <p className="text-sm leading-none text-gray-600 ml-2">#{course.courseCode}</p>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                                {course.courseName}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="pl-8">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <circle
                                                    cx="7.50004"
                                                    cy="7.49967"
                                                    r="1.66667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></circle>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseTeacher}</p>
                                        </div>
                                    </td>

                                    <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.5 5H16.6667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.5 10H16.6667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.5 15H16.6667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.16669 5V5.00667"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.16669 10V10.0067"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.16669 15V15.0067"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseQuota}</p>
                                        </div>
                                    </td>
                                    <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M10 9.1665V9.17484"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M6.66669 9.1665V9.17484"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M13.3333 9.1665V9.17484"
                                                    stroke="#52525B"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2">{course.courseDepartment}</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>





    );
};

export default CourseList
