// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhXPT4Iph4Y44mVBi67UTYK1YR3wmISkY",
  authDomain: "portfolio-under-project.firebaseapp.com",
  projectId: "portfolio-under-project",
  storageBucket: "portfolio-under-project.appspot.com",
  messagingSenderId: "496185787918",
  appId: "1:496185787918:web:428cf007e60e26eb43de5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const db = getFirestore(app)




