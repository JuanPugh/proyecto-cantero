// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVhijyQ65fVYCHXuP2mpuL6zmGqI2a66c",
    authDomain: "ferreteriapiu-52d01.firebaseapp.com",
    projectId: "ferreteriapiu-52d01",
    storageBucket: "ferreteriapiu-52d01.firebasestorage.app",
    messagingSenderId: "69422537180",
    appId: "1:69422537180:web:eb5898df8b811a5ac5d719",
    measurementId: "G-G09GZMWPS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);