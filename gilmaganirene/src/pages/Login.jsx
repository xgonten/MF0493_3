import { useContext } from "react"
import { LoginForm } from "../components/login/LoginForm"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"





export function Login () {

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
      <h1 className='p-4 text-3xl font-extrabold leading-tight tracking-tight text-center text-gray-800 sm:text-4xl dark:text-white'>Accede a mi Portfolio</h1>
      <LoginForm />
    {error?.message}
      {uid && <Navigate to = '/' />}
      <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
      {isLoading && <div className = "w-40 h-40 border-4 border-blue-400 rounded-full animate-spin">
   
        </div>}
</div>
      
     
    </>
   
  )
}

