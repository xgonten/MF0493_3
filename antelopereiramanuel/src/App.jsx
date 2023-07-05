import React from 'react'
import Home from './assets/Home'
import { initializeApp } from 'firebase/app' // Importar solo el módulo 'app'
import 'firebase/compat/auth'; // Importar el módulo 'auth' si necesitas autenticación
import LoginForm from './components/LoginForm';


const firebaseConfig = {
  apiKey: "AIzaSyChPmGjU4Bfm3MJZs-lRV1U3quDP9_HH4A",
  authDomain: "portfolio-manuel-project.firebaseapp.com",
  databaseURL: "https://portfolio-manuel-project-default-rtdb.firebaseio.com",
  projectId: "portfolio-manuel-project",
  storageBucket: "portfolio-manuel-project.appspot.com",
  messagingSenderId: "196576512105",
  appId: "1:196576512105:web:84408fdab811c7bf6f3af8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

function App() {
  return (
    <>
     <Home/>
     <LoginForm />
    </>
  )
}

export default App