import { useContext } from "react"
import { LoginForm } from "../LoginForm"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export function LoginPage () {
 const { error, email, uid, isLoading } = useContext(UserContext)
 
 return (
   <>
     <LoginForm />
     {error?.message}
     {email}
     {uid && <Navigate to='/home' />}
     {isLoading && 'Cargando...'}
   </>
 )
}
