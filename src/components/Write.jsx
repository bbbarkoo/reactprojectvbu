// import React, { useState } from 'react';
// import app from "../firebaseConfig";
// import { getDatabase, ref, set, push } from "firebase/database";

// function Write() {
//     let [inputValue1, setInputValue1] = useState("");
//     let [inputValue2, setInputValue2] = useState("");
//     let [inputValue3, setInputValue3] = useState("");
//     let [inputValue4, setInputValue4] = useState("");
//     let [inputValue5, setInputValue5] = useState("");
// let [inputValue6, setInputValue6] = useState("");
//     const saveData = async () => {
//         const db = getDatabase(app);
//         const newDocRef = push(ref(db, "school/students"));
//         set(newDocRef, {
//             studentNumber: inputValue1,
//             studentName: inputValue2,
//             studentDepartment: inputValue3,
//             studentEmail: inputValue4,
//             studentGPA: inputValue5,
//             password: inputValue6

//         }).then(() => {
//             alert("Data saved successfully")
//         }).catch((error) => {
//             alert("Error: ", error.message)
//         })
//     }
//     return (
//         <div className='body-bg'>
//             <input className='ml-8 mt-4' type="text" value={inputValue1}
//                 onChange={(e) => setInputValue1(e.target.value)} /> <br />

//             <input className='ml-8 mt-4' type="text" value={inputValue2}
//                 onChange={(e) => setInputValue2(e.target.value)} /> <br />
//             <input className='ml-8 mt-4' type="text" value={inputValue3}
//                 onChange={(e) => setInputValue3(e.target.value)} /> <br />
//             <input className='ml-8 mt-4' type="email" value={inputValue4}
//                 onChange={(e) => setInputValue4(e.target.value)} /> <br />
//             <input className='ml-8 mt-4' type="number" value={inputValue5}
//                 onChange={(e) => setInputValue5(e.target.value)} /> <br />
//                 <input className='ml-8 mt-4' type="password" value={inputValue6}
//                 onChange={(e) => setInputValue6(e.target.value)} /> <br />
//             <button className='ml-8 mt-4' onClick={saveData}>SAVE DATA</button>

//         </div>
//     )
// }

// export default Write
import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
    let [inputValue3, setInputValue3] = useState("");
    let [inputValue4, setInputValue4] = useState("");
    let [inputValue5, setInputValue5] = useState("");
    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "school/courses"));
        set(newDocRef, {
            courseCode: inputValue1,
            courseName: inputValue2,
            courseDepartment: inputValue3,
            courseQuota: inputValue4,
            courseTeacher: inputValue5,

        }).then(() => {
            alert("Data saved successfully")
        }).catch((error) => {
            alert("Error: ", error.message)
        })
    }
    return (
        <div className='body-bg'>
            <input className='ml-8 mt-4' type="text" value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)} /> <br />

            <input className='ml-8 mt-4' type="text" value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)} /> <br />
            <input className='ml-8 mt-4' type="text" value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)} /> <br />
            <input className='ml-8 mt-4' type="number" value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)} /> <br />
            <input className='ml-8 mt-4' type="text" value={inputValue5}
                onChange={(e) => setInputValue5(e.target.value)} /> <br />

            <button className='ml-8 mt-4' onClick={saveData}>SAVE DATA</button>

        </div>
    )
}

export default Write