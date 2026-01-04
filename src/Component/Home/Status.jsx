import React from 'react';
import { FaCar, FaUsers, FaMapLocationDot, FaStar } from "react-icons/fa6";

const Status = () => {
  const stats = [
    { id: 1, icon: <FaCar />, count: "500+", label: "Vehicles Available" },
    { id: 2, icon: <FaUsers />, count: "10k+", label: "Happy Customers" },
    { id: 3, icon: <FaMapLocationDot />, count: "50+", label: "City Locations" },
    { id: 4, icon: <FaStar />, count: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="bg-gradient-to-b mx-auto w-11/12 rounded-2xl from-blue-400 to-blue-400 py-16 my-19">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.id} className="text-white space-y-2">
            <div className="text-4xl flex justify-center opacity-80">{item.icon}</div>
            <h2 className="text-3xl font-bold">{item.count}</h2>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;