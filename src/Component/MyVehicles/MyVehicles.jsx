
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router"; // fixed
import { Authcontext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const MyVehicles = () => {
  const { user } = useContext(Authcontext);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://assignment-10-travelease.vercel.app/my-vehicles?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const sortedVehicles = data.sort(
            (a, b) => Number(b.pricePerDay) - Number(a.pricePerDay)
          );
          setVehicles(sortedVehicles);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-travelease.vercel.app/all-vehicles/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");
              setVehicles(prev => prev.filter(v => v._id !== id));
            }
          });
      }
    });
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="p-8 md:p-16 mb-40">
      <h2 className="text-4xl md:text-5xl text-center text-sky-700 font-bold mb-8 md:mb-10">
        My Vehicles
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border-0 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gradient-to-b from-sky-400 to-blue-500">
            <tr className="text-white text-xl">
              <th className="px-4 py-3 text-left">SL No</th>
              <th className="px-4 py-3 text-left">Vehicle</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Price/Day</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <AnimatePresence>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-6">
                    Loading...
                  </td>
                </tr>
              ) : vehicles.length > 0 ? (
                vehicles.map((vehicle, index) => (
                  <motion.tr
                    key={vehicle._id}
                    className="hover:bg-sky-100 transition"
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <td className="px-4 py-3 font-bold">{index + 1}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img
                        src={vehicle.coverImage}
                        alt={vehicle.vehicleName}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <span className="font-bold">{vehicle.vehicleName}</span>
                    </td>
                    <td className="px-4 py-3">{vehicle.location}</td>
                    <td className="px-4 py-3 font-semibold">${vehicle.pricePerDay}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <Link
                        to={`/vehiclesDetails/${vehicle._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        View
                      </Link>
                      <Link
                        to={`/update/${vehicle._id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleRemove(vehicle._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No vehicles found.
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid gap-4">
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : vehicles.length > 0 ? (
          <AnimatePresence>
            {vehicles.map((vehicle) => (
              <motion.div
                key={vehicle._id}
                className="bg-white shadow rounded-lg p-4 flex flex-col gap-2"
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img
                  src={vehicle.coverImage}
                  alt={vehicle.vehicleName}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{vehicle.vehicleName}</h3>
                  <span className="font-semibold text-sky-600">${vehicle.pricePerDay}</span>
                </div>
                <p className="text-gray-500">{vehicle.location}</p>
                <div className="flex gap-2 mt-2">
                  <Link
                    to={`/vehiclesDetails/${vehicle._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex-1 text-center"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update/${vehicle._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex-1 text-center"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleRemove(vehicle._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex-1 text-center"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <div className="text-center py-6 text-gray-500">No vehicles found.</div>
        )}
      </div>
    </div>
  );
};

export default MyVehicles;

