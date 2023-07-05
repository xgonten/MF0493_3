import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function NavBar({ isAuthenticated }) {
  return (
    <nav className="flex justify-end">
      <div className="ml-4">
        <Link to="/">Inicio</Link>
      </div>
      {isAuthenticated && (
        <div className="ml-4">
          <Link to="/experiencia">Experiencia</Link>
        </div>
      )}
      <div className="ml-4">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
