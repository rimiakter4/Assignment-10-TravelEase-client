
// import React from 'react';
// import Vehicl from './Vehicl';

// const LatestVehicles = ({ vehicles, loading, refreshVehicles }) => {
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <span className="loading loading-dots loading-xl"></span>
//       </div>
//     );
//   }

//   return (
//     // <div className='max-w-[1440px] mx-auto px-4 lg:px-6 my-16'>
//     //   <h1 className='text-4xl md:text-5xl font-bold text-center my-10'>
//     //     Latest Vehicles
//     //   </h1>

//     //   <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10'>
//     //     {vehicles.length > 0 ? (
//     //       vehicles.map(vehicle => (
//     //         <Vehicl key={vehicle._id} vehicle={vehicle} refreshVehicles={refreshVehicles} />
//     //       ))
//     //     ) : (
//     //       <div className="border rounded-lg shadow p-6 text-center text-gray-500 col-span-1 lg:col-span-3">
//     //         <h2 className="text-xl font-semibold">No vehicles yet</h2>
//     //         <p>Placeholder vehicle info</p>
//     //       </div>
//     //     )}
//     //   </div>
//     // </div>
//     // LatestVehicles.jsx ফাইলে রিটার্ন অংশটি এভাবে দিন
// <div className='max-w-[1440px] mx-auto px-4 md:px-10 my-16'> 
//     <h1 className='text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#0F172A]'>
//         Latest Vehicles
//     </h1>

//     {/* gap-6 দিলে কার্ডগুলোর মাঝে সমান গ্যাপ থাকবে */}
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
//         {vehicles.map(vehicle => (
//             <Vehicl key={vehicle._id} vehicle={vehicle} refreshVehicles={refreshVehicles} />
//         ))}
//     </div>
// </div>
//   );
// };

// export default LatestVehicles;
// import React from 'react';
// import Vehicl from './Vehicl';

// const LatestVehicles = ({ vehicles, loading, refreshVehicles }) => {
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <span className="loading loading-dots loading-xl text-blue-600"></span>
//       </div>
//     );
//   }

//   return (
//     // max-w-7xl ব্যবহার করায় কার্ডগুলো ডানে-বামে খুব বেশি ছড়িয়ে যাবে না
//     // <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16'>
//     //   <h1 className='text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#0F172A]'>
//     //     Latest Vehicles
//     //   </h1>

//     //   {/* gap-4 বা gap-5 হলো আদর্শ; ডানে-বামে গ্যাপ কমাতে justify-items-center দিন */}
//     //   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
//     //     {vehicles.length > 0 ? (
//     //       vehicles.map(vehicle => (
//     //         <Vehicl key={vehicle._id} vehicle={vehicle} refreshVehicles={refreshVehicles} />
//     //       ))
//     //     ) : (
//     //       <div className="col-span-full text-center py-10 border-2 border-dashed rounded-lg">
//     //         <h2 className="text-xl text-gray-500">No vehicles found</h2>
//     //       </div>
//     //     )}
//     //   </div>
//     // </div>
//     // LatestVehicles.jsx
// <div className='max-w-screen-2xl mx-auto px-2 my-10'> 
//   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5'>
//     {/* Daraz-এর মতো লুকে এক সারিতে ৫টা বা ৬টা কার্ড থাকলে ভালো দেখায় */}
//     {vehicles.map(vehicle => (
//       <Vehicl key={vehicle._id} vehicle={vehicle} />
//     ))}
//   </div>
// </div>
//   );
// };

// export default LatestVehicles;
import React from 'react';
import Vehicl from './Vehicl';

const LatestVehicles = ({ vehicles, loading, refreshVehicles }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-dots loading-xl text-blue-600"></span>
      </div>
    );
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-2 my-10'> 
      <h1 className='text-5xl font-bold mb-12 text-gray-800 text-center'>
        Latest Vehicles
      </h1>

      {/* ৫টি কলাম এবং খুব ছোট গ্যাপ (gap-2) */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
        {vehicles.length > 0 ? (
          vehicles.map(vehicle => (
            <Vehicl 
              key={vehicle._id} 
              vehicle={vehicle} 
              refreshVehicles={refreshVehicles} // এই প্রপসটি না থাকলে এরর দিতে পারে
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 border-2 border-dashed border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold text-gray-400">No vehicles available</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestVehicles;