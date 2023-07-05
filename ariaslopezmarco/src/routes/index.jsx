import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage, LogOutPage, ArticlesForm, EditarArticle } from '../pages'
import { AccesoPrivado } from '../components/AccesoPrivado'
import InicioPage  from '../pages/InicioPage'
import { ArticlePage } from '../pages'


// creamos el dirigidor de páginas: Router, objeto con childrens.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: '/',
        element: <InicioPage />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'logout',
        element: <LogOutPage />
      },
      {
        path: 'articles/:idDoc',
        element: <ArticlePage />
      },
      {
        path: 'articles',
        element: <AccesoPrivado>
          <ArticlesForm />
        </AccesoPrivado>
      },
      {
        path: 'articles/edit/:idDoc',
        element: <AccesoPrivado>
          <EditarArticle />
          </AccesoPrivado>  
      }
    ]
  }
])