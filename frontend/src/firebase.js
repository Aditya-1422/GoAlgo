// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYP3By8QDby9_qACz7av-sRY37MAe4CUg",
  authDomain: "test-10a51.firebaseapp.com",
  projectId: "test-10a51",
  storageBucket: "test-10a51.appspot.com",
  messagingSenderId: "157121994187",
  appId: "1:157121994187:web:5f981a08a0701cd031aa4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
