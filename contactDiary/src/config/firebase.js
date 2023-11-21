// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD8I0SXKI8ok8IoJeYcKSyvuo6k_INBhI",
  authDomain: "contactdiary-7a197.firebaseapp.com",
  projectId: "contactdiary-7a197",
  storageBucket: "contactdiary-7a197.appspot.com",
  messagingSenderId: "270565831578",
  appId: "1:270565831578:web:4e33e4b35359b53bdc8023"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);