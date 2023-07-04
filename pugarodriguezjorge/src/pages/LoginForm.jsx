import { useContext, useRef } from 'react'
import { useForm } from '../Hooks/useForm'
import { UserContext } from '../context/UserContext'

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
    // Envio los datos a papá
    _signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='p-10 rounded w-96 bg-slate-700'>
        <h1 className='my-8 text-xl font-bold text-center text-white'>Login</h1>
        <div className='overflow-hidden rounded-md shadow-xl'>
          <input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            type='email'
            className='w-full px-4 py-3 transition-colors ease-in-out bg-white border-r-2 border-transparent outline-none bg-opacity-10 focus:border-slate-400 placeholder:text-slate-500 text-slate-50'
            placeholder='Correo electrónico'
            id='email'
            ref={emailRef}
            onChange={handleChange}
            name='email'
            value={email}
          />
          <input
            type='password'
            className='w-full px-4 py-3 transition-colors ease-in-out bg-white border-r-2 border-transparent outline-none bg-opacity-10 focus:border-slate-400 placeholder:text-slate-500 text-slate-50'
            placeholder='Password'
            id='password'
            ref={passwordRef}
            onChange={handleChange}
            name='password'
            value={password}
          />
          <button className='w-full p-2 text-xl font-bold text-white transition-colors bg-orange-500 shadow-xl hover:bg-orange-600'
            type='button'
            onClick={handleSubmit}
          >
            Acceso
          </button>
        </div>
      </div>
    </div>
  )
}

