import React from 'react';
import { FaShieldHeart, FaGem, FaHandHoldingHeart } from "react-icons/fa6";

const CoreValue = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <p className="text-gray-500 mt-2">The principles that drive our service excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldHeart size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3">Safety First</h3>
            <p className="text-gray-500">We ensure every vehicle meets global safety standards for your peace of mind.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaGem size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
            <p className="text-gray-500">Only the best-maintained vehicles from top brands are allowed on our platform.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaHandHoldingHeart size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3">Customer Care</h3>
            <p className="text-gray-500">Our support team is dedicated to making your journey smooth and enjoyable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
// import React from 'react';
// import { FaShieldHeart, FaGem, FaHandHoldingHeart } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const CoreValue = () => {
//   // কার্ডগুলোর জন্য অ্যানিমেশন ভেরিয়েন্ট
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
//     })
//   };

//   const values = [
//     {
//       icon: <FaShieldHeart size={30} />,
//       title: "Safety First",
//       desc: "We ensure every vehicle meets global safety standards for your peace of mind."
//     },
//     {
//       icon: <FaGem size={30} />,
//       title: "Premium Quality",
//       desc: "Only the best-maintained vehicles from top brands are allowed on our platform."
//     },
//     {
//       icon: <FaHandHoldingHeart size={30} />,
//       title: "Customer Care",
//       desc: "Our support team is dedicated to making your journey smooth and enjoyable."
//     }
//   ];

//   return (
//     <div className="relative py-24 px-6 md:px-20 overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
//       {/* Background Decorative Blobs */}
//       <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
//           >
//             Our Core Values
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             The principles that drive our service excellence and ensure your satisfaction.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {values.map((item, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{ y: -10 }}
//               className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group text-center"
//             >
//               <div className="w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreValue;
// import React from 'react';
// import { FaShieldHeart, FaGem, FaHandHoldingHeart } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const CoreValue = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
//     })
//   };

//   const values = [
//     {
//       icon: <FaShieldHeart size={32} />,
//       title: "Safety First",
//       desc: "We ensure every vehicle meets global safety standards for your peace of mind."
//     },
//     {
//       icon: <FaGem size={32} />,
//       title: "Premium Quality",
//       desc: "Only the best-maintained vehicles from top brands are allowed on our platform."
//     },
//     {
//       icon: <FaHandHoldingHeart size={32} />,
//       title: "Customer Care",
//       desc: "Our support team is dedicated to making your journey smooth and enjoyable."
//     }
//   ];

//   return (
//     // লাইট মোডে bg-white এবং ডার্ক মোডে bg-gray-950
//     <div className="relative py-24 px-6 md:px-20 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      
//       {/* Background Decorative Blobs - হালকা কালার রাখা হয়েছে */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5"
//           >
//             Our Core Values
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             The principles that drive our service excellence and ensure your satisfaction.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {values.map((item, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{ y: -12 }}
//               // লাইট মোডে কার্ডগুলো একদম হোয়াইট এবং শ্যাডো থাকবে
//               className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-300 text-center"
//             >
//               <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//                 {item.title}
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreValue;