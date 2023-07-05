import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'

export function useLogin(auth){
  const [login, setLogin] = useState(null)

  function _signInWithEmailAndPassword(user,pass){
    signInWithEmailAndPassword(auth,user,pass)
      .then((credential) => {
        console.log(credential.user)
        setLogin(credential.user)
    })
  }
  function _signOut(){
    signOut(auth)
      .then(setLogin(null))
  }

  return{
    login, _signInWithEmailAndPassword, _signOut
  }
}