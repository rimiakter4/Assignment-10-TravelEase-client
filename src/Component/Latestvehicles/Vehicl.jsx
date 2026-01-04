// import React from 'react';
// import { Link } from 'react-router';

// const Vehicl = ({vehicle}) => {
//     console.log(vehicle)
//     const {coverImage,description,vehicleName,_id}=vehicle
//     return (
//         <div>
//             <div className="card rounded-2xl bg-base-100 lg:w-96  shadow-sm">
  
//     <img className='h-[300px] rounded-t-2xl'
//       src={coverImage}
//       alt="Shoes" />
 
//   <div className="card-body p-5 ">
//     <h3 className="card-title">{vehicleName}</h3>
//     <p>{description}</p>
//     <div className="card-actions justify-end my-3">
//       <Link to={`/vehiclesDetails/${_id}`} className="btn w-full text-white hover:bg-sky-400  bg-sky-600">View Details</Link>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Vehicl;
// import React from 'react';
// import { Link } from 'react-router';

// const Vehicl = ({vehicle}) => {
//     const {coverImage, description, vehicleName, _id} = vehicle;
    
//     return (
//         <div className="h-full">
//             {/* rounded-sm ব্যবহার করেছি শার্প বর্ডারের জন্য এবং w-full যাতে গ্রিডে ফিট হয় */}
//             <div className="card rounded-sm bg-base-100 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full w-[300px] flex flex-col">
                
//                 {/* ইমেজের হাইট কমিয়ে ২০০ পিক্সেল করা হয়েছে */}
//                 <figure className="h-[200px] overflow-hidden">
//                     <img 
//                         className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
//                         src={coverImage}
//                         alt={vehicleName} 
//                     />
//                 </figure>
                
//                 {/* প্যাডিং কমিয়ে p-4 করা হয়েছে */}
//                 <div className="flex flex-col flex-grow p-4">
//                     <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
//                         {vehicleName}
//                     </h3>
                    
//                     {/* ডেসক্রিপশন ২ লাইনে ফিক্সড করা হয়েছে যাতে সব কার্ড সমান থাকে */}
//                     <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">
//                         {description}
//                     </p>
                    
//                     <div className="mt-4">
//                         {/* বাটনটির বর্ডার রেডিয়াসও শার্প করা হয়েছে */}
//                         <Link 
//                             to={`/vehiclesDetails/${_id}`} 
//                             className="btn btn-sm w-full text-white bg-blue-600 hover:bg-blue-700 border-none rounded-sm transition-colors"
//                         >
//                             View Details
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Vehicl;
import React from 'react';
import { Link } from 'react-router'; // লিঙ্ক ইমপোর্ট ঠিক করে নিন

const Vehicl = ({ vehicle }) => {
  const { coverImage, description, vehicleName, _id, price } = vehicle;

  return (
    // কার্ডের মেইন ডিভ - এখানে h-full সরিয়ে দিয়েছি যাতে এটি অটো-হাইট নেয়
    <div className="bg-white border  border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* ইমেজ সেকশন - হাইট ফিক্সড রাখা হয়েছে যাতে সব কার্ড সমান দেখায় */}
      <div className="h-40 sm:h-44 w-full bg-gray-50">
        <img 
          className='h-full w-full object-cover' 
          src={coverImage || 'https://via.placeholder.com/400x300'} 
          alt={vehicleName} 
        />
      </div>

      {/* কন্টেন্ট সেকশন - p-2/p-3 প্যাডিং দিন */}
      <div className="p-3 flex flex-col flex-grow">
        
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1">
          {vehicleName}
        </h3>

        {/* ডেসক্রিপশন - ২ লাইন ফিক্সড */}
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-tight mb-2 flex-grow">
          {description}
        </p>

        {/* প্রাইস এবং বাটন */}
        <div className="mt-auto">
          <p className="text-blue-600 font-bold text-sm mb-2">
            ${price || '45.00'}
          </p>
          
          <Link 
            to={`/vehiclesDetails/${_id}`} 
            className="block w-full text-[10px] font-bold text-center py-1.5 border  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-sm uppercase"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicl;
// import React from 'react';
// import { Link } from 'react-router';

// const Vehicle = ({ vehicle }) => {
//   const { coverImage, vehicleName, description, pricePerDay, availability, _id } = vehicle;

//   return (
//     // ডার্ক মোডে ব্যাকগ্রাউন্ড কালো হবে (bg-black), কিন্তু ভেতরের কন্টেন্ট আপনি যেমন চেয়েছেন তেমন থাকবে
//     <div className="w-full bg-white  border-gray-100 dark:bg-gray-800  rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group border-b-2 hover:border-b-blue-500">
      
//       {/* ইমেজ সেকশন */}
//       <div className="h-48 w-full overflow-hidden relative">
//         <img 
//           className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' 
//           src={coverImage || 'https://via.placeholder.com/400x300'} 
//           alt={vehicleName} 
//         />
        
//         <div className={`absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-md ${
//           availability?.toLowerCase() === 'available' 
//           ? 'bg-green-500 text-white' 
//           : 'bg-red-500 text-white'
//         }`}>
//           {availability}
//         </div>
//       </div>

//       {/* কন্টেন্ট সেকশন - এখানে dark: মোডেও টেক্সট কালো রাখা হয়েছে */}
//       <div className="p-4 flex flex-col flex-grow">
        
//         <div className="flex justify-between items-start mb-2 gap-2">
//           {/* dark:text-black ব্যবহার করা হয়েছে যাতে ডার্ক মোডেও লেখা কালো থাকে */}
//           <h3 className="text-base font-bold text-gray-900 dark:text-black line-clamp-1 group-hover:text-blue-600 transition-colors">
//             {vehicleName}
//           </h3>
//           <div className="flex flex-col items-end">
//             <span className="text-blue-600 font-extrabold text-lg leading-none">
//               ${pricePerDay}
//             </span>
//             <span className="text-[10px] text-gray-400 dark:text-gray-600 font-medium">per day</span>
//           </div>
//         </div>

//         {/* ডেসক্রিপশন - এখানেও ডার্ক মোডে টেক্সট কালো রাখা হয়েছে */}
//         <p className="text-sm text-gray-500 dark:text-black line-clamp-2 leading-relaxed mb-4 flex-grow">
//           {description}
//         </p>

//         {/* বাটন সেকশন */}
//         <div className="mt-auto">
//           <Link 
//             to={`/vehiclesDetails/${_id}`} 
//             className="flex items-center justify-center w-full text-xs font-bold text-center py-2.5 bg-gray-900 text-white hover:bg-blue-600 transition-all duration-300 rounded-md uppercase tracking-widest"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vehicle;