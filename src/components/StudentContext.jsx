import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [studentName, setStudentName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [studentGPA, setStudentGPA] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentDepartment, setStudentDepartment] = useState('');

    useEffect(() => {
        const storedStudentName = localStorage.getItem('studentName');
        if (storedStudentName) {
            setStudentName(storedStudentName);
        }
        const storedStudentNumber = localStorage.getItem('studentNumber');
        if (storedStudentNumber) {
            setStudentNumber(storedStudentNumber);
        }
        const storedStudentGPA = localStorage.getItem('studentGPA');
        if (storedStudentGPA) {
            setStudentGPA(storedStudentGPA);
        }
        const storedStudentEmail = localStorage.getItem('studentEmail');
        if (storedStudentEmail) {
            setStudentEmail(storedStudentEmail);
        }
        const storedStudentDepartment = localStorage.getItem('studentDepartment');
        if (storedStudentDepartment) {
            setStudentDepartment(storedStudentDepartment);
        }
    }, []);

    return (
        <StudentContext.Provider value={{
            studentName, setStudentName,
            studentNumber, setStudentNumber,
            studentGPA, setStudentGPA,
            studentEmail, setStudentEmail,
            studentDepartment, setStudentDepartment
        }}>
            {children}
        </StudentContext.Provider>
    );
};