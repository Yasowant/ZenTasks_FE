import React from "react";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/DashBoard"));
const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Tasks = lazy(() => import("../pages/Tasks"));
const Overview = lazy(() => import("../pages/Overview"));

const ProtectedRoutes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default ProtectedRoutes;
