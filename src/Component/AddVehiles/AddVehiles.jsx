
import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const AddVehicles = () => {
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const newVehicle = {
      vehicleName: form.vehicleName.value,
      owner: form.owner.value,
      category: form.category.value,
      location: form.location.value,
      pricePerDay: parseFloat(form.pricePerDay.value),
      availability: form.availability.value,
      coverImage: form.coverImage.value,
      description: form.description.value,
      userEmail: user?.email || "unknown@example.com",
      created_at: new Date(),
    };

    try {
      const res = await fetch("http://localhost:3000/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVehicle),
      });

      const data = await res.json();
      setLoading(false);

      if (data.insertedId) {
        toast.success(" Vehicle added successfully!");
        form.reset();
        navigate("/myvehicles"); 
      } else {
        toast.error(" Failed to add vehicle!");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } }
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto bg-gradient-to-l from-sky-400 to-blue-500 shadow-xl rounded-2xl p-8 my-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl font-bold text-center text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Add New Vehicle
      </motion.h2>

      <motion.form 
        onSubmit={handleAddVehicle} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.input name="vehicleName" placeholder="Vehicle Name" required className="input input-bordered w-full" />
        <motion.input name="owner" placeholder="Owner Name" required className="input input-bordered w-full" />
        <motion.input name="category" placeholder="Category" required className="input input-bordered w-full" />
        <motion.input name="pricePerDay" type="number" placeholder="Price Per Day" required className="input input-bordered w-full" />
        <motion.input name="location" placeholder="Location" required className="input input-bordered w-full" />
        <motion.select name="availability" className="input input-bordered w-full">
          <option>Available</option>
          <option>Not Available</option>
        </motion.select>
        <motion.input name="coverImage" placeholder="Cover Image URL" required className="input input-bordered w-full" />
        <motion.textarea name="description" placeholder="Description" required className="textarea textarea-bordered col-span-2"></motion.textarea>

        <motion.button 
          type="submit" 
          className="btn bg-white text-sky-900 col-span-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Adding..." : "Add Vehicle"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default AddVehicles;
