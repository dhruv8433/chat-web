// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYpXrXX6H4Y8MclOJaVjxh-vXehdFZZHE",
  authDomain: "chat-app-b0bf8.firebaseapp.com",
  projectId: "chat-app-b0bf8",
  storageBucket: "chat-app-b0bf8.appspot.com",
  messagingSenderId: "111914612720",
  appId: "1:111914612720:web:2aaf9fac39bf7f81a88f35",
  measurementId: "G-P6YZY29LT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);