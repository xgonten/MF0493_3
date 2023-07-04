// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuD1OB-O80KCs0U2LZ41dmIz3zdY6Xyqk',
  authDomain: 'portfolio-puga-project.firebaseapp.com',
  projectId: 'portfolio-puga-project',
  storageBucket: 'portfolio-puga-project.appspot.com',
  messagingSenderId: '975950984923',
  appId: '1:975950984923:web:005cf9c14bc80fe4d7fefe'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
