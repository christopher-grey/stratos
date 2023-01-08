// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVwlyjzm3btBy0fWahWCZG67e-Xfh04l0",
  authDomain: "stratosv1.firebaseapp.com",
  databaseURL: "https://stratosv1-default-rtdb.firebaseio.com",
  projectId: "stratosv1",
  storageBucket: "stratosv1.appspot.com",
  messagingSenderId: "261842456718",
  appId: "1:261842456718:web:c3e74a83b83f43a06ff9df",
  measurementId: "G-07DW8T077C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);