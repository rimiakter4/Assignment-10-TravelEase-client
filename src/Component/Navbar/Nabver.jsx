
// import { NavLink } from 'react-router';
// import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
// import { Authcontext } from '../../Context/AuthProvider';
// import { useContext } from 'react';
// import { toast } from 'react-toastify';
// import { IoHome } from "react-icons/io5";
// import { FaCar } from "react-icons/fa";

// const Nabver = () => {
//   const { user, logout } = useContext(Authcontext);
//   const handellogout = () => {
//     logout()
//       .then(() => toast("LogOut successfully"))
//       .catch(err => console.log(err));
//   };

//   const links = <>
  
//     <li><NavLink to="/" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><IoHome/>Home</NavLink></li>
//     <li><NavLink to="/allvehicles" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><FaCar />All Vehicles</NavLink></li>

// {
//   user?<li><NavLink  to='/dashboard' className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>Dashboard</NavLink></li>:<li><NavLink to='/about'className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>About Us</NavLink></li>
// }

//     <li><NavLink to="/addvehile" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>Add Vehicle</NavLink></li>
//     <li><NavLink to="/myvehicles" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>My Vehicles</NavLink></li>
//     <li><NavLink to="/mybooking" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>My Bookings</NavLink></li>
//   </>;

//   return (
//     <div>
//       <div className="navbar bg-linear-to-l bg-[#0F172A] shadow-sm">
//         {/* LEFT */}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul tabIndex="-1" className="menu menu-sm dropdown-content nav bg-black rounded-box z-10 mt-3 w-52 p-2 shadow">
//               {links}
//             </ul>
//           </div>
//           <img className='lg:w-[90px] w-[70px] rounded-full' src={nabimg} alt="" />
//         </div>

//         {/* MIDDLE */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end gap-4">

//           <div className="flex-none gap-2">
//                         <div className="dropdown dropdown-end">
//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                 {/* <div className="w-10 rounded-full">
                                   
//                                      <img
//                 src={user.photoURL}
//                 alt="profile"
                
//               />
//                                 </div> */}
//                               {
//   user && (
//     <div className="w-10 rounded-full border-2 border-primary overflow-hidden">
//       <img 
//         src={user?.photoURL || 'https://via.placeholder.com/150'} 
//         alt="profile" 
//       />
//     </div>
//   )
// }
                               
//                             </div>
//                             <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-300">
//                                 <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
//                                 <li><NavLink to="/">Home Website</NavLink></li>
//                                 <li><button className="text-red-500">Logout</button></li>
//                             </ul>
//                         </div>
//                     </div>

//           {/* USER PROFILE IF LOGGED IN */}
//           {user && (
//             <div className="relative group cursor-pointer">
             
//               <span
//                 className="
//                   absolute opacity-0 group-hover:opacity-100
//                   transition-all duration-300 ease-in-out
//                   bg-black/80 backdrop-blur-md text-white
//                   text-sm px-4 py-1 rounded-xl shadow-lg
//                   whitespace-nowrap
//                   left-1/2 -translate-x-1/2
//                   top-14 group-hover:top-16
//                 "
//               >
//                 {user.displayName}
//               </span>
//             </div>
//           )}

      
//           {!user && (
//             <NavLink to='/register' className="btn bg-sky-700 hover:bg-sky-800 text-white font-semibold w-[100px]">
//               Register
//             </NavLink>
//           )}

//           {user ? (
//             <button onClick={handellogout} className="btn bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 hover:bg-sky-800 text-white font-semibold w-[100px]">
//               Log out
//             </button>
//           ) : (
//             <NavLink to='/login' className="btn bg-[#2563EB] hover:bg-sky-800 text-white font-semibold w-[100px]">
//               Log in
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nabver;
import { NavLink } from 'react-router';
import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
import { Authcontext } from '../../Context/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { IoHome } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";


const Nabver = () => {
  const { user, logout } = useContext(Authcontext);

  const handellogout = () => {
    logout()
      .then(() => toast.success("LogOut successfully"))
      .catch(err => console.log(err));
  };

  const links = <>
    <li><NavLink to="/" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><IoHome />Home</NavLink></li>
    <li><NavLink to="/allvehicles" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><FaCar />All Vehicles</NavLink></li>
    
    {user ? (
      <>
        <li><NavLink to='/dashboard' className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><MdOutlineSpaceDashboard /> Dashboard</NavLink></li>
       
        <li><NavLink to="/dashboard/mybookings" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}><FaCarSide /> My Bookings</NavLink></li>
      </>
    ) : (
      <li><NavLink to='/about' className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>About Us</NavLink></li>
    )}
  </>;

  return (
    <div className="navbar bg-[#0F172A] shadow-sm px-4 lg:px-8">
      {/* LEFT: Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#0F172A] rounded-box z-[50] mt-3 w-52 p-2 shadow border border-gray-700">
            {links}
          </ul>
        </div>
        <img className='lg:w-[70px] w-[50px] rounded-full' src={nabimg} alt="Logo" />
      </div>

      {/* MIDDLE: Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

      {/* RIGHT: Conditional Profile or Auth Buttons */}
      <div className="navbar-end">
        {user ? (
          /* ১. ইউজার থাকলে প্রোফাইল ড্রপডাউন দেখাবে (লগআউট বাটন ভেতরে) */
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-blue-500">
              <div className="w-10 rounded-full">
                <img 
                  src={user?.photoURL || ''} 
                  title={user?.displayName} 
                  alt="Profile" 
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 border border-gray-200 text-black">
              <li className="px-4 py-2 font-bold text-gray-700">{user?.displayName}</li>
              <hr />
              <li><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><button onClick={handellogout} className="text-red-500 font-bold">Logout</button></li>
            </ul>
          </div>
        ) : (
          /* ২. ইউজার না থাকলে Login এবং Register বাটন দেখাবে */
          <div className="flex gap-2">
            <NavLink to='/login' className="btn  btn-outline border-white text-white hover:bg-white hover:text-black min-h-0 h-10 px-6">
              Log in
            </NavLink>
            <NavLink to='/register' className="btn btn-outline border-white text-white hover:bg-white hover:text-black min-h-0 h-10 px-6">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nabver;