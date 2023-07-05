import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useEffect, useState } from "react"

const initialValue = {
  uid: '',
  email: '',
  displayName: ''
}

export function useUser(auth) {
  const [user, setUser] = useState(initialValue)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const loadUser = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = { uid: user.uid, email: user.email, displayName: user.displayName }
        setUser(data)
      } else {
        //
      }
    })
  }

  useEffect(() => {
    loadUser()
  }, [])


  const _signInWithEmailAndPassword = (email, password) => {
    setIsLoading(true)
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }


  const _signOut = () => {
    setIsLoading(true)
    setError(null)
    signOut(auth)
      .then(() => { setUser(initialValue) })
      .catch((error) => { setError(error) })
      .finally(() => setIsLoading(false))
  }

  return {
    _signInWithEmailAndPassword,
    _signOut,
    user,
    //...user,      lo mismo q las 3 líneas siguientes, pero mejor:
    email: user.email,
    uid: user.uid,
    displayName: user.displayName,
    error,
    isLoading
  }
}
