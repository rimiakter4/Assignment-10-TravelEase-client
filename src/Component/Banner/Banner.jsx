import React from "react";
import { NavLink } from "react-router";


const Banner = () => {


  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={'https://i.ibb.co.com/CK8Mw5ks/premium-photo-1686730540277-c7e3a5571553.jpg'}
        alt="Hero Banner"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Ride
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl">
          Browse a wide range of vehicles and start your journey today with ease and comfort.
        </p>

        <button
        
          className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
         <NavLink to='allvehicles'>All Vehicles </NavLink> 
        </button>
      </div>
    </section>
  );
};

export default Banner;
