import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage } from '../pages'
import { ExperienciaForm } from '../components/ExperienciaForm2'

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
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'experiencia',
        element: <ExperienciaForm />
      }
    ]
  }

])
