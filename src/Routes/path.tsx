import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import CustomerServices from "../components/CustomerManagemnt/CustomerServices";
import LayoutView from "../Layout/LayoutView";
import LayoutTeanenet from "../Layout/LayoutTeanenet";
import LayoutTeanenetFlow from "../Layout/LayoutTeanenetFlow";
import ProductDetail from "../components/ProductDetail";
import BusinessInfo from "../components/BusinessInfo";
import PaymentDetail from "../components/PaymentDetail";
import SetPassword from "../components/SetPassword";
import Finish from "../components/Finish";
import TeanenetDashboard from "../components/Dashboard/TeanenetDashboard";
import CustomerList from "../pages/CustomerManagement/CustomerList";
import Leads from "../pages/CustomerManagement/Leads";
import Departments from "../pages/DepartmentManagement/Departments";
import FieldInvestigation from "../components/CustomerManagemnt/FieldInvestigation";
import Maintenance from "../components/CustomerManagemnt/Maintenance";
import AllFlights from "../pages/GroupFlights/AllFlights";
import AddFlights from "../pages/GroupFlights/AddFlights";
import AllAgents from "../pages/Agents/AllAgents";
import AddAgents from "../pages/Agents/AddAgents";
import LocationCountries from "../pages/Locations/LocationCountries";
import AddCountry from "../pages/Locations/AddCountry";
import AddCity from "../pages/Locations/AddCity";
import Suppliers from "../pages/Suppliers/Suppliers";
import AddSupplier from "../pages/Suppliers/AddSupplier";
import StaffLists from "../pages/Staff/StaffLists";
import LocationCities from "../pages/Locations/LocationCities";
import LandingLayout from "../Layout/LandingLayout";
import ManagementUser from "../pages/Management/ManagementUser";
import NewAgent from "../pages/Agents/NewAgent";

import AddRoom from "../components/AddRoom";
import AddPrice from "../components/AddPrice";
import PropertyDetails from "../components/PropertyDetails";
export const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <LayoutTeanenet />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <TeanenetDashboard />,
  //     },
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
  // {
  //   path: "teanenetflow",
  //   element: <LayoutTeanenetFlow />,
  //   children: [
  //     {
  //       path: "product",
  //       element: <ProductDetail />,
  //     },
  //     {
  //       path: "info",
  //       element: <BusinessInfo />,
  //     },

  //     {
  //       path: "payment",
  //       element: <PaymentDetail />,
  //     },
  //     {
  //       path: "setpassword",
  //       element: <SetPassword />,
  //     },
  //     {
  //       path: "finish",
  //       element: <Finish />,
  //     },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
  {
    path: "/",
    element: <LandingLayout />,
    
  },
  {
       path: "/",
       element: <LayoutTeanenet />,
       children: [
         
         {
           path: "login",
           element: <Login />,
         },
         { path: "*", element: <NotFound /> },
         
       ],
     },
    
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "addroom/:id",
        element: <AddRoom />,
      },
      {
        path: "propertydetail/:id",
        element: <PropertyDetails />,
      },
      {
        path: "addprice/:id",
        element: <AddPrice />,
      },
      {
        path: "addflights",
        element: <AddFlights />,
      },
      {
        path: "allgroups",
        element: <AllFlights />,
      },
      {
        path: "addagents",
        element: <AddAgents />,
      },
      {
        path: "allagents",
        element: <AllAgents />,
      },
      {
        path: "customerlists",
        element: <CustomerList />,
      },
      {
        path: "location",
        element: <LocationCountries />,
      },
      {
        path: "addcountry",
        element: <AddCountry/>,
      },
      {
        path: "addcity",
        element: <AddCity/>,
      },
      {
        path: "suppliers",
        element: <Suppliers/>,
      },
      {
        path: "addcompany",
        element: <NewAgent/>,
      },
      {
        path: "user",
        element: <ManagementUser/>,
      },
      {
        path: "addsuppliers",
        element: <AddSupplier/>,
      },
      {
        path: "addsuppliers",
        element: <AddSupplier/>,
      },
      {
        path: "staff",
        element: <StaffLists/>,
      },
      {
        path: "accesscontrol",
        element: <StaffLists/>,
      },
      {
        path: "locationcountries",
        element: <LocationCountries/>,
      },
      {
        path: "locationcities",
        element: <LocationCities/>,
      },
      {
        path: "addcountry",
        element: <AddCountry/>,
      },
      {
        path: "addcity",
        element: <AddCity/>,
      },
      {
        path: "FieldInvestigation",
        element: <FieldInvestigation />,
      },
      {
        path: "Maintain",
        element: <Maintenance />,
      },
      {
        path: "CustomerInformation",
        element: <Departments />,
      },
      {
        path: "CustomerInformation",
        element: <Departments />,
      },
   
      { path: "*", element: <NotFound /> },
    ],
  },
  // {
  //   path: "view",
  //   element: <LayoutView />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "customerServices",
  //       element: <CustomerServices />,
  //     },
  //     {
  //       path: "callActivity",
  //       element: <CustomerServices />,
  //     },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
]);
