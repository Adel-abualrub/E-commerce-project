import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";

import Cart from "./pages/cart/Cart";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile/Profile";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";
import CheckOut from "./pages/CheckOut/CheckOut";
import Orders from "./pages/Profile/ordere/Orders";
import Settings from "./pages/Profile/settings/Settings";
import AcccountInfo from "./pages/Profile/accountInfo/AcccountInfo";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import EnterCode from "./pages/resetPassword/EnterCode";
import CategoryProducts from "./pages/categoryProducts.jsx/CategoryProducts";
import GuestRoute from "./GuestRoute";
import AllProducts from './pages/AllProducts/AllProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "cart",

        element: (
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRouter>
            <CheckOut />
          </ProtectedRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        ),
        children: [
          {
            index: true,
            element: <AcccountInfo />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",

        element: (
          <GuestRoute>
            <Signup />
          </GuestRoute>
        ),
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "enterCode",
        element: <EnterCode />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        ),
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "categoryProducts/:id",
        element: <CategoryProducts />,
      },
      {
        path:"products",
        element:<AllProducts/>

      }
    ],
  },
]);

export default router;
