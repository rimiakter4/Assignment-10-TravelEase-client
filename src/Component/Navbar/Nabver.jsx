
import { NavLink } from 'react-router';
import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
import { Authcontext } from '../../Context/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Nabver = () => {
  const { user, logout } = useContext(Authcontext);
  const handellogout = () => {
    logout()
      .then(() => toast("LogOut successfully"))
      .catch(err => console.log(err));
  };

  const links = <>
    <li><NavLink to="/" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>Home</NavLink></li>
    <li><NavLink to="/allvehicles" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>All Vehicles</NavLink></li>
    <li><NavLink to="/addvehile" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>Add Vehicle</NavLink></li>
    <li><NavLink to="/myvehicles" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>My Vehicles</NavLink></li>
    <li><NavLink to="/mybooking" className={({ isActive }) => `font-semibold text-white text-[16px] ${isActive ? 'underline underline-offset-4' : ''}`}>My Bookings</NavLink></li>
  </>;

  return (
    <div>
      <div className="navbar bg-linear-to-l from-sky-500 to-sky-300 shadow-sm">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content nav bg-black rounded-box z-10 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img className='lg:w-[90px] w-[70px] rounded-full' src={nabimg} alt="" />
        </div>

        {/* MIDDLE */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-4">

          {/* USER PROFILE IF LOGGED IN */}
          {user && (
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-12 h-12 rounded-full border-2 border-white transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-sky-300"
              />
              <span
                className="
                  absolute opacity-0 group-hover:opacity-100
                  transition-all duration-300 ease-in-out
                  bg-black/80 backdrop-blur-md text-white
                  text-sm px-4 py-1 rounded-xl shadow-lg
                  whitespace-nowrap
                  left-1/2 -translate-x-1/2
                  top-14 group-hover:top-16
                "
              >
                {user.displayName}
              </span>
            </div>
          )}

      
          {!user && (
            <NavLink to='/register' className="btn bg-sky-700 hover:bg-sky-800 text-white font-semibold w-[100px]">
              Register
            </NavLink>
          )}

          {user ? (
            <button onClick={handellogout} className="btn bg-sky-700 hover:bg-sky-800 text-white font-semibold w-[100px]">
              Log out
            </button>
          ) : (
            <NavLink to='/login' className="btn bg-sky-700 hover:bg-sky-800 text-white font-semibold w-[100px]">
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabver;
