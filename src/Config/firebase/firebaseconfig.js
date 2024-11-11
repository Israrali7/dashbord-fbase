// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzZ1b2Gs5LPoKHvHyjpZ5QQTCxsky0IQ",
  authDomain: "react-fbase-8506d.firebaseapp.com",
  projectId: "react-fbase-8506d",
  storageBucket: "react-fbase-8506d.firebasestorage.app",
  messagingSenderId: "248350908701",
  appId: "1:248350908701:web:a75da6564bd0099496c1f4",
  measurementId: "G-W1BJ3ZZ0Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export the initialized services for use in other files
export   {app , db} 
