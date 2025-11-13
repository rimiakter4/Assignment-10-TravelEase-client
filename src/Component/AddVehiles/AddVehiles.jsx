import React, { useContext } from 'react';
import { Authcontext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddVehiles = () => {
    const {loading,setLoading,user}=useContext(Authcontext)
   const handleAddVehicle = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const  vehicleName= form.vehicleName.value
    const  owner= form.owner.value
    const  category= form.category.value
    const  pricePerDay= parseFloat(form.pricePerDay.value)
    const  location= form.location.value
    const  availability= form.availability.value
    const  coverImage= form.coverImage.value
    const  description= form.description.value
    const  userEmail= user?.email || "unknown@example.com" 
 const newvehicle ={vehicleName,owner,category,location,pricePerDay,availability,coverImage,description,userEmail
 }
  
    fetch("http://localhost:3000/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newvehicle)
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);

        if (data.insertedId) {
          toast.success(" Vehicle added successfully!");
          form.reset();
        } else {
          toast.error(" Failed to add vehicle.");
    } }) 
   
      .catch(() => {
        setLoading(false);
        toast.error(" Something went wrong!");
      });
  };
    return (
        <div>
            <div className="max-w-3xl mx-auto  bg-linear-to-l from-sky-400 to-blue-500  shadow-xl rounded-2xl p-8 my-10">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Add New Vehicle</h2>
      <form  onSubmit={ handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      

        <input name="vehicleName" placeholder="vehicleName" required className="input input-bordered w-full" />

        <input name="owner" placeholder="Owner Name" required className="input input-bordered w-full" />
        <input name="category" placeholder="Category" required className="input input-bordered w-full" />
        <input name="pricePerDay" type="number" placeholder="Price Per Day" required className="input input-bordered w-full" />
        <input name="location" placeholder="Location" required className="input input-bordered w-full" />

        <select name="availability" className="input input-bordered w-full">
          <option>Available</option>
          <option>Not Available</option>
        </select>

        <input name="coverImage" placeholder="Cover Image URL" required className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" required className="textarea textarea-bordered col-span-2"></textarea>

        <button type="submit" className="btn text-sky-900 col-span-2">
          {loading ? "Adding..." : "Add Vehicle"}
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddVehiles;