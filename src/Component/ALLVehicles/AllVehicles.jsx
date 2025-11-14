
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Vehicle from "./Vehicle";

// const AllVehicles = () => {
//   const [allVehicles, setAllVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);

//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [priceSort, setPriceSort] = useState("");

//   // Fetch data
//   useEffect(() => {
//     fetch("http://localhost:3000/all-vehicles")
//       .then(res => res.json())
//       .then(data => {
//         setAllVehicles(data);
//         setFilteredVehicles(data);
//       });
//   }, []);

//   // Filter + Sort
//   useEffect(() => {
//     let updated = [...allVehicles];

//     if (categoryFilter) {
//       updated = updated.filter(
//         v => v.category.toLowerCase() === categoryFilter.toLowerCase()
//       );
//     }

//     if (locationFilter) {
//       updated = updated.filter(
//         v => v.location.toLowerCase() === locationFilter.toLowerCase()
//       );
//     }

//     if (priceSort === "low") {
//       updated.sort((a, b) => a.pricePerDay - b.pricePerDay);
//     }
//     if (priceSort === "high") {
//       updated.sort((a, b) => b.pricePerDay - a.pricePerDay);
//     }

//     setFilteredVehicles(updated);
//   }, [categoryFilter, locationFilter, priceSort, allVehicles]);

//   return (
//     <div className="px-4 lg:px-20">
//       {/* Page Title */}
//       <h1 className="text-center my-12 lg:text-5xl text-3xl font-bold text-sky-800">
//         Explore All Vehicles
//       </h1>

//       {/* Filters */}
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">
//         <select
//           className="border px-4 py-2 rounded shadow"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           <option value="">Filter by Category</option>
//           {[...new Set(allVehicles.map(v => v.category))].map((cat, idx) => (
//             <option key={idx} value={cat}>{cat}</option>
//           ))}
//         </select>

//         <select
//           className="border px-4 py-2 rounded shadow"
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//         >
//           <option value="">Filter by Location</option>
//           {[...new Set(allVehicles.map(v => v.location))].map((loc, idx) => (
//             <option key={idx} value={loc}>{loc}</option>
//           ))}
//         </select>

//         <select
//           className="border px-4 py-2 rounded shadow"
//           value={priceSort}
//           onChange={(e) => setPriceSort(e.target.value)}
//         >
//           <option value="">Sort by Price</option>
//           <option value="low">Low → High</option>
//           <option value="high">High → Low</option>
//         </select>

//         <button
//           className="border px-4 py-2 rounded bg-sky-600 text-white"
//           onClick={() => {
//             setCategoryFilter("");
//             setLocationFilter("");
//             setPriceSort("");
//           }}
//         >
//           Reset
//         </button>
//       </div>

//       {/* Vehicles Grid with AnimatePresence */}
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
//         <AnimatePresence>
//           {filteredVehicles.length > 0 ? (
//             filteredVehicles.map(vehicle => (
//               <motion.div
//                 key={vehicle._id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Vehicle vehicle={vehicle} />
//               </motion.div>
//             ))
//           ) : (
//             <motion.p
//               className="text-center text-gray-500 font-semibold col-span-3"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               No vehicles found 
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default AllVehicles;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vehicle from "./Vehicle";

const AllVehicles = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");

  // Fetch data
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/all-vehicles")
      .then(res => res.json())
      .then(data => {
        setAllVehicles(data);
        setFilteredVehicles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter + Sort
  useEffect(() => {
    let updated = [...allVehicles];

    if (categoryFilter) {
      updated = updated.filter(
        v => v.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (locationFilter) {
      updated = updated.filter(
        v => v.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    if (priceSort === "low") {
      updated.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }
    if (priceSort === "high") {
      updated.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    setFilteredVehicles(updated);
  }, [categoryFilter, locationFilter, priceSort, allVehicles]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20">
      {/* Page Title */}
      <h1 className="text-center my-12 lg:text-5xl text-3xl font-bold text-sky-800">
        Explore All Vehicles
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <select
          className="border px-4 py-2 rounded shadow"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Filter by Category</option>
          {[...new Set(allVehicles.map(v => v.category))].map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded shadow"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Filter by Location</option>
          {[...new Set(allVehicles.map(v => v.location))].map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded shadow"
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <button
          className="border px-4 py-2 rounded bg-sky-600 text-white"
          onClick={() => {
            setCategoryFilter("");
            setLocationFilter("");
            setPriceSort("");
          }}
        >
          Reset
        </button>
      </div>

      {/* Vehicles Grid with AnimatePresence */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
        <AnimatePresence>
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map(vehicle => (
              <motion.div
                key={vehicle._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Vehicle vehicle={vehicle} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 font-semibold col-span-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No vehicles found
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllVehicles;
