// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhaVsdLm-9bsM6sPOE_Ca2-mJ4yoYl4mw",
  authDomain: "goalgo-c8376.firebaseapp.com",
  projectId: "goalgo-c8376",
  storageBucket: "goalgo-c8376.appspot.com",
  messagingSenderId: "15376845944",
  appId: "1:15376845944:web:46a869d6da9b4768bef18d",
  measurementId: "G-X28LYZQP0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };