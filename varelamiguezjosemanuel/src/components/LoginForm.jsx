import React, { useRef, useState } from 'react'
import { useForm } from '../hooks/useForm'
import PropTypes from 'prop-types'

export function LoginForm({ onSubmit, onSignOut }) {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = () => {
    if (!email.length) {
      emailRef.current.focus()
      return;
    }
    if (!password.length) {
      passwordRef.current.focus()
      return;
    }
    // Envio los datos a papá
    onSubmit({ email, password });
    setIsAuthenticated(true);
  }

  const handleSignOut = () => {
    setIsAuthenticated(false)
    onSignOut();
    emailRef.current.value = ''
    passwordRef.current.value = ''
    window.location.reload()
  }

  return (
    <>
      <div className="flex items-start justify-center h-screen mt-4">
        <div className='grid px-4 pt-2 pb-4 mb-2 bg-white rounded place-content-center'>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='email'>
              Correo electrónico
            </label>
            <input className='w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker' id='email' ref={emailRef} onChange={handleChange} name='email' value={email} type='email' placeholder='pepito@gmail.com' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='password'>
              Contraseña
            </label>
            <input className='w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker' id='password' ref={passwordRef} onChange={handleChange} name='password' value={password} type='password' placeholder='******************' />
            <p className='text-xs italic text-red'>Por favor escribe una contraseña.</p>
          </div>
          <div className='flex items-center justify-start gap-2'>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 font-bold text-white transition-all bg-gray-500 rounded hover:bg-gray-700 hover:filter hover:brightness-75"
              type="button"
            >
              Acceder
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 font-bold text-white transition-all bg-gray-500 rounded hover:bg-gray-700 hover:filter hover:brightness-75"
              type="button"
            >
              Cerrar Sesión
            </button>
          </div>
          {!isAuthenticated ? (
            <div className='grid mt-10 place-items-center'>
              <img src='src/images/shield-lock.svg' alt='Imagen cargada' />
              <p className='text-4xl'><strong>Zona Privada</strong></p>
            </div>
          ) : (
            <div className='grid mt-10 place-items-center'>
              <p className='text-4xl'><strong>Bienvenido</strong></p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired
}