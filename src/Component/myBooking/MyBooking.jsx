// import React from 'react';

// const MyBooking = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default MyBooking;
import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../../Context/AuthProvider";
import { Link } from "react-router";

const MyBookings = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
    //   fetch(`http://localhost:3000/my-bookings?email=${user.email}`)
            fetch('http://localhost:3000/bookings')
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-sky-700 font-semibold">Loading your bookings...</p>
      </div>
    );
  }

  return (
    <div className="p-16">
      <h2 className="text-5xl text-center text-blue-700 font-bold mb-10">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no bookings yet.
        </p>
      ) : (
        <div className="overflow-x-auto border rounded-lg mb-37 shadow-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gradient-to-b from-indigo-400 to-blue-500">
              <tr className="text-white text-lg">
                <th className="px-4 py-3 text-left">SL No</th>
                <th className="px-4 py-3 text-left">Vehicle</th>
                <th className="px-4 py-3 text-left">Booking Date</th>
                <th className="px-4 py-3 text-left">Price/Day</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="hover:bg-sky-100 transition">
                  <td className="px-4 py-3 font-semibold">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={booking.vehicleCover}
                      alt={booking.vehicleName}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <span className="font-semibold">{booking.vehicleName}</span>
                  </td>
                  <td className="px-4 py-3">{new Date(booking.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 font-semibold">${booking.pricePerDay}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-white font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-500"
                          : booking.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/vehiclesDetails/${booking.vehicleId}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
