import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import HomePage from '../src/HomePage'
import LogInPage from '../src/LoginPage'
import CreateExperiencePage from "./CreateExperiencePage";


/** Modificar errores */
const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/login',
        element: <LogInPage/>
    },
    {
        path:'/create',
        element: <CreateExperiencePage/>
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>        
        <RouterProvider router={router}/>       
    </React.StrictMode>
)