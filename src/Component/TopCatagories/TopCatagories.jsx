
import React from "react";

const TopCatagories = () => {
  const categories = [
    {
      name: "SUVs",
      img: "https://i.ibb.co.com/hxSYmfxM/photo-1705908748578-34fd1e9a033c.jpg",
      description: "Spacious and powerful vehicles, perfect for adventure.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Electric",
      img: 'https://i.ibb.co.com/9kv3w9qk/istockphoto-1479241283-612x612.webp',
      description: "Eco-friendly cars with modern electric technology.",
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "Vans",
      img: "https://i.ibb.co.com/cSXycWqj/istockphoto-2205185029-2048x2048.jpg",
      description: "Ideal for group travel or transporting goods.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "Sedans",
      img: "https://i.ibb.co.com/5xvGZFv1/istockphoto-2213776240-612x612.webp",
      description: "Comfortable and efficient cars for everyday use.",
      gradient: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 rounded-2xl bg-gray-50 text-center">
      <h2 className="text-5xl font-bold mb-12 text-gray-800">Top Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`group relative rounded-3xl overflow-hidden p-6 cursor-pointer 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
        
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl`}
            ></div>

            <div className="relative flex flex-col items-center">
         
              <div className="   flex items-center justify-center shadow-md mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={category.img}
               
                  className="w-[350px] h-[250px]  rounded-2xl"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCatagories;
