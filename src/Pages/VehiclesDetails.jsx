
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { Authcontext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const VehiclesDetails = () => {
  const {
    coverImage,
    vehicleName,
    pricePerDay,
    description,
    availability,
    owner,
    userEmail,
    category,
    categories,
    location,
    _id,
  } = useLoaderData();


  const { user } = useContext(Authcontext);

  const handleBookNow = () => {
    if (!user) {
      toast.warning("Please login to book this vehicle!");
      return;
    }

    const bookingData = {
      userEmail: user?.email,
      vehicleId: _id,
      vehicleName: vehicleName,
      owner: owner,
      pricePerDay: pricePerDay,
      requestDate: new Date().toISOString(),
      status: "Pending",
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booking request sent successfully!");
        } else {
          toast.error("Failed to send booking request!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Back Button */}
      <Link
        to="/allvehicles"
        className="text-sky-600 text-2xl font-bold mb-4 flex items-center"
      >
        &larr; Back To Vehicles
      </Link>

      {/* Hero Section */}
      <div className="flex flex-col bg-sky-100 rounded-2xl p-10 mt-6 gap-6 shadow-lg">
        <div className="rounded-lg flex items-center justify-center">
          <img
            src={coverImage}
            alt={vehicleName}
            className="object-contain h-full w-[400px] rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 items-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{vehicleName}</h1>
          <p className="text-gray-600">Category: {category}</p>
          <p className="text-xl font-semibold text-sky-600">
            Price: ${pricePerDay}/day
          </p>
          <p className="text-gray-700">{description}</p>
          <button
            onClick={handleBookNow}
            className="btn lg:w-[500px] w-[200px] bg-sky-600 hover:bg-sky-400 text-white font-semibold py-2 px-4 rounded mt-2"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Details / Features Section */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Owner Info */}
        <div className="bg-gradient-to-l from-sky-300 to-indigo-200 rounded-2xl p-10 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
          <h2 className="font-semibold text-lg mb-2">Owner Info</h2>
          <p>{owner}</p>
          <p>{userEmail}</p>
        </div>

        {/* Vehicle Features */}
        <div className="bg-gradient-to-l from-sky-300 to-indigo-200 rounded-2xl p-10 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
          <h2 className="font-semibold text-lg mb-2">Vehicle Features</h2>
          <ul className="list-disc pl-5">
            <li>Seats: 5</li>
            <li>Categories: {categories}</li>
            <li>AC: Yes</li>
            <li>Availability: {availability}</li>
            <li>Location: {location}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehiclesDetails;

