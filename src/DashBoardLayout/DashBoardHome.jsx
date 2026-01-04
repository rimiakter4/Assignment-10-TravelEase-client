// import React, { useContext } from "react";
// import { Authcontext } from "../Context/AuthProvider";
// import { NavLink } from "react-router";
// import { motion } from "framer-motion";

// const DashboardHome = () => {
//   const { user } = useContext(Authcontext);

//   const stats = [
//     { id: 1, label: "Total Bookings", value: "05", icon: "📅", color: "bg-blue-100 text-blue-600" },
//     { id: 2, label: "Active Rentals", value: "01", icon: "🚗", color: "bg-green-100 text-green-600" },
//     { id: 3, label: "Total Spent", value: "$450", icon: "💰", color: "bg-purple-100 text-purple-600" },
//     { id: 4, label: "Review Given", value: "03", icon: "⭐", color: "bg-orange-100 text-orange-600" },
//   ];

//   return (
//     <div className="p-6 space-y-8">
//       {/* Welcome Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-gray-800">Welcome Back, {user?.displayName || "User"}!</h1>
//         <p className="text-gray-500 text-sm">Everything is looking good today.</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((item) => (
//           <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
//             <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}`}>
//               {item.icon}
//             </div>
//             <div>
//               <p className="text-gray-400 text-xs font-bold uppercase">{item.label}</p>
//               <h4 className="text-xl font-bold text-gray-800">{item.value}</h4>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Banner & Chart Area */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 p-9  text-white relative overflow-hidden shadow-lg">
//             <h2 className="text-2xl text-white font-bold mb-2">Drive Your Dream Today!</h2>
//             <p className="opacity-80 text-sm text-white max-w-sm">Explore our newest luxury collection with a 15% discount for first-time rentals.</p>
//             {/* <button  className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all">Check Now</button> */}
//             <NavLink to="/allvehicles">
//             <motion.button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)]  tracking-wider text-sm transition-all duration-300"
//               whileHover={{ 
//                 scale: 1.05, 
//                 backgroundColor: "#1d4ed8",
//                 boxShadow: "0px 15px 40px rgba(37, 99, 235, 0.6)" 
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//           Check Now
//             </motion.button>
//           </NavLink>
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
//         </div>

//         {/* Mini Table or Activity */}
//         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//           <h3 className="font-bold text-gray-800 mb-4">Quick Status</h3>
//           <ul className="space-y-4">
//              <li className="flex justify-between text-sm">
//                 <span className="text-gray-500">License Verification</span>
//                 <span className="text-green-500 font-bold">Verified ✅</span>
//              </li>
//              <li className="flex justify-between text-sm">
//                 <span className="text-gray-500">Last Trip</span>
//                 <span className="text-gray-800 font-bold">Tesla Model S</span>
//              </li>
//              <li className="flex justify-between text-sm">
//                 <span className="text-gray-500">Member Status</span>
//                 <span className="text-blue-500 font-bold">Pro Member</span>
//              </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
// DashboardHome.jsx (Frontend)
// DashboardHome.jsx (Frontend)
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthProvider";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const DashboardHome = () => {
  const { user } = useContext(Authcontext);
  const [statsData, setStatsData] = useState({
    totalBookings: 0,
    activeRentals: 0,
    totalSpent: 0
  });

  useEffect(() => {
    if (user?.email) {
      // Backend theke nirdishto user-er stats fetch kora
      fetch(`https://assignment-10-travelease.vercel.app/user-stats/${user.email}`)
        .then((res) => res.json())
        .then((data) => setStatsData(data))
        .catch((err) => console.error("Error fetching dashboard stats:", err));
    }
  }, [user?.email]);

  const stats = [
    { id: 1, label: "Total Bookings", value: statsData.totalBookings, icon: "📅", color: "bg-blue-100 text-blue-600" },
    { id: 2, label: "Active Rentals", value: statsData.activeRentals, icon: "🚗", color: "bg-green-100 text-green-600" },
    { id: 3, label: "Total Spent", value: `$${statsData.totalSpent}`, icon: "💰", color: "bg-purple-100 text-purple-600" },
    { id: 4, label: "Review Given", value: "03", icon: "⭐", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back, {user?.displayName || "User"}!</h1>
        <p className="text-gray-500 text-sm">Account: {user?.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
              <h4 className="text-xl font-bold text-gray-800">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="p-10 bg-gradient-to-b from-blue-400 to-blue-500 rounded-[2rem] text-white relative overflow-hidden shadow-lg">
        <h2 className="text-2xl text-white font-bold mb-2">Drive Your Dream Today!</h2>
        <p className="opacity-80 text-white text-sm mb-6 max-w-sm">Explore our newest luxury collection with a 15% discount.</p>
        <NavLink to="/allvehicles">
          <button className="bg-white text-blue-600 px-8 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Check Now</button>
        </NavLink>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
      </div>
    </div>
  );
};

// EI LINE TI OBOSHSHOI THAKTE HOBE (Build error thik korar jonno)
export default DashboardHome;