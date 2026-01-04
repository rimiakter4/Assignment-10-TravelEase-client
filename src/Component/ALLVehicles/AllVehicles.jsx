
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Vehicle from "./Vehicle";

// const AllVehicles = () => {
//   const [allVehicles, setAllVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [loading, setLoading] = useState(true); // loading state

//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [priceSort, setPriceSort] = useState("");

//   // Fetch data
//   useEffect(() => {
//     setLoading(true);
//     fetch("https://assignment-10-travelease.vercel.app/all-vehicles")
//       .then(res => res.json())
//       .then(data => {
//         setAllVehicles(data);
//         setFilteredVehicles(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
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

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <span className="loading loading-dots loading-xl"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-20">
//       {/* Page Title */}
//       <h1 className="text-center my-12 lg:text-5xl text-3xl font-bold text-sky-800">
//         Explore All Vehicles
//       </h1>

//       {/* Filters */}
//       <div className="flex justify-center  gap-4 mb-8 flex-wrap">
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
//       <div className="grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
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
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Vehicle from "./Vehicle";

// const AllVehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [priceSort, setPriceSort] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const limit = 8;

//   // 🔹 Fetch vehicles (pagination + filter + sort)
//   useEffect(() => {
//     setLoading(true);

//     fetch(
//       `https://assignment-10-travelease.vercel.app/all-vehicles?page=${currentPage}&limit=${limit}&category=${categoryFilter}&location=${locationFilter}&sort=${priceSort}`
//     )
//       .then(res => res.json())
//       .then(data => {
//         setVehicles(data.vehicles);
//         setTotalPages(data.totalPages);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [currentPage, categoryFilter, locationFilter, priceSort]);

//   // 🔹 Filter change হলে page reset
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [categoryFilter, locationFilter, priceSort]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <span className="loading loading-dots loading-xl"></span>
//       </div>
//     );
//   }

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
//           <option value="Car">Car</option>
//           <option value="Bike">Bike</option>
//           <option value="Bus">Bus</option>
//         </select>

//         <select
//           className="border px-4 py-2 rounded shadow"
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//         >
//           <option value="">Filter by Location</option>
//           <option value="Dhaka">Dhaka</option>
//           <option value="Chittagong">Chittagong</option>
//           <option value="Sylhet">Sylhet</option>
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

//       {/* Vehicles Grid */}
//       <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
//         <AnimatePresence>
//           {vehicles.length > 0 ? (
//             vehicles.map(vehicle => (
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
//               className="text-center text-gray-500 font-semibold col-span-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               No vehicles found
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center gap-2 mb-20">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(p => p - 1)}
//           className="px-4 py-2 border rounded disabled:opacity-50"
//         >
//           Prev
//         </button>

//         {[...Array(totalPages).keys()].map(num => (
//           <button
//             key={num}
//             onClick={() => setCurrentPage(num + 1)}
//             className={`px-4 py-2 border rounded ${
//               currentPage === num + 1
//                 ? "bg-sky-600 text-white"
//                 : ""
//             }`}
//           >
//             {num + 1}
//           </button>
//         ))}

//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(p => p + 1)}
//           className="px-4 py-2 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllVehicles;
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Vehicle from "./Vehicle";

// const AllVehicles = () => {
//   const [allVehicles, setAllVehicles] = useState([]);
//   const [filteredVehicles, setFilteredVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [priceSort, setPriceSort] = useState("");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limit = 8; // Vehicles per page

//   // Fetch all vehicles (backend should return all vehicles for now)
//   useEffect(() => {
//     setLoading(true);
//     fetch("https://assignment-10-travelease.vercel.app/all-vehicles")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllVehicles(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   // Filter + Sort
//   useEffect(() => {
//     let updated = [...allVehicles];

//     if (categoryFilter) {
//       updated = updated.filter(
//         (v) => v.category.toLowerCase() === categoryFilter.toLowerCase()
//       );
//     }

