import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG84cHLNAqZPx4kszhk93ziT6oEyFXfL0",
  authDomain: "maku-ecommerce-react.firebaseapp.com",
  projectId: "maku-ecommerce-react",
  storageBucket: "maku-ecommerce-react.appspot.com",
  messagingSenderId: "864476670515",
  appId: "1:864476670515:web:353b0935f503f6c4441146"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);