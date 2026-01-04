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