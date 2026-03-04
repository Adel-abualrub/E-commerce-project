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
        path:'home',
        element:<HomePage/>

      },
      {
        path:'cart',

        element:
        <ProtectedRouter>
           <Cart/>
        </ProtectedRouter>
        
       
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'signup',
        element:<Signup/>

      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'product/:id',
        element: <ProductDetails/>
      }

    ],
  },
]);

export default router;
