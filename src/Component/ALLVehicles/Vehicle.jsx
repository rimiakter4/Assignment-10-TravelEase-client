// import React from 'react';
// import { Link } from 'react-router';

// const Vehicle = ({vehicle}) => {
//     const {coverImage,vehicleName,description,pricePerDay,availability,_id}=vehicle
  
//     return (
// //         <div>
// //               <div>
// //             <div className="card rounded-2xl bg-base-100 w-96 shadow-sm">
  
// //     <img className='h-[300px] rounded-t-2xl'
// //       src={coverImage}
// //       alt="Shoes" />
 
// //   <div className="card-body p-5 ">
// //     <h3 className="card-title">{vehicleName}</h3>
// //     <p>{description}</p>
// //     <div className="card-actions justify-end">
// //       <div className="badge outline-1 outline-sky-800 ">Perday : ${pricePerDay}</div>
// //       <div className="badge outline-1 outline-sky-800 ">{availability}</div>
// //     </div>
// //     <div className="card-actions justify-end my-3">
// //       <Link to={`/vehiclesDetails/${_id}`} className="btn w-full text-white hover:bg-sky-400  bg-sky-600">View Details</Link>
// //     </div>
// //   </div>
// // </div>
// //         </div>
// //         </div>
// <div className="bg-white border border-gray-100  rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      
//       {/* ইমেজ সেকশন - হোভার করলে জুম হবে */}
     
//       <div className="h-52 w-full overflow-hidden relative">
//         <img 
//           className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
//           src={coverImage || 'https://via.placeholder.com/400x300'} 
//           alt={vehicleName} 
//         />
//         {/* এভেইল্যাবিলিটি ব্যাজ ইমেজের উপরে */}
//         <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm ${
//           availability === 'available' || availability === 'Available' 
//           ? 'bg-green-100 text-green-600' 
//           : 'bg-red-100 text-red-600'
//         }`}>
//           {availability}
//         </div>
//       </div>

//       {/* কন্টেন্ট সেকশন */}
//       <div className="p-4 flex flex-col flex-grow">
        
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
//             {vehicleName}
//           </h3>
//           <span className="text-sky-600 font-bold text-lg">
//             ${pricePerDay}<span className="text-[10px] text-gray-400 font-normal">/day</span>
//           </span>
//         </div>

//         {/* ডেসক্রিপশন */}
//         <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-grow">
//           {description}
//         </p>

//         {/* বাটন সেকশন */}
//         <div className="mt-auto">
//           {/* <Link 
//             to={`/vehiclesDetails/${_id}`} 
//             className="block w-full text-sm font-semibold text-center py-2.5 bg-sky-600 text-white hover:bg-sky-700 transition-colors rounded-lg shadow-md hover:shadow-sky-200"
//           >
//             View Details
//           </Link> */}
//            <Link 
//                       to={`/vehiclesDetails/${_id}`} 
//                       className="block w-full text-[10px] font-bold text-center py-1.5 border  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-sm uppercase"
//                     >
//                       View Details
//                     </Link>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Vehicle;
import React from 'react';
import { Link } from 'react-router';

const Vehicle = ({ vehicle }) => {
  const { coverImage, vehicleName, description, pricePerDay, availability, _id } = vehicle;

  return (
    /* max-w-[300px] এবং mx-auto ব্যবহার করে কার্ডের সাইজ ছোট ও মাঝখানে রাখা হয়েছে */
    <div className="w-full bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      
      {/* ইমেজ সেকশন - হাইট কমিয়ে h-44 করা হয়েছে */}
      <div className="h-44 w-full overflow-hidden relative">
        <img 
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
          src={coverImage || 'https://via.placeholder.com/400x300'} 
          alt={vehicleName} 
        />
        
        {/* এভেইল্যাবিলিটি ব্যাজ */}
        <div className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase shadow-sm ${
          availability?.toLowerCase() === 'available' 
          ? 'bg-green-100 text-green-600' 
          : 'bg-red-100 text-red-600'
        }`}>
          {availability}
        </div>
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-3 flex flex-col flex-grow">
        
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
            {vehicleName}
          </h3>
          <span className="text-blue-600 font-bold text-sm">
            ${pricePerDay}<span className="text-[9px] text-gray-400 font-normal">/d</span>
          </span>
        </div>

        {/* ডেসক্রিপশন - সাইজ ছোট করা হয়েছে */}
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-tight mb-3 flex-grow">
          {description}
        </p>

        {/* বাটন সেকশন */}
        <div className="mt-auto">
          <Link 
            to={`/vehiclesDetails/${_id}`} 
            className="block w-full text-[10px] font-bold text-center py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-sm uppercase"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
// import React from 'react';
// import { Link } from 'react-router';

// const Vehicle = ({ vehicle }) => {
//   const { coverImage, vehicleName, description, pricePerDay, availability, _id } = vehicle;

//   return (
//     /* কার্ডের মেইন কন্টেইনার - সাইড গ্যাপ কমানোর জন্য w-full এবং hover effect */
//     <div className="w-full bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group border-b-2 hover:border-b-blue-500">
      
//       {/* ইমেজ সেকশন - হাইট কিছুটা বাড়ানো হয়েছে (h-48) */}
//       <div className="h-48 w-full overflow-hidden relative">
//         <img 
//           className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' 
//           src={coverImage || 'https://via.placeholder.com/400x300'} 
//           alt={vehicleName} 
//         />
        
//         {/* এভেইল্যাবিলিটি ব্যাজ - একটু বড় এবং স্পষ্ট */}
//         <div className={`absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-md ${
//           availability?.toLowerCase() === 'available' 
//           ? 'bg-green-500 text-white' 
//           : 'bg-red-500 text-white'
//         }`}>
//           {availability}
//         </div>
//       </div>

//       {/* কন্টেন্ট সেকশন - প্যাডিং p-4 দেওয়া হয়েছে যাতে লেখাগুলো সুন্দর দেখায় */}
//       <div className="p-4 flex flex-col flex-grow">
        
//         <div className="flex justify-between items-start mb-2 gap-2">
//           <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
//             {vehicleName}
//           </h3>
//           <div className="flex flex-col items-end">
//             <span className="text-blue-600 font-extrabold text-lg leading-none">
//               ${pricePerDay}
//             </span>
//             <span className="text-[10px] text-gray-400 font-medium">per day</span>
//           </div>
//         </div>

//         {/* ডেসক্রিপশন - ২ লাইন স্পষ্ট দেখা যাবে */}
//         <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-grow">
//           {description}
//         </p>

//         {/* বাটন সেকশন - আধুনিক স্টাইল */}
//         <div className="mt-auto">
//           {/* <Link 
//             to={`/vehiclesDetails/${_id}`} 
//             className="flex items-center justify-center w-full text-xs font-bold text-center py-2.5  text-blue-600 border-1 hover:bg-blue-600 transition-all duration-300 rounded-md uppercase tracking-widest"
//           >
//             View Details
//           </Link> */}
//            <Link 
//                       to={`/vehiclesDetails/${_id}`} 
//                       className="block w-full text-[10px] font-bold text-center py-1.5 border  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-sm uppercase"
//                     >
//                       View Details
//                     </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vehicle;