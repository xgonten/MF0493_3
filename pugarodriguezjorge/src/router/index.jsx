import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage, ErrorPage, WorkPage, KnowledgePage, AddVidaLaboral, AddEstudios } from '../pages'
import { AccesoPrivado } from '../components/AccesoPrivado'
import { EditarVidaLaboral } from '../pages/EditarVidaLaboral'
import { EditarEstudios } from '../pages/EditarEstudios'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'vidalaboral',
        element: <AccesoPrivado><WorkPage /></AccesoPrivado>
      },
      {
        path: 'estudios',
        element: <AccesoPrivado><KnowledgePage /></AccesoPrivado>
      },
      {
        path: 'editvidalaboral',
        element: <AccesoPrivado><AddVidaLaboral /></AccesoPrivado>
      },
      {
        path: 'editestudios',
        element: <AccesoPrivado><AddEstudios /></AccesoPrivado>
      },
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'vidalaboral/:idDoc',
        element: <AccesoPrivado><EditarVidaLaboral /></AccesoPrivado>
      },
      {
        path: 'estudios/:idDoc',
        element: <AccesoPrivado><EditarEstudios /></AccesoPrivado>
      }
    ]
  }
])
