// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXRGyD7aV19s-lWc6_fmX9uiX6fHnN_GY",
  authDomain: "portfolio-equinba-project.firebaseapp.com",
  projectId: "portfolio-equinba-project",
  storageBucket: "portfolio-equinba-project.appspot.com",
  messagingSenderId: "527253700612",
  appId: "1:527253700612:web:373f1152b0e7a9745cf551"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);