
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import Vehicle from "../ALLVehicles/Vehicle";

const MyBooking = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings
  // useEffect(() => {
  //   if (user?.email) {
  //     setLoading(true);
  //     fetch(`https://assignment-10-travelease.vercel.app/bookings?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setBookings(data))
  //       .catch((err) => console.error(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [user]);
  // MyBooking.jsx (Frontend)
useEffect(() => {
    if (user?.email) {
        setLoading(true);
        // URL-er sheshe ?email=${user.email} add kora hoyeche
        fetch(`https://assignment-10-travelease.vercel.app/bookings?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setBookings(data); // Ekhon sudhu ei user-er data-i ashbe
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }
}, [user?.email]); // User change hole jeno abar fetch hoy

  // Delete booking
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-travelease.vercel.app/bookings/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Booking removed successfully.", "success");
              setBookings(prev => prev.filter(b => b._id !== id));
            }
          });
      }
    });
  };

  // Motion variants
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="p-8 mb-34 md:p-16">
      <h2 className="text-4xl md:text-5xl text-center text-blue-700 font-bold mb-8 md:mb-10">
        My Bookings
      </h2>

      {/* Table for large screens */}
      <div className="hidden md:block overflow-x-auto border-0 mb-10 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gradient-to-b from-blue-400 to-blue-600">
            <tr className="text-white text-xl">
              <th className="px-4 py-3 text-left">SL No</th>
              <th className="px-4 py-3 text-left">Vehicle</th>
              <th className="px-4 py-3 text-left">Booking Date</th>
              <th className="px-4 py-3 text-left">Price/Day</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <AnimatePresence>
              {loading ? (
                <tr><td colSpan="6" className="text-center py-6">Loading...</td></tr>
              ) : bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <motion.tr
                    key={booking._id}
                    className="hover:bg-blue-100 transition"
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <td className="px-4 py-3 font-bold">{index + 1}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img
                        src={booking.coverImage}
                        alt={booking.vehicleName}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <span className="font-bold">{booking.vehicleName}</span>
                    </td>
                    <td className="px-4 py-3">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="px-4 py-3 font-semibold">${booking.pricePerDay}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-white font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-500"
                          : booking.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                   <td className="px-4 mb-4 py-3 flex gap-2  justify-center items-center">
  <Link
 to={`/vehiclesDetails/${booking.vehicleId}`}
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
  >
    View
  </Link>
  <Link
    onClick={() => handleDelete(booking._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
  >
    Delete
  </Link>
</td>

                  </motion.tr>
                ))
              ) : (
                <tr><td colSpan="6" className="text-center py-6 text-gray-500">No bookings found.</td></tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden  grid gap-4">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : bookings.length > 0 ? (
          <AnimatePresence>
            {bookings.map((booking) => (
              <motion.div
                key={booking._id}
                className="bg-white shadow rounded-lg p-4 flex flex-col gap-2"
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img src={booking.coverImage} alt={booking.vehicleName} className="w-full h-40 object-cover rounded"/>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{booking.vehicleName}</h3>
                  <span className="font-semibold text-blue-600">${booking.pricePerDay}</span>
                </div>
                <p className="text-gray-500">{new Date(booking.date).toLocaleDateString()}</p>
                <span className={`px-2 py-1 rounded text-white font-semibold ${
                  booking.status === "Confirmed"
                    ? "bg-green-500"
                    : booking.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                } text-center`}>{booking.status}</span>
                <div className="flex mb-3 gap-2   ">
                  <Link  to={`/vehiclesDetails/${booking.vehicleId}`} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex-1 text-center">View</Link>
                  <button onClick={() => handleDelete(booking._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex-1 text-center">Delete</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <div className="text-center py-6 text-gray-500">No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
