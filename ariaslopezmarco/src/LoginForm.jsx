import { useContext, useRef } from "react"
import { useForm } from "./hooks/useForm"
import { UserContext } from "./context/UserContext"


export function LoginForm() {
  const { _signInWithEmailAndPassword } = useContext(UserContext)
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = () => {
    if (!email.length) {
      emailRef.current.focus()
      return
    }

    if (!password.length) {
      passwordRef.current.focus()
      return
    }

    _signInWithEmailAndPassword(email, password)
  }


  return (
    <>
      <div className="app-container login-bg-image">
        <form className="grid place-items-end">
          <label htmlFor="email">
            Correo Electrónico
          </label>
          <input
          placeholder="correo electrónico"
          id='email'
          ref={emailRef}
          onChange={handleChange}
          type="email"
          name="email"
          value={email} />
        
          <label>
            Contraseña
          </label>
          <input
          placeholder="contraseña"
          id='password'
          ref={passwordRef}
          onChange={handleChange}
          type="text"
          name="password"
          value={password} />
          <button
          className="m-5"
          onClick={handleSubmit} type="button">Acceder</button>
        </form>
      </div>
    </>
  )
}

