
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const MyVehicles = () => {
  const { user } = useContext(Authcontext);
  const [vehicles, setVehicles] = useState([]);


  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-vehicles?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

 
const handelremove = (id) => {
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
        fetch(`http://localhost:3000/all-vehicles/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your bid has been deleted.",
                "success"
              );
              const remainingvehicles = vehicles.filter(bi => bi._id !== id);
              setVehicles(remainingvehicles);
            }
          });
      }
    });
  };

  return (
    <div className="p-16">
      <h2 className="text-5xl text-center text-sky-700 font-bold mb-10">
        My Vehicles
      </h2>

      <div className="overflow-x-auto border-0 mb-37 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gradient-to-b from-sky-400 to-blue-500">
            <tr className="text-white text-xl">
              <th className="px-4 py-3 text-left align-middle">SL No</th>
              <th className="px-4 py-3 text-left align-middle">Vehicle</th>
              <th className="px-4 py-3 text-left align-middle">Location</th>
              <th className="px-4 py-3 text-left align-middle">Price/Day</th>
              <th className="px-4 py-3 text-left align-middle">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.length > 0 ? (
              vehicles.map((vehicle, index) => (
                <tr key={vehicle._id} className="hover:bg-sky-100 transition">
                  <td className="px-4 text-[16px] py-3 font-bold align-middle">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2 align-middle">
                    <img
                      src={vehicle.coverImage}
                      alt={vehicle.vehicleName}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <span className="text-[16px] font-bold">{vehicle.vehicleName}</span>
                  </td>
                  <td className="px-4 py-3 text-sm align-middle">{vehicle.location}</td>
                  <td className="px-4 py-3 font-semibold text-sm align-middle">
                    ${vehicle.pricePerDay}
                  </td>
                  <td className="px-4 py-3 flex gap-2 mb-12 align-middle">
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
                      onClick={() => handelremove(vehicle._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No vehicles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyVehicles;
