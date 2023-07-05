// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdZ9UvV3E5psWoswSNh9G0E7WsFFwfdkY",
  authDomain: "portfolio-final-iago.firebaseapp.com",
  projectId: "portfolio-final-iago",
  storageBucket: "portfolio-final-iago.appspot.com",
  messagingSenderId: "96003764659",
  appId: "1:96003764659:web:dda86c40ed4731aeaf5bc6",
  measurementId: "G-NL3M4NC9KG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);