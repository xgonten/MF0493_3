import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar({ isAuthenticated }) {
  return (
    <nav className="flex justify-end">
      <div className="ml-4">
        <Link to="/">Inicio</Link>
      </div>
      <div className="ml-4">
        <Link to="/experiencia">Experiencia</Link>
      </div>
      <div className="ml-4">
        <Link to="/login">{isAuthenticated ? 'Conectado' : 'Login'}</Link>
      </div>
    </nav>
  );
}

// {uid && <div> <link to='/experiencias'>Añadir experiencia</link></div>}

