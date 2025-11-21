// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvy5EVDxo0No_USVYFkaI5XRc4OVZ9QR4",
  authDomain: "react-disney-plus-app-84445.firebaseapp.com",
  projectId: "react-disney-plus-app-84445",
  storageBucket: "react-disney-plus-app-84445.firebasestorage.app",
  messagingSenderId: "430032967030",
  appId: "1:430032967030:web:ad10cf6099a9ce89465657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;