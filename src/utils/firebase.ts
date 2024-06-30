// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "the-fantasy-flyer-51264.firebaseapp.com",
  projectId: "the-fantasy-flyer-51264",
  storageBucket: "the-fantasy-flyer-51264.appspot.com",
  messagingSenderId: "805887188724",
  appId: "1:805887188724:web:c85a31d6f93180373f48a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);