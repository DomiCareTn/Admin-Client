import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));

const Posts = lazy(() => import("../views/ui/Posts"));
const Equipements = lazy(() => import("../views/ui/Equipements"));

const Users = lazy(() => import("../views/ui/Users"));

const Reports = lazy(() => import("../views/ui/Reports"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/Posts", exact: true, element: <Posts /> },
      { path: "/Equipements", exact: true, element: <Equipements /> },
     
      { path: "/Users", exact: true, element: <Users /> },
     
      { path: "/Reports", exact: true, element: <Reports /> },
    ],
  },
];

export default ThemeRoutes;
