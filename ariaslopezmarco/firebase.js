import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: "AIzaSyAssf9v75wugKK75r7xI3GjLyaP_NyhPA4",
  authDomain: "portfolio-marcoj-project.firebaseapp.com",
  projectId: "portfolio-marcoj-project",
  storageBucket: "portfolio-marcoj-project.appspot.com",
  messagingSenderId: "858682393780",
  appId: "1:858682393780:web:789bccc779834bf549c3e1"
};

// Inicializa Firebase:
export const app = initializeApp(firebaseConfig)
// inicializa autentificación en Firebase:
export const auth = getAuth(app)
// Inicializar la Base de Datos
export const db = getFirestore(app)


