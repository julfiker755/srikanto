import { createBrowserRouter } from "react-router-dom";
import Cart from "./Cart/Cart";
import Errorpage from "./Errorpage/Errorpage";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

const routes =createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'/cart',
                element:<Cart></Cart>
            }
        ]
    }
])

export default routes;