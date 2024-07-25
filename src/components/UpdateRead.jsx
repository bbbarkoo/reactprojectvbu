
import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
    let [studentArray, setStudentArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "school/students");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {

            const myData = snapshot.val();
            const tempArray = Object.keys(myData).map(myFireId => {
                return {
                    ...myData[myFireId],
                    studentId: myFireId
                }
            })

            setStudentArray(tempArray);
        } else {
            alert("error");
        }
    }
    return (
        <div className='body-bg min-h-screen '><button onClick={fetchData}>Display Data</button>

            <ul className='ml-8 mt-4'>
                {studentArray.map((student, index) => (
                    <li key={index}>{student.studentNumber} - {student.studentName} - {student.studentDepartment} - {student.studentEmail} - {student.studentGPA} - {student.studentId}</li>
                ))}
            </ul>
        </div>
    )
}

export default Read