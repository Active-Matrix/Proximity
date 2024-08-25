// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5fk_XhIN5VNCtDhdKUGxrUiIM8cPvf8",
  authDomain: "proximity-6a2ab.firebaseapp.com",
  projectId: "proximity-6a2ab",
  storageBucket: "proximity-6a2ab.appspot.com",
  messagingSenderId: "559415012430",
  appId: "1:559415012430:web:a76ea216b6dd1b1a5d671f",
  measurementId: "G-1G861Y7226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);