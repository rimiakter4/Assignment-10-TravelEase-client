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
import MyBookings from "../Component/myBooking/MyBooking";
import PrivateRoute from "../Context/Praivateroute";
import Erorr from "../Pages/Erorr/Erorr";
import DashBoardLayout from "../DashBoardLayout/DashBoardLayout";
import MyBooking from "../Component/myBooking/MyBooking";
import MyProfile from "../Component/myProfile/MyProfile";
import DashboardHome from "../DashBoardLayout/DashBoardHome";
import Aboutus from "../Component/About/Aboutus";
import Praivacy from "../Component/Home/Praivacy";









const router=createBrowserRouter([
     {
    path: "/",
    Component:Root,
    errorElement:<Erorr></Erorr>,
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
   

    loader:({params})=>fetch(`https://assignment-10-travelease.vercel.app/all-vehicles/${params._id}`),
  element:<VehiclesDetails></VehiclesDetails>
},


{
  path:'/addvehile',
  element:<PrivateRoute><AddVehiles></AddVehiles> </PrivateRoute> 
},
{
  path: "/myvehicles",
 element:<PrivateRoute><MyVehicles></MyVehicles></PrivateRoute>},

{
  path:'/myvehicles/:_id',
     loader:({params})=>fetch(`https://assignment-10-travelease.vercel.app/all-vehicles/${params._id}`),
  element: <MyVehicles></MyVehicles>
},{
  path:'/update/:_id',                                 
   loader:({params})=>fetch(`https://assignment-10-travelease.vercel.app/all-vehicles/${params._id}`),
  Component:UpdateVehicles
},{
  path:'/about',
  Component:Aboutus
},{
  path:'/praivacy',
  Component:Praivacy
}

],
  },{
  path:'/dashboard',
  element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
//  Component:DashBoardLayout,
 children:[{
  index:true,
  element:<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
  // Component:DashboardHome
 },{
  path:'mybookings',
  element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>

 },{
  path:'myprofile',
  element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
  // Component:MyProfile
 }
]
}


])
export default router