import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, AddContent, ErrorPage, EditarContenido, ContentList } from '../pages/AdminPages'
import { MainTemplate } from '../templates/MainTemplate'
import { AccesoPrivado } from '../components'
import { HomePage } from '../pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: 'nuevo-contenido',
        element: <AccesoPrivado>
                      <AddContent/>
                </AccesoPrivado>,
      },
      {
        path: 'contenido',
        element: <AccesoPrivado>
                      <ContentList />
                  </AccesoPrivado>,
        children: [
          {
            path: ':option/:id',
            element: <EditarContenido/>,
          }
        ]
      },
    ]
  } 
])
