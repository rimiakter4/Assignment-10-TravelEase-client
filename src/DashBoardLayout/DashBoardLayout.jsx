// import React from 'react';
// import { NavLink } from 'react-router';

// const DashBoardLayout = () => {
//     return (
//        <div className="drawer lg:drawer-open">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Navbar */}
//     <nav className="navbar w-full bg-base-300">
//       <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//         {/* Sidebar toggle icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
//       </label>
//       <div className="px-4">Navbar Title</div>
//     </nav>
//     {/* Page content here */}
//     <div className="p-4">Page Content</div>
//   </div>

//   <div className="drawer-side is-drawer-close:overflow-visible">
//     <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//     <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
//       {/* Sidebar content here */}
//       <ul className="menu w-full grow">
//         {/* List item */}
//         <li>
//           <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
//             {/* Home icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
//             <span className="is-drawer-close:hidden">Homepage</span>
//           </button>
//         </li>

//         {/* List item */}
//         <li>
//           <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
//             {/* Settings icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
//             <span className="is-drawer-close:hidden">Settings</span>
//           </button>

 


//            <li><NavLink to='/dashboard/addproduct'> Add Product</NavLink></li>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
//     );
// };

// export default DashBoardLayout;
import React from 'react';
import { NavLink, Outlet } from 'react-router'; // Outlet যোগ করা হয়েছে যাতে ড্যাশবোর্ডের কন্টেন্ট দেখা যায়

const DashBoardLayout = () => {
    return (
        <div className="drawer lg:drawer-open bg-gradient-to-br from-slate-50 to-blue-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col">
                {/* --- Navbar --- */} 
                {/* <nav className="navbar w-full bg-[#0F172A] shadow-sm border-b border-base-300 px-4 sticky top-0 z-20">
                    <div className="flex-1">
                        {/* মোবাইলের জন্য টগল বাটন */}
                      {/* <label htmlFor="my-drawer-4" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <span className="text-xl text-white font-semibold hidden lg:block">Dashboard Overview</span>
                    </div>  */}

                    {/* Advanced Menu: Profile Dropdown (Requirement 7) */}
                    
                 {/* </nav>   */} 
                 {/* Navbar */} 
<nav className="navbar w-full bg-[#0F172A] shadow-md border-b border-slate-700 px-4 sticky top-0 z-20">
    <div className="flex-1">
        {/* মোবাইলের জন্য টগল বাটন - এখন এটি একদম ক্লিয়ার দেখা যাবে */}
        <label 
            htmlFor="my-drawer-4" 
            className="btn btn-ghost lg:hidden bg-white/10 hover:bg-white/20 text-white border border-white/20 mr-2"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5" 
                    d="M4 6h16M4 12h16M4 18h16" 
                />
            </svg>
        </label>
        
        <span className="text-xl text-white font-semibold hidden lg:block">Dashboard Overview</span>
        {/* মোবাইলে টাইটেল ছোট করে দেখানোর জন্য */}
        <span className="text-lg text-white font-bold lg:hidden">TravelEase</span>
    </div> 
</nav>

                {/* --- Page Content Area --- */}
                <main className="p-6">
                    {/* এখানে সব ড্যাশবোর্ড পেজের ডাটা দেখাবে */}
                    <Outlet /> 
                </main>
            </div>

            {/* --- Sidebar --- */}
            <div className="drawer-side  z-30">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay text-white"></label>
                <div className="menu p-4 w-80 min-h-full bg-[#0F172A]  shadow-sm text-base-content border-r  border-base-300">
                    
                    {/* Sidebar Brand/Logo */}
                    {/* <div  className="flex items-center gap-2 px-4 py-6 mb-2 border-b border-base-200">
                        <div className="bg-blue-500 text-white p-2 rounded-lg"><NavLink to='/'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></NavLink>
                            
                        </div>
                        <span className="text-2xl text-white font-bold tracking-tight">TravelEase Dashboard</span>
                    </div> */}
                    {/* Sidebar Brand/Logo Section (Mobile Responsive) */}
<div className="flex items-center gap-3 px-4 py-6 mb-2 border-b border-slate-700/50">
    {/* আইকন বক্স - মোবাইলে আরও উজ্জ্বল দেখাবে */}
    <div className="bg-white p-2.5 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] group hover:rotate-12 transition-all duration-300">
        <NavLink to='/'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 text-blue-600 md:h-6 md:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" 
                />
            </svg>
        </NavLink>
    </div>
    
    {/* টেক্সট - মোবাইলে যাতে ভেঙে না যায় */}
    <div className="flex flex-col">
        <span className="text-xl text-white font-black tracking-tight leading-none">
            TravelEase
        </span>
        <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] mt-1">
            Dashboard
        </span>
    </div>
</div>

                    {/* Navigation Links (Requirement 7: Admin/User Role based) */}
                    <ul className="space-y-1">
                        <li>
                            <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "bg-blue-500 text-white" : "text-white "}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Dashboard Home
                            </NavLink>
                        </li>

                        {/* Admin Routes */}
                        {/* <div className="pt-4 pb-2 text-xs font-semibold text-gray-500 px-4 uppercase tracking-wider">Inventory</div>
                        <li>
                            <NavLink to="/dashboard/addproduct" className={({ isActive }) => isActive ? "bg-blue-500 text-white" : ""}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Add Vehicle
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-vehicles" className={({ isActive }) => isActive ? "bg-blue-500 text-white" : ""}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                My Vehicles
                            </NavLink>
                        </li> */}

                        {/* User Routes */}
                        <div className="pt-4 pb-2 text-xs font-semibold text-white px-4 uppercase tracking-wider">User Panel</div>
  <li>
                            <NavLink to="/dashboard/mybookings" className={({ isActive }) => isActive ? "bg-blue-500 text-white" : "text-white"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                My Booking
                            </NavLink>
                        </li>
                          <li>
                            <NavLink to="/dashboard/myprofile" className={({ isActive }) => isActive ? "bg-blue-500 text-white" : "text-white"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                My Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;