//     if (locationFilter) {
//       updated = updated.filter(
//         (v) => v.location.toLowerCase() === locationFilter.toLowerCase()
//       );
//     }

//     if (priceSort === "low") {
//       updated.sort((a, b) => a.pricePerDay - b.pricePerDay);
//     }
//     if (priceSort === "high") {
//       updated.sort((a, b) => b.pricePerDay - a.pricePerDay);
//     }

//     // Pagination logic
//     const start = (currentPage - 1) * limit;
//     const end = start + limit;
//     setFilteredVehicles(updated.slice(start, end));
//     setTotalPages(Math.ceil(updated.length / limit));
//   }, [categoryFilter, locationFilter, priceSort, allVehicles, currentPage]);

//   // Reset page on filter change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [categoryFilter, locationFilter, priceSort]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <span className="loading loading-dots loading-xl"></span>
//       </div>
//     );
//   }

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
//           {[...new Set(allVehicles.map((v) => v.category))].map((cat, idx) => (
//             <option key={idx} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <select
//           className="border px-4 py-2 rounded shadow"
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//         >
//           <option value="">Filter by Location</option>
//           {[...new Set(allVehicles.map((v) => v.location))].map(
//             (loc, idx) => (
//               <option key={idx} value={loc}>
//                 {loc}
//               </option>
//             )
//           )}
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

//       {/* Vehicles Grid */}
//       <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
//         <AnimatePresence>
//           {filteredVehicles.length > 0 ? (
//             filteredVehicles.map((vehicle) => (
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

//       {/* Pagination */}
//       {/* <div className="flex justify-center gap-2 mb-20">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((p) => p - 1)}
//           className="px-4 py-2 border rounded disabled:opacity-50"
//         >
//           Prev
//         </button>

//         {[...Array(totalPages).keys()].map((num) => (
//           <button
//             key={num}
//             onClick={() => setCurrentPage(num + 1)}
//             className={`px-4 py-2 border rounded ${
//               currentPage === num + 1 ? "bg-sky-600 text-white" : ""
//             }`}
//           >
//             {num + 1}
//           </button>
//         ))}

//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((p) => p + 1)}
//           className="px-4 py-2 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div> */}
//       {/* Pagination */}
// {/* <div className="flex justify-center gap-2 mb-20">
//   {/* Previous Button */}
//   {/* <button
//     disabled={currentPage === 1}
//     onClick={() => setCurrentPage((p) => p - 1)}
//     className="px-4 py-2 border rounded disabled:opacity-50"
//   >
//     Prev
//   </button> */}

//   {/* Page Numbers */}
//   {/* {[...Array(totalPages).keys()].map((num) => (
//     <button
//       key={num}
//       onClick={() => setCurrentPage(num + 1)}
//       className={`px-4 py-2 border rounded font-bold transition-all duration-200 ${
//         currentPage === num + 1
//           ? "bg-sky-600 text-white scale-110 shadow-sm"
//           : "bg-white text-black hover:bg-sky-100"
//       }`}
//     >
//       {num + 1}
//     </button>
//   ))} */}
//   {/* {[...Array(totalPages).keys()].map((num) => (
//   <button
//     key={num}
//     onClick={() => setCurrentPage(num + 1)}
//     className={`px-4 py-2 border rounded font-bold transition-all duration-200 ${
//       currentPage === num + 1
//         ? "bg-blue-700 text-white border-blue-700" // <- explicit background + border + text
//         : "bg-white text-blue-700 border-blue-700 hover:bg-blue-100"
//     }`}
//   >
//     {num + 1}
//   </button>
// ))} */}
// {/* {[...Array(totalPages).keys()].map((num) => (
//   <button
//     key={num}
//     onClick={() => setCurrentPage(num + 1)}
//     className={`px-4 py-2 border rounded font-semibold transition-colors duration-200 ${
//       currentPage === num + 1
//         ? "bg-gray-400 text-white border-gray-400" // subtle, safe color
//         : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
//     }`}
//   >
//     {num + 1}
//   </button>
// ))} */}


