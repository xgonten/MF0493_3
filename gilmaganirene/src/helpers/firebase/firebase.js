// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu2p--EHY3SpBc62hzHs70dwppdzqqSFs",
  authDomain: "portfolio-irene-project.firebaseapp.com",
  projectId: "portfolio-irene-project",
  storageBucket: "portfolio-irene-project.appspot.com",
  messagingSenderId: "542562529275",
  appId: "1:542562529275:web:dc5e2dc968059cdbce255e"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
//  initialize firebase authentication and get a reference to the service
export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
