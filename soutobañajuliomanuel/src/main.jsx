import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Body from './pages/Body.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import LoginForm from './pages/LoginForm.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import Knowledge from './pages/Knowledge.jsx';
import AddReadForm from './pages/AddReadForm.jsx';
import VideoPage from './pages/VideoPage.jsx';
import RestrictedAccess from './pages/RestrictedAccess.jsx';

const url = window.location.pathname
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <><Knowledge /><Body /></>,
      },
      {
        path: "/RegisterForm",
        element: <RegisterForm />,
      },
      {
        path: "/LoginForm",
        element: <LoginForm />,
      },
      {
        path: "/Proyectos",
        element: <Body />,
      },
      {
        path: "/PaginaProyecto",
        element: <ProjectPage />,
      },
      {
        path: "/PaginaVideo",
        element: <VideoPage />,
      },
      {
        path: "/AddReadForm",
        element: <AddReadForm />,
      },
      {
        path: "/Restricted",
        element: <RestrictedAccess />,
      },
      {
        path: "/Perfil",
        element: <Knowledge />,
      },
      {
        path: '*',
        element: <Navigate replace to="/" />
      }
    ]
  },
  
], {basename: url});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
