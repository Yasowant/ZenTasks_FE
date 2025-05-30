import { MainLayout } from "@/layouts/main-layout";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const LandingPage = lazy(() => import("../pages/LandingPage/Index"));
const Login = lazy(() => import("../pages/LandingPage/Login"));
const Register = lazy(() => import("../pages/LandingPage/Register"));
const Pricing = lazy(() => import("../pages/LandingPage/Pricing"));

const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children:[{
        path:'/',
        element:<LandingPage/>
    }]
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default PublicRoutes;
