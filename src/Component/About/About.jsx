import React from 'react';
import { NavLink } from 'react-router';

const About = () => {
    return (
        <div>
  
    <section className="relative py-20 px-6 md:px-20 ">
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-lg rounded-3xl p-12 shadow-2xl text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">
          About TravelEase
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          TravelEase is a modern, user-friendly platform connecting travelers with vehicles for rent. Enjoy seamless booking, secure payments, and a reliable travel experience tailored for both hosts and users.
        </p>
    
         <button
        
          className="bg-sky-500 hover:bg-sky-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
         <NavLink to=''>Learn More </NavLink> 
        </button>
      </div>

      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
    </section>
  

        </div>
    );
};

export default About;