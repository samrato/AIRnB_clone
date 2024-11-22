// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase config from Firebase Console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvRQDuArb9v57hlH1UAK83rWXBCVReiPw",
    authDomain: "jumbo-businessapp.firebaseapp.com",
    projectId: "jumbo-businessapp",
    storageBucket: "jumbo-businessapp.firebasestorage.app",
    messagingSenderId: "461839781468",
    appId: "1:461839781468:web:fabc4a19c0138a96502099",
    measurementId: "G-TXEH03VJ92"
  };
  

// Initialize Firebacse
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
