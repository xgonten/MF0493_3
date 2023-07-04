import { createBrowserRouter } from "react-router-dom"
import { MainTemplate } from "../templates/MainTemplate"
import { Contact, EditarExperiencia, ExperienciasAdmin, HomePage, Login, Logout, NuevaExperienciaForm } from "../pages"
import { AccesoPrivado } from "../components/AccesoPrivado"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },

      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/experiencias',
        element: <AccesoPrivado><ExperienciasAdmin /></AccesoPrivado> // listado de experiencias
      },
      {
        path: '/experiencias/editar-experiencia/:idDoc',
        element: <EditarExperiencia />
      }

      ,
      {
        path: '/nueva-experiencia',
        element: <NuevaExperienciaForm />
      },

      {
        path: '/contact',
        element: <Contact />
      }

    ]
  }
])
