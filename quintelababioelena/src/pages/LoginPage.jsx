import { useContext } from 'react'
import { LoginForm } from '../components/login/LoginForm'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

export function LoginPage() {
 const {  uid, error, isLoading } = useContext(UserContext)

  return (
    <>
      <div className='flex justify-center h-screen pt-9'>
        <div className='w-96 '>
          <LoginForm />
          {uid && <Navigate to="/" />}
          {error?.message}
          {isLoading && 'Cargando...'}
        </div>
      </div>
    </>
  )
}
