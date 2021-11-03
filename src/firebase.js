// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0LBwZh4pIy02Bauioai9b-2AvXqivntw",
  authDomain: "portfolio-fullstack.firebaseapp.com",
  databaseURL: "https://portfolio-fullstack-default-rtdb.firebaseio.com",
  projectId: "portfolio-fullstack",
  storageBucket: "portfolio-fullstack.appspot.com",
  messagingSenderId: "604452012856",
  appId: "1:604452012856:web:f745d8fcc04ebfaa1877cd",
  measurementId: "G-QPZQ1X229V"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;