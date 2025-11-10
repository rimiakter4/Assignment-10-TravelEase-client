import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Component/Root";
import Home from "../Component/Home/Home";
import AllVehicles from "../Component/ALLVehicles/AllVehicles";
import Regiter from "../Pages/Register/Regiter";
import Login from "../Pages/Login/Login";







const router=createBrowserRouter([
     {
    path: "/",
    Component:Root,
    children:[{
      index: true,
       Component: Home 

    }
,

{
  path:'/allvehicles',
  Component:AllVehicles
},{
  path:'/register',
  Component:Regiter
},{
  path:'/login',
  Component:Login
}
]
  },

])
export default router