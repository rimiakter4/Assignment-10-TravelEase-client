import React from 'react';
import { NavLink } from 'react-router';
import nabimg  from '../../assets/76eb3b183454807.65403a376d822.png'
const Nabver = () => {
  
    



const links = <>
  <li>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `font-semibold text-white ${isActive ? 'underline underline-offset-4' : ''}`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/allvehicles"
      className={({ isActive }) =>
        `font-semibold text-white ${isActive ? 'underline underline-offset-4' : ''}`
      }
    >
      All Vehicles
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/mybids"
      className={({ isActive }) =>
        `font-semibold text-white ${isActive ? 'underline underline-offset-4' : ''}`
      }
    >
      Add Vehicle
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/mybids"
      className={({ isActive }) =>
        `font-semibold text-white ${isActive ? 'underline underline-offset-4' : ''}`
      }
    >
      My Vehicles
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/mybids"
      className={({ isActive }) =>
        `font-semibold text-white ${isActive ? 'underline underline-offset-4' : ''}`
      }
    >
      My Bookings
    </NavLink>
  </li>
</>;
 
   

      {/* <p>{user?.email}</p> */}
    return (
        <div >
             <div >
         <div className="navbar bg-black shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content nav bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  
        
         
            {links}
          
     
    
     
      </ul>
    </div>
    <img className='w-[90px] rounded-full ' src={nabimg} alt="" />
    {/* <a className=" text-xl font-bold">TravelEase</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
      {/* <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            li
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
  <div className="navbar-end gap-3">

     <NavLink to='/register'className="btn  bg-linear-to-l  lg:w-[100px] w-[100px] bg-indigo-600 hover:bg-indigo-700  text-white text-semibold">Register </NavLink>
    
       <NavLink to='/login'className="btn  bg-linear-to-l lg:w-[100px] w-[100px] bg-indigo-600 hover:bg-indigo-700   text-white text-semibold">Log in </NavLink> 
   
    

  </div>
</div>
        </div>
        </div>
    );
};

export default Nabver;