import { createBrowserRouter } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import Layout from "../Layout/Lander";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <DasbhboardHeader />,
      },
    ],
  },
]);
