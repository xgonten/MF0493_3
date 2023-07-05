// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3frWvXylLl7TjeDvdK0M4ChKNt9zJjxY",
  authDomain: "portfolio-react-julio-souto.firebaseapp.com",
  projectId: "portfolio-react-julio-souto",
  storageBucket: "portfolio-react-julio-souto.appspot.com",
  messagingSenderId: "1016327717442",
  appId: "1:1016327717442:web:1375566c5319fe1e1963db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// })

export const db = getFirestore(app)

export async function _signInWithEmailAndPassword(auth, email, password){
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    return credential.user
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorCode, errorMessage }
  }
}

export async function _signOut(auth){
  try {
    await signOut(auth)

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorCode, errorMessage }
  }
}