// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function Review() {
//   const feedbacks = [
//     {
//       name: "John Miller",
//       role: "Garments Buyer - USA",
//       message:
//         "The tracking system has made our order monitoring super smooth. Real-time updates saved us countless follow-up emails!",
//       img: "https://i.pravatar.cc/100?img=15",
//     },
//     {
//       name: "Ayesha Rahman",
//       role: "Factory Manager - Dhaka",
//       message:
//         "Amazing tool! We can track production, QC, and shipment all in one place. Fully recommended for any garment factory.",
//       img: "https://i.pravatar.cc/100?img=32",
//     },
//     {
//       name: "Michael Smith",
//       role: "Brand Owner - UK",
//       message:
//         "Very user-friendly system. Transparent tracking and perfect execution. Love the interface and accuracy!",
//       img: "https://i.pravatar.cc/100?img=8",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % feedbacks.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, []);

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % feedbacks.length);
//   };

//   return (
//     <section className="py-12 my-10 bg-white">
//       <div className="container mx-auto text-center">

//         <h2 className="text-3xl font-bold text-gray-800 mb-10">
//           What Our Clients Say
//         </h2>

//         <div className="relative   max-w-xl mx-auto">

//           {/* Carousel Content */}
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gray-50 shadow-lg rounded-2xl p-6 bg-gradient-to-b from-blue-400 to-blue-300"
//           >
//             <img
//               src={feedbacks[index].img}
//               className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-blue-500"
//             />

//             <p className="text-gray-700 text-sm leading-relaxed mb-4">
//               "{feedbacks[index].message}"
//             </p>

//             <h3 className="font-semibold text-gray-800">
//               {feedbacks[index].name}
//             </h3>
//             <p className="text-blue-600 text-sm">{feedbacks[index].role}</p>
//           </motion.div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
//           >
//             ◀
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
//           >
//             ▶
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {feedbacks.map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full ${
//                 index === i ? "bg-blue-600" : "bg-gray-400"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

export default function Review() {
  const feedbacks = [
    {
      name: "Arif Ahmed",
      role: "Frequent Traveler",
      message: "TravelEase made my family vacation stress-free. The SUV was in pristine condition!",
      img: "https://i.pravatar.cc/100?img=33",
      rating: 5
    },
    {
      name: "Sophia Jennifer",
      role: "Business Consultant",
      message: "Top-notch service for my city business trips. Transparent pricing and no hidden costs!",
      img: "https://i.pravatar.cc/100?img=45",
      rating: 5
    },
    {
      name: "Rahat Kabir",
      role: "Adventure Enthusiast",
      message: "Rented a 4x4 for Sajek. The vehicle was powerful and support was great.",
      img: "https://i.pravatar.cc/100?img=12",
      rating: 4
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [feedbacks.length]);

  const prevSlide = () => setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % feedbacks.length);

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-8">
          {/* <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Testimonials</span> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">What Renters Say</h2>
        </div>

        <div className="relative max-w-xl mx-auto">
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-3xl p-6 md:p-8 border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    {[...Array(feedbacks[index].rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  <p className="text-gray-600 text-base md:text-lg italic mb-6 leading-relaxed">
                    "{feedbacks[index].message}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50 w-full justify-center">
                    <img
                      src={feedbacks[index].img}
                      className="w-12 h-12 rounded-xl object-cover shadow-sm"
                      alt=""
                    />
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">{feedbacks[index].name}</h3>
                      <p className="text-blue-600 text-xs font-medium">{feedbacks[index].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation - Small & Sleek */}
          <div className="absolute inset-0 flex items-center justify-between px-2 md:-mx-12 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">❮</button>
            <button onClick={nextSlide} className="pointer-events-auto w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">❯</button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-6 bg-blue-600" : "w-1.5 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}