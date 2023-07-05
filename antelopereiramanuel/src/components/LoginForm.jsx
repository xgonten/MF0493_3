import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // El usuario ha iniciado sesión exitosamente con Firebase
        const user = userCredential.user;
        // Realiza acciones adicionales si es necesario
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        // Maneja el error de inicio de sesión
      });
  };

  return (
    <form onSubmit={handleLogin} className="login-form-container">
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-button">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
