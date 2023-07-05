import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"
import { LogOutForm } from "../LogOutForm"

export function LogOutPage () {

  const { error, uid, isLoading } = useContext(UserContext)

  useEffect(() => {
    if (uid) {
      // Si el usuario está autenticado, realizar el cierre de sesión
    }
  }, [uid])

  if (isLoading) {
    return 'Marchando...'
  }

  if (error) {
    return <p>{error.message}</p>
  }

  // Redirigir al usuario si no está autenticado
  if (!uid) {
    return <Navigate to="/" replace />
  }

  // Si el usuario aún está autenticado, mostrar el formulario de cierre de sesión
  return (
    <>
      <LogOutForm />
    </>
  )
}