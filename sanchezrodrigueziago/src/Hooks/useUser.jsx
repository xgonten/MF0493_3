import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export function useUser() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        // comprobar user
        const listen = onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            setUser(user);
            console.log(user)
          } else {
            // setUser(null)
          }
        });
    
        return () => {
          listen();
        };
      }, []);

    const signIn = (email, password) => {
        setError(null)
        setUser(null)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           
            const { user } = userCredential;
            setUser(user)
        }).catch((error) => {
            
            setError(error);
        } )
    }

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
           navigate("/")
           setUser(null)
           setError(null)
            // mostrar el boton de log in y un aviso 
          })
          .catch((error) => setError(error));
      };

  return {
    user,
    error,
    signIn,
    userSignOut
  }
}
