import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { UserProvider } from './context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>,
)
