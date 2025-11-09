import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Component/Root";
import Home from "../Component/Home/Home";
import AllVehicles from "../Component/ALLVehicles/AllVehicles";







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
}
]
  },

])
export default router