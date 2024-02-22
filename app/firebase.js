import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiNA_1lcHeCExwEoAKeRemKA3y1cxGNi8",

  authDomain: "chat-web-app-1c93d.firebaseapp.com",

  databaseURL: "https://chat-web-app-1c93d-default-rtdb.firebaseio.com",

  projectId: "chat-web-app-1c93d",

  storageBucket: "chat-web-app-1c93d.appspot.com",

  messagingSenderId: "143006852403",

  appId: "1:143006852403:web:4b29efee60ff340f0b4a46",

  measurementId: "G-6NNLKSKE4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
