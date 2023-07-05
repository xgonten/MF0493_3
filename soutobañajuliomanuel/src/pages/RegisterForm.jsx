import { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import WarningMessage from '../components/WarningMessage'

// eslint-disable-next-line react/prop-types
function RegisterForm() {
  const [user, setUser] = useState("example@example.com")
  const [password, setPassword] = useState("abc123.")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])
  
  const handleSignIn = (e) => {
    e.preventDefault()
    let user = e.target.user.value.trim()
    let pass = e.target.pass.value.trim()
      if(user !="" && pass !=""){
        setLoading(true)
        createUserWithEmailAndPassword(auth,user,pass)
          .then((credential) => {
            console.log(credential.user)
            setError("")
            setLoading(false)

          })
          .then(() => navigate("/"))
          .catch((error) => {
            setError(error.message)
            setLoading(false)
          })
      }
  }
  return (
    <>
      <div className='space-y-4 login-container justify-stretch'>
        <h2 className='text-2xl font-bold text-center'>Regístrate</h2>
        { error != "" ? <ErrorMessage error={error} /> : null }
        <WarningMessage warning={"Esto solo es una aplicación de prueba! No introduzcas datos reales"} />
        <form action="#" onSubmit={handleSignIn}>
          <fieldset className='flex flex-col p-4 space-y-4 text-left border-2 rounded-md w-96 border-slate-500'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="user">Usuario</label>
              <input className='p-2 rounded-md' type="text" name='user' id='user' value={user} onChange={(e) => setUser(e.target.value)}/>
            </div>
        
            <div className='flex flex-col space-y-2'>
              <label htmlFor="pass">Contraseña</label>
              <input className='p-2 rounded-md' type="password" name='pass' id='pass' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Entrar</button>
          </fieldset>
        </form>
        { loading ? <LoadingSpinner /> : null }
      </div>
    </>
  )
}

export default RegisterForm
