import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'

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

        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  }
  useEffect(() => {
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _signInWithEmailAndPassword = (email, password) => {
    setIsLoading(true)
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user)
        const { user } = userCredential
        const data = { uid: user.uid, email: user.email, displayName: user.displayName }
        localStorage.setItem('usuario', JSON.stringify(data))

        setUser(
          data
        )
        // ...
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  const _signOut = () => {
    setIsLoading(true)
    setError(null)
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(initialValue)
      localStorage.removeItem('usuario')
    }).catch((error) => {
      setError(error)
    }).finally(() => setIsLoading(false))
  }

  return {
    _signInWithEmailAndPassword,
    _signOut,
    user,
    email: user?.email,
    uid: user?.uid,
    displayName: user?.displayName,
    error,
    isLoading
  }
}