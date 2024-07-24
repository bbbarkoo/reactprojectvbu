// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWhhiWVhFaXyQg2zArMcPW2gK6J5GyTzM",
  authDomain: "vbucoursesystem.firebaseapp.com",
  projectId: "vbucoursesystem",
  databaseURL:"https://vbucoursesystem-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "vbucoursesystem.appspot.com",
  messagingSenderId: "176805141629",
  appId: "1:176805141629:web:d3022e1d3617a8d0e6a514",
  measurementId: "G-DK9YN9Q95G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;