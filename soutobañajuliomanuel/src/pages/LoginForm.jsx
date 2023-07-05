import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function LoginForm() {
  const [user, setUser] = useState("example@example.com")
  const [password, setPassword] = useState("abc123.")
  // const [login, setLogin] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  // useEffect(() => {
    // if(localStorage.getItem('user') != "")
    //   setLogin(JSON.parse(localStorage.getItem('user')))
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setLogin(user)
  //     }
  //   });
  // }, [])

  const handleSignIn = (e) => {
    e.preventDefault()
    let user = e.target.user.value.trim()
    let pass = e.target.pass.value.trim()
    // if(login == null){
      if(user !="" && pass !=""){
        setLoading(true)
        signInWithEmailAndPassword(auth,user,pass)
          .then((credential) => {
            console.log(credential.user)
            // setLogin(credential.user)
            setError("")
            setLoading(false)
            
            // localStorage.setItem('user',JSON.stringify(credential.user))
          })
          .then(() => navigate("/"))
          .catch((error) => {
            setError(error.message)
            setLoading(false)
          })
      }
    // }
  }
  return (
    <>
      <div className='space-y-4 login-container'>
        <h2 className='text-2xl font-bold text-center'>Inicia Sesion</h2>
        { error != "" ? <ErrorMessage error={error} /> : null }
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
            {/* {login != null ? <p>Usuario loggeado: {login.email}</p> : <p>Usuario desloggeado</p>} */}
          </fieldset>
        </form>
        { loading ? <LoadingSpinner /> : null }
      </div>
    </>
  )
}

export default LoginForm
