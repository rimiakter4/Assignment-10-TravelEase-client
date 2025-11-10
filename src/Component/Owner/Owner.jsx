import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const owners = [
  {
    name: "Sarah Khan",
    vehicle: "Tesla Model 3 (Electric Sedan)",
    rating: "⭐ 4.9",
    desc: "Helping travelers experience the comfort of electric driving.",
    img: "https://i.ibb.co.com/n8s9Lhs8/istockphoto-468680166-612x612.jpg",
  },
  {
    name: "Ahsan Rahman",
    vehicle: "Toyota Fortuner (SUV)",
    rating: "⭐ 4.8",
    desc: "I love sharing my SUV with families who love long drives.",
    img: "https://i.ibb.co.com/C5hpxW7v/istockphoto-1429384932-612x612.jpg",
  },
  {
    name: "Maria Islam",
    vehicle: "Nissan Serena (Van)",
    rating: "⭐ 4.7",
    desc: "Comfort and space are my priorities for travelers.",
    img: "https://i.ibb.co.com/6J7qcfSC/istockphoto-2157810434-612x612.jpg",
  },
  {
    name: "Tanvir Alam",
    vehicle: "Hyundai Ioniq (Electric Hatchback)",
    rating: "⭐ 5.0",
    desc: "Eco-friendly rides for modern travelers.",
    img: "https://i.ibb.co.com/jvP5hGkQ/istockphoto-1138213252-612x612.jpg",
  },
  {
    name: "Nusrat Jahan",
    vehicle: "Honda Civic (Sedan)",
    rating: "⭐ 4.9",
    desc: "Reliable rides for city travel and short trips.",
    img: "https://i.ibb.co.com/1tBRK204/istockphoto-2168187030-612x612.jpg",
  },
];

const Owner = () => {
   
  



  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        🌟 Featured Owners
      </h2>
      <p className="text-center  text-2xl text-gray-500 mb-8">
        Spotlight on our most trusted and loved hosts
      </p>
 <div className=''> 
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {owners.map((owner, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md my-20 p-6 text-center hover:shadow-lg transition">
              <img
                src={owner.img}
                alt={owner.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{owner.name}</h3>
              <p className="text-gray-600 text-sm">{owner.vehicle}</p>
              <p className="text-yellow-500 my-1">{owner.rating}</p>
              <p className="text-gray-500 text-sm italic">"{owner.desc}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};





export default Owner;
