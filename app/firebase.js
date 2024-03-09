// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyAiNA_1lcHeCExwEoAKeRemKA3y1cxGNi8",
  authDomain: "chat-web-app-1c93d.firebaseapp.com",
  projectId: "chat-web-app-1c93d",
  storageBucket: "chat-web-app-1c93d.appspot.com",
  messagingSenderId: "143006852403",
  appId: "1:143006852403:web:4b29efee60ff340f0b4a46",
  measurementId: "G-6NNLKSKE4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app };
export default app;
