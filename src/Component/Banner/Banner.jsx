
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.ibb.co/X1wLbZv/ai-generated-beautiful-background-for-car-rental-advertising-free-photo.jpg",
  "https://i.ibb.co.com/gLCcQxwC/photo-1704340142770-b52988e5b6eb.jpg",
  "https://i.ibb.co.com/gZ442VNc/istockphoto-1361790192-612x612.webp",
  "https://i.ibb.co.com/ZzDxfcVw/photo-1580273916550-e323be2ae537-1.jpg", 
  "https://i.ibb.co.com/zhxxDj0Q/istockphoto-1166162497-2048x2048.jpg"  
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] lg:h-screen">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Hero Banner"
          className="w-full h-[400px] lg:h-full object-cover brightness-75 absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Find Your Perfect Ride
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Browse a wide range of vehicles and start your journey today with ease and comfort.
        </motion.p>

        <motion.button
          className="bg-sky-900 hover:bg-sky-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to='allvehicles'>All Vehicles</NavLink> 
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Banner;
