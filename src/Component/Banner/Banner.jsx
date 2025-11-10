import React from "react";
import { NavLink } from "react-router";


const Banner = () => {


  return (
    <section className="relative w-full h-screen">
    
      <img
      src={'https://i.ibb.co.com/X1wLbZv/ai-generated-beautiful-background-for-car-rental-advertising-free-photo.jpg'}
        // src={'https://i.ibb.co.com/27MgL7b5/pngtree-car-purchase-budget-bills-flyer-background-material-picture-image-1095668.png'}
        // src={'https://i.ibb.co.com/tP2CJ8gw/premium-photo-1737478103803-c7136d3dc5d5.jpg'}
        alt="Hero Banner"
       
        className="w-full h-full object-cover brightness-75"
      />

  
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