//   {/* Next Button */}
//   {/* <button
//     disabled={currentPage === totalPages}
//     onClick={() => setCurrentPage((p) => p + 1)}
//     className="px-4 py-2 border rounded disabled:opacity-50"
//   >
//     Next
//   </button>
// </div> */} 
// <div className="flex justify-center gap-2 mb-20">
//   {/* Prev Button */}
//   <button
//     disabled={currentPage === 1}
//     onClick={() => setCurrentPage(p => p - 1)}
//     className="px-4 py-2 border rounded disabled:opacity-50"
//   >
//     Prev
//   </button>

//   {/* Page Numbers */}
//   {[...Array(totalPages).keys()].map(num => (
//     <button
//       key={num}
//       onClick={() => setCurrentPage(num + 1)}
//       className={`px-4 py-2 border rounded font-semibold transition-colors duration-200 ${
//         currentPage === num + 1
//           ? "bg-gray-400 text-white border-gray-400"  // Current page = subtle / dull
//           : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600" // Other pages = bright
//       }`}
//     >
//       {num + 1}
//     </button>
//   ))}

//   {/* Next Button */}
//   <button
//     disabled={currentPage === totalPages}
//     onClick={() => setCurrentPage(p => p + 1)}
//     className="px-4 py-2 border rounded disabled:opacity-50"
//   >
//     Next
//   </button>
// </div>


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
  const [loading, setLoading] = useState(true);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8; // Vehicles per page

  // Fetch all vehicles
  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-10-travelease.vercel.app/all-vehicles")
      .then((res) => res.json())
      .then((data) => {
        setAllVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter + Sort Logic
  useEffect(() => {
    let updated = [...allVehicles];

    if (categoryFilter) {
      updated = updated.filter(
        (v) => v.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (locationFilter) {
      updated = updated.filter(
        (v) => v.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    if (priceSort === "low") {
      updated.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }
    if (priceSort === "high") {
      updated.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    // Calculate pagination based on filtered results
    const total = Math.ceil(updated.length / limit);
    setTotalPages(total || 1);

    const start = (currentPage - 1) * limit;
    const end = start + limit;
    setFilteredVehicles(updated.slice(start, end));
  }, [categoryFilter, locationFilter, priceSort, allVehicles, currentPage]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, locationFilter, priceSort]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-dots loading-xl text-sky-600"></span>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20 min-h-screen">
      {/* Page Title */}
      <h1 className="text-center my-12 lg:text-5xl text-3xl font-bold text-sky-800">
        Explore All Vehicles
      </h1>

      {/* Filters Section */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <select
          className="border px-4 py-2 rounded shadow focus:outline-sky-500"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Filter by Category</option>
          {[...new Set(allVehicles.map((v) => v.category))].map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded shadow focus:outline-sky-500"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Filter by Location</option>
          {[...new Set(allVehicles.map((v) => v.location))].map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded shadow focus:outline-sky-500"
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <button
          className="border px-6 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
          onClick={() => {
            setCategoryFilter("");
            setLocationFilter("");
            setPriceSort("");
          }}
        >
          Reset
        </button>
      </div>

      {/* Vehicles Grid */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
        <AnimatePresence mode="wait">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Vehicle vehicle={vehicle} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 font-semibold col-span-full py-20 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No vehicles found matching your criteria.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-3 mb-20">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 border rounded-lg font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
        >
          Prev
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages).keys()].map((num) => {
            const pageNum = num + 1;
            const isActive = currentPage === pageNum;

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 border rounded-lg font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gray-200 text-gray-500 border-gray-300 cursor-default" // হালকা/ডাল কালার (Active)
                    : "bg-sky-600 text-white border-sky-600 hover:bg-sky-700 shadow-md active:scale-90" // উজ্জ্বল কালার (Other Pages)
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 border rounded-lg font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllVehicles;