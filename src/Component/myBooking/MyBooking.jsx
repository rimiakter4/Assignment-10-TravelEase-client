
import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../../Context/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
const MyBookings = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
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
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Booking removed successfully.", "success");
              const remaining = bookings.filter((bk) => bk._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-blue-700 font-semibold">
          Loading your bookings...
        </p>
      </div>
    );
  }
  return (
    <div className="p-16">
      <h2 className="text-5xl text-center text-blue-700 font-bold mb-10">
        My Bookings
      </h2>

      <div className="overflow-x-auto border-0 rounded-lg mb-37 shadow">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gradient-to-b from-indigo-400 to-blue-500">
            <tr className="text-white text-xl">
              <th className="px-4 py-3 text-left align-middle">SL No</th>
              <th className="px-4 py-3 text-left align-middle">Vehicle</th>
              <th className="px-4 py-3 text-left align-middle">Booking Date</th>
              <th className="px-4 py-3 text-left align-middle">Price/Day</th>
              <th className="px-4 py-3 text-left align-middle">Status</th>
              <th className="px-4 py-3 text-left align-middle">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={booking._id} className="hover:bg-sky-100 transition">
                  <td className="px-4 text-[16px] py-3 font-bold align-middle">
                    {index + 1}
                  </td>

                  {/* Vehicle with image */}
                  <td className="px-4 py-3 flex items-center gap-2 align-middle">
                    <img
                      src={booking.coverImage}
                      alt={booking.vehicleName}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <span className="text-[16px] font-bold">
                      {booking.vehicleName}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm align-middle">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3 font-semibold text-sm align-middle">
                    ${booking.pricePerDay}
                  </td>

                  <td className="px-4 py-3 text-sm align-middle">
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

                  {/* Action Buttons */}
                  <td className="px-4 py-3 flex gap-2 mb-12 align-middle">
                    <Link
                      to={`/vehiclesDetails/${booking.vehicleId}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
