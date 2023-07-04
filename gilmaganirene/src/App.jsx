import { auth } from "../helpers/firebase/firebase"

import { useUser } from "../hooks/useUser"
import { LoginForm } from "../components/login/LoginForm"

export function App () {
 const {  isLoading, email, uid, error, _signInWithEmailAndPassword, _signOut } = useUser(auth)
 const { message } = error || false


  const handleSign = ({ email, password }) => {
   _signInWithEmailAndPassword(email, password)
    }
      
      const handleSignOut = () => {
     _signOut()
  }

  return (
    <>
      <h1>Accede a mi Portfolio</h1>
      <LoginForm onSumbit={handleSign} onSignOut={handleSignOut} />
      {message}
      {email}-{uid}
      {isLoading && ' ...cargando'}
    </>
  )
}

