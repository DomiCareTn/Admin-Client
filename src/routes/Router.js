import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const NewRegister = lazy(() => import("../views/ui/NewRegister"));

const Posts = lazy(() => import("../views/ui/Posts"));
const Equipements = lazy(() => import("../views/ui/Equipements"));

const Users = lazy(() => import("../views/ui/Users"));

const Reports = lazy(() => import("../views/ui/Reports"));
const Login = lazy(() => import("../views/ui/Login"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/NewRegister", exact: true, element: <NewRegister /> },
      { path: "/Posts", exact: true, element: <Posts /> },
      { path: "/Equipements", exact: true, element: <Equipements /> },
      
      { path: "/Users", exact: true, element: <Users /> },
      
      { path: "/Reports", exact: true, element: <Reports /> },
        ],
      },
      { path: "/login", exact: true, element: <Login /> }
    ]
    
    export default ThemeRoutes;
