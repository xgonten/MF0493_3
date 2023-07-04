import { useContext } from "react"

import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export function Logout () {

const { error, uid, isLoading } = useContext(UserContext)
 //const {  isLoading, email, uid, error, _signInWithEmailAndPassword, _signOut } = useUser(auth)
 //const { message } = error || false


  //const handleSign = ({ email, password }) => {
 //  _signInWithEmailAndPassword(email, password)
   // }
      
    //  const handleSignOut = () => {
   //  _signOut()
//  }

  return (
    <>
      <h1 className="pt-20 text-3xl font-extrabold leading-tight tracking-tight text-center text-gray-800 sm:text-4xl dark:text-white">Hasta pronto!</h1>
     
    {error?.message}
      {uid && <Navigate to = '/logout' />}
      {isLoading && ' ...cargando'}
    </>
  )
}

//<div className='mx-auto text-center'>
