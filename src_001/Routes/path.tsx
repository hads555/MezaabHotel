import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Lander";
import Leads from "../pages/CustomerManagement/Leads";
import CustomerList from "../pages/CustomerManagement/CustomerList";
import ProductManagement from "../pages/ProductManagement/ProductManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/leads",
        element: <Leads />,
      },
      {
        path: "/customer-list",
        element: <CustomerList />,
      },
      {
        path: "/products",
        element: <ProductManagement />,
      },
    ],
  },
]);
