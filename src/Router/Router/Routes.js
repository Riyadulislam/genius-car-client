import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Singup from "../../Pages/Singup/Singup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/singup',
            element:<Singup></Singup>
        },
        {
            path:'/checkout/:id',
            element:<Checkout></Checkout>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/orders',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>

        }
        ]
    }
])
export default router;