import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Component/Root";
import Home from "../Component/Home/Home";
import AllVehicles from "../Component/ALLVehicles/AllVehicles";
import Regiter from "../Pages/Register/Regiter";
import Login from "../Pages/Login/Login";
import VehiclesDetails from "../Pages/VehiclesDetails";
import AddVehiles from "../Component/AddVehiles/AddVehiles";
import MyVehicles from "../Component/MyVehicles/MyVehicles";
import UpdateVehicles from "../Component/Updatevehicles/UpdateVehicles";







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
},
{
    path:'/vehiclesDetails/:_id',
    loader:({params})=>fetch(`http://localhost:3000/all-vehicles/${params._id}`),
    Component:VehiclesDetails
},{
  path:'/addvehile',
  Component:AddVehiles
},
{
  path: "/myvehicles",
  element: <MyVehicles />,
},

{
  path:'/myvehicles/:_id',
     loader:({params})=>fetch(`http://localhost:3000/all-vehicles/${params._id}`),
  Component:MyVehicles
},{
  path:'/update/:_id',
   loader:({params})=>fetch(`http://localhost:3000/all-vehicles/${params._id}`),
  Component:UpdateVehicles
}
]
  },

])
export default router