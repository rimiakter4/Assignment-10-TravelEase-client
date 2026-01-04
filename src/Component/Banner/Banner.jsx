
// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "https://i.ibb.co/X1wLbZv/ai-generated-beautiful-background-for-car-rental-advertising-free-photo.jpg",
//   "https://i.ibb.co.com/gLCcQxwC/photo-1704340142770-b52988e5b6eb.jpg",
//   "https://i.ibb.co.com/gZ442VNc/istockphoto-1361790192-612x612.webp",
//   "https://i.ibb.co.com/ZzDxfcVw/photo-1580273916550-e323be2ae537-1.jpg", 
//   "https://i.ibb.co.com/zhxxDj0Q/istockphoto-1166162497-2048x2048.jpg"  
// ];

// const Banner = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[400px] lg:h-screen">
//       <AnimatePresence>
//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           alt="Hero Banner"
//           className="w-full h-[400px] lg:h-full object-cover brightness-75 absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </AnimatePresence>

//       <motion.div
//         className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h4
//           className="text-3xl md:text-6xl font-bold mb-4"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Find Your Perfect Ride
//         </motion.h4>

//         <motion.span
//           className="text-lg md:text-2xl mb-6 max-w-xl ]"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Browse a wide range of vehicles and start your journey today with ease and comfort.
//         </motion.span>
  

//         <motion.button
//           className=" bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <NavLink to='allvehicles'>All Vehicles</NavLink> 
//         </motion.button>
//       </motion.div>
      


//     </section>
//   );
// };

// export default Banner;
// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "https://i.ibb.co/X1wLbZv/ai-generated-beautiful-background-for-car-rental-advertising-free-photo.jpg",
//   "https://i.ibb.co.com/gLCcQxwC/photo-1704340142770-b52988e5b6eb.jpg",
//   "https://i.ibb.co.com/gZ442VNc/istockphoto-1361790192-612x612.webp",
//   "https://i.ibb.co.com/ZzDxfcVw/photo-1580273916550-e323be2ae537-1.jpg", 
//   "https://i.ibb.co.com/zhxxDj0Q/istockphoto-1166162497-2048x2048.jpg"  
// ];

// const Banner = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[500px] lg:h-screen overflow-hidden">
//       {/* 1. Image Layer */}
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           alt="Hero Banner"
//           className="w-full h-full object-cover absolute inset-0"
//           initial={{ opacity: 0, scale: 1.1 }} // Smooth Zoom Effect
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//         />
//       </AnimatePresence>

//       {/* 2. Professional Overlay Layer (Lekha focus korar main kaj eta korbe) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

//       {/* 3. Content Layer */}
//       <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-20 text-white">
//         <motion.h4
//           className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Find Your <span className="text-blue-500">Perfect</span> Ride
//         </motion.h4>

//         <motion.p
//           className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200 leading-relaxed"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Browse a wide range of vehicles and start your journey today with ease and comfort.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <NavLink to='allvehicles'>
//             <motion.button
//               className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold px-10 py-4 rounded-full shadow-2xl uppercase tracking-wider text-sm"
//               whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgb(37, 99, 235)" }}
//               whileTap={{ scale: 0.95 }}
//             >
//               All Vehicles
//             </motion.button>
//           </NavLink>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
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

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] lg:h-screen overflow-hidden bg-[#050b1a]">
      {/* 1. Background Image Layer with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentImage]}
            alt={`Banner Slide ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Professional Blue-Theme Overlay */}
      {/* "from-[#050b1a]" use koray text area-te image ghora hoye jabe ebong focus barbe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b1a]/90 via-[#050b1a]/50 to-transparent z-[5]"></div>

      {/* 3. Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-20 text-white max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
            Premium Car Rental
          </span>
          {/* <h1 className="text-4xl md:text-7xl text-white font-extrabold mb-6 leading-[1.1] tracking-tight">
            Find Your <span className="text-blue-500 underline decoration-2 underline-offset-8">Perfect</span> <br /> Ride Today
          </h1> */}
          <h1 className="text-4xl md:text-7xl text-white font-extrabold mb-6 leading-[1.1] tracking-tight">
           <span className="text-white">Find Your</span>  <span className="text-blue-500 underline decoration-2 underline-offset-8">Perfect</span> <br /> <span className="text-white">Ride Today</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl mb-10 max-w-2xl text-gray-300 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <span className="text-white"> Browse a wide range of vehicles and start your journey today with ease, comfort, and unmatched style.</span> 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <NavLink to="/allvehicles">
            <motion.button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] uppercase tracking-wider text-sm transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#1d4ed8",
                boxShadow: "0px 15px 40px rgba(37, 99, 235, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
           All Vehicles
            </motion.button>
          </NavLink>
        </motion.div>
      </div>

      {/* 4. Slide Indicators (Optional but looks professional) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 rounded-full ${
              currentImage === index ? "w-10 bg-blue-500" : "w-4 bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Banner;