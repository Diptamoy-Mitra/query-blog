// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b1248.firebaseapp.com",
  projectId: "mern-blog-b1248",
  storageBucket: "mern-blog-b1248.appspot.com",
  messagingSenderId: "93419017261",
  appId: "1:93419017261:web:05fbb6355f19df6191d4a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);