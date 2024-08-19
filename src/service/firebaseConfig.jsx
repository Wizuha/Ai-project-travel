// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_d4Pv7MtYOsu4MPHC_VbF9I0D2WuVtvc",
  authDomain: "wander-smart-89ebb.firebaseapp.com",
  projectId: "wander-smart-89ebb",
  storageBucket: "wander-smart-89ebb.appspot.com",
  messagingSenderId: "97519969131",
  appId: "1:97519969131:web:fa35e2116cc264e68f622e",
  measurementId: "G-MF861EWWWD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
