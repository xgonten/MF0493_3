import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { router } from './routes'
import './index.css'

// Creamos un proveedor de usuarios que englobe al dirigidor de páginas de la web(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)
