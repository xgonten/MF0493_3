import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export function MainTemplate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
   
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
   
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-400 to-gray-800">
        <header className='px-6 py-4 text-white bg-gray-800 main-header'>
          <h1 className='text-5xl font-bold'>Portafolio</h1>
          <NavBar isAuthenticated={isAuthenticated} />
        </header>
        <main>
          <Outlet />
          {/* <LoginForm onSubmit={handleLogin} onSignOut={handleLogout} /> */}
        </main>
      </div>
    </>
  );
}

