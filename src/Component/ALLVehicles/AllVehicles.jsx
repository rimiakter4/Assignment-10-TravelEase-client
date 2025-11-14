
import React, { useEffect, useState } from "react";
import Vehicle from "./Vehicle";

const AllVehicles = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:3000/all-vehicles")
      .then(res => res.json())
      .then(data => setAllVehicles(data))
      .catch(err => console.error(err));
  }, []);

  // Filter + Sort
  const filteredAndSortedVehicles = allVehicles
    .filter(vehicle => (categoryFilter ? vehicle.category === categoryFilter : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="px-4 lg:px-20">
      <div className="text-center my-12 lg:text-5xl text-3xl font-bold text-sky-800">
        <h1>Explore Our Full Collection</h1>
        <p className="lg:text-[18px] text-[14px] font-normal text-sky-600 mt-3 lg:my-8">
          Pick from our diverse collection of rides and set off on your next journey with ease and excitement.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <select
          className="border px-4 py-2 rounded shadow"
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>

        <select
          className="border px-4 py-2 rounded shadow"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Vehicles List */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
        {filteredAndSortedVehicles.map(vehicle => (
          <Vehicle key={vehicle._id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
