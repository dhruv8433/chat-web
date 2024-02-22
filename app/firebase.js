// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYpXrXX6H4Y8MclOJaVjxh-vXehdFZZHE",
//   authDomain: "chat-app-b0bf8.firebaseapp.com",
//   projectId: "chat-app-b0bf8",
//   storageBucket: "chat-app-b0bf8.appspot.com",
//   messagingSenderId: "111914612720",
//   appId: "1:111914612720:web:2aaf9fac39bf7f81a88f35",
//   measurementId: "G-P6YZY29LT1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export { app };
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiNA_1lcHeCExwEoAKeRemKA3y1cxGNi8",
  authDomain: "chat-web-app-1c93d.firebaseapp.com",
  projectId: "chat-web-app-1c93d",
  storageBucket: "chat-web-app-1c93d.appspot.com",
  messagingSenderId: "143006852403",
  appId: "1:143006852403:web:4b29efee60ff340f0b4a46",
  measurementId: "G-6NNLKSKE4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export { app };
export default app;
const analytics = getAnalytics(app);
