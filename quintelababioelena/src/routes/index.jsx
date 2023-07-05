import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainTemplate from "../templates/MainTemplate";
import { LoginPage, HomePage } from "../pages";
import { ProjectsForm } from "../pages/ProjectsForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "nuevo-proyecto",
        element: <ProjectsForm />
      }
    ],
  },
]);

