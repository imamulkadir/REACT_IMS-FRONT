import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../Layout/Layout.jsx";
import Dashboard from "../components/DashboardCom/Dashboard.jsx";
import Products from "../components/DashboardCom/Products.jsx";
import Suppliers from "../components/DashboardCom/Suppliers.jsx";
import Customers from "../components/DashboardCom/Customers.jsx";
import Transactions from "../components/DashboardCom/Transactions.jsx";
import Reports from "../components/DashboardCom/Reports.jsx";
import Settings from "../components/DashboardCom/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
]);

export default router;
