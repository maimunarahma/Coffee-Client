// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs--6uW-A-6wohMmNyLgVKHSwCoORyeag",
  authDomain: "coffee-client-8beaa.firebaseapp.com",
  projectId: "coffee-client-8beaa",
  storageBucket: "coffee-client-8beaa.firebasestorage.app",
  messagingSenderId: "439610887872",
  appId: "1:439610887872:web:28861703adc40a79fb6725",
  measurementId: "G-53RM7NH3CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)