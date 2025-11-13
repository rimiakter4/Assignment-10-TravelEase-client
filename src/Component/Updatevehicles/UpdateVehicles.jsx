
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';


const UpdateVehicle = () => {
  const vehicleData = useLoaderData(); 
  const [vehicle, setVehicle] = useState(vehicleData);

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/all-vehicles/${vehicle._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle),
      });

      if (!res.ok) throw new Error('Update failed');

      const updatedData = await res.json();
      setVehicle(updatedData); 
      toast.success('Vehicle updated successfully!'); 
    } catch (err) {
      console.error(err);
      toast.error('Failed to update vehicle.');
    }
  };

  return (
    <div className="p-10 bg-sky-200 my-5 border-sky-700 rounded-2xl  max-w-xl mx-auto">
      <h2 className=" text-center text-sky-700 text-4xl font-bold mb-6">Update Vehicle</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="vehicleName"
          value={vehicle.vehicleName || ''}
          onChange={handleChange}
          placeholder="Vehicle Name"
          className="border px-3  text-white bg-blue-500  font-semibold py-2  rounded"
        />
        <input
          type="text"
          name="owner"
          value={vehicle.owner || ''}
          onChange={handleChange}
          placeholder="Owner Name"
          className="border   text-white bg-blue-500    px-3   py-2 rounded"
        />
        <input
          type="text"
          name="category"
          value={vehicle.category || ''}
          onChange={handleChange}
          placeholder="Category"
          className="border  text-white  bg-blue-500  px-3 py-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={vehicle.location || ''}
          onChange={handleChange}
          placeholder="Location"
          className="border  text-white bg-blue-500  px-3 py-2 rounded"
        />
        <input
          type="number"
          name="pricePerDay"
          value={vehicle.pricePerDay || ''}
          onChange={handleChange}
          placeholder="Price per day"
          className="border  text-white  bg-blue-500   px-3 py-2 rounded"
        />
        <select
          name="availability"
          value={vehicle.availability || 'Available'}
          onChange={handleChange}
          className="border text-white bg-blue-500   px-3 py-2 rounded"
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <textarea
          name="description"
          value={vehicle.description || ''}
          onChange={handleChange}
          placeholder="Description"
          className="border  text-white  bg-blue-500   py-2 rounded"
        />
        <input
          type="text"
          name="coverImage"
          value={vehicle.coverImage || ''}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className="border  text-white  bg-blue-500    px-3 py-2 rounded"
        />
      

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Vehicle
        </button>
      </form>
    </div>
  );
};

export default UpdateVehicle;
