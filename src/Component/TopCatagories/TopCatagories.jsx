
// import React from "react";

// const TopCatagories = () => {
//   const categories = [
//     {
//       name: "SUVs",
//       img: "https://i.ibb.co.com/hxSYmfxM/photo-1705908748578-34fd1e9a033c.jpg",
//       description: "Spacious and powerful vehicles, perfect for adventure.",
//       gradient: "from-blue-400 to-blue-600",
//     },
//     {
//       name: "Electric",
//       img: 'https://i.ibb.co.com/9kv3w9qk/istockphoto-1479241283-612x612.webp',
//       description: "Eco-friendly cars with modern electric technology.",
//       gradient: "from-green-400 to-green-600",
//     },
//     {
//       name: "Vans",
//       img: "https://i.ibb.co.com/cSXycWqj/istockphoto-2205185029-2048x2048.jpg",
//       description: "Ideal for group travel or transporting goods.",
//       gradient: "from-purple-400 to-purple-600",
//     },
//     {
//       name: "Sedans",
//       img: "https://i.ibb.co.com/5xvGZFv1/istockphoto-2213776240-612x612.webp",
//       description: "Comfortable and efficient cars for everyday use.",
//       gradient: "from-pink-400 to-pink-600",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 md:px-20 rounded-2xl text-center">
//       <h2 className="text-5xl font-bold mb-12 text-gray-800">Top Categories</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className={`group relative rounded-3xl overflow-hidden p-6 cursor-pointer 
//                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
//           >
        
//             <div
//               className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl`}
//             ></div>

//             <div className="relative flex flex-col items-center">
         
//               <div className="   flex items-center justify-center shadow-md mb-4 transform transition-transform duration-300 group-hover:scale-110">
//                 <img
//                   src={category.img}
               
//                   className="w-[350px] h-[250px]  rounded-2xl"
//                 />
//               </div>

//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {category.name}
//               </h3>
//               <p className="text-gray-600 text-sm">{category.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TopCatagories;
import React from "react";

const TopCategories = () => {
  const categories = [
    {
      name: "SUVs",
      img: "https://i.ibb.co.com/hxSYmfxM/photo-1705908748578-34fd1e9a033c.jpg",
      description: "Spacious and powerful vehicles, perfect for adventure.",
      gradient: "from-blue-500/10 to-blue-600/20",
      accent: "bg-blue-600",
    },
    {
      name: "Electric",
      img: "https://i.ibb.co.com/9kv3w9qk/istockphoto-1479241283-612x612.webp",
      description: "Eco-friendly cars with modern electric technology.",
      gradient: "from-green-500/10 to-green-600/20",
      accent: "bg-green-600",
    },
    {
      name: "Vans",
      img: "https://i.ibb.co.com/cSXycWqj/istockphoto-2205185029-2048x2048.jpg",
      description: "Ideal for group travel or transporting goods.",
      gradient: "from-purple-500/10 to-purple-600/20",
      accent: "bg-purple-600",
    },
    {
      name: "Sedans",
      img: "https://i.ibb.co.com/5xvGZFv1/istockphoto-2213776240-612x612.webp",
      description: "Comfortable and efficient cars for everyday use.",
      gradient: "from-pink-500/10 to-pink-600/20",
      accent: "bg-pink-600",
    },
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="mb-12 gap-4">
        <div className="text-center">
          
          <h2 className="text-5xl font-bold mb-12 text-gray-800 text-center">Top Categories</h2>
            
        </div>
     
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative bg-white border border-gray-100 rounded-[2rem] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative z-10">
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${category.accent}`}></div>
                  <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                {/* Action Link (Optional but Professional) */}
                <div className="flex items-center text-sm font-bold text-gray-900 group-hover:gap-2 transition-all">
                  <span>Explore Now</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;