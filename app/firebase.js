import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYpXrXX6H4Y8MclOJaVjxh-vXehdFZZHE",
  authDomain: "chat-app-b0bf8.firebaseapp.com",
  projectId: "chat-app-b0bf8",
  storageBucket: "chat-app-b0bf8.appspot.com",
  messagingSenderId: "111914612720",
  appId: "1:111914612720:web:2aaf9fac39bf7f81a88f35",
  measurementId: "G-P6YZY29LT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app };
export default app;
