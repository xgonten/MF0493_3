import { useContext } from "react"
import { LoginForm } from "./LoginForm"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"


export function LoginPage() {
  const {uid, isLoading, error} = useContext(UserContext)

  return (
    <>
      <h1 className="text-4xl"></h1>
      <LoginForm />
      {error?.message}
      {uid && <Navigate to='/' />} 
      {isLoading && 'Cargando....'}
    </>
  )


}
