// import React from 'react';
// import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
// import { FaXTwitter } from "react-icons/fa6";

// const Fotter = () => {
//     return (
//         <div>
 
// <div>
    
//         <footer className="footer   footer-horizontal bg-no-repeat bg-cover bg-[#0F172A]     bg-center  footer-center text-white    p-10">
        
//   <aside>
//     <div>
//          <img className='w-[90px] rounded-full ' src={nabimg} alt="" />
//     </div>
   
//     <p className="font-bold">
//     TravelEase
//       <br />
//       Reliable Travel Solutions Since 2025
//     </p>
//    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
//   </aside>
//   <nav>
//     <div className="grid grid-flow-col items-center gap-4">
//       <a >
//       <FaXTwitter/>

      
       
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//         </svg>
//       </a>
//     </div>
//   </nav>
// </footer>
// </div>

//         </div>
        
//     );
// };

// export default Fotter;
import React from 'react';
import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router';

const Fotter = () => {
    return (
        <footer className="bg-[#0F172A] text-white py-19 px-4 mt-20">
            {/* কন্টেইনার যা ৩টি কলাম তৈরি করবে */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                
                {/* কলাম ১: লোগো এবং ব্র্যান্ড টেক্সট */}
                {/* <aside className="flex flex-col gap-3">
                    <img className='lg:w-[70px] w-[50px] rounded-full'  src={nabimg} alt="Logo" />
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">TravelEase</h2>
                        <p className="text-white opacity-90 text-sm">
                            Reliable Travel Solutions Since 2025. <br />
                            Your journey, our priority.
                        </p>
                    </div>
                </aside> */}
                <aside className=""> {/* gap-3 কমিয়ে gap-1 করে দেওয়া হয়েছে */}
    <img 
        className='lg:w-[70px] w-[50px] rounded-full' 
        src={nabimg} 
        alt="Logo" 
    />
    
    <div className=""> {/* হালকা একটু মার্জিন টপ যাতে একদম লেগে না যায় */}
        <h2 className="text-2xl font-bold text-white leading-none">TravelEase</h2>
        
        <p className="text-white text-sm  leading-tight"><span className='text-white'> Reliable Travel Solutions Since 2025.</span>
            <br />
            <span className="text-white opacity-90">Your journey, our priority.</span>
        </p>
    </div>
</aside>

                {/* কলাম ২: কুইক লিঙ্কস (৩টি কলামের কন্ডিশন পূরণ করতে) */}
                <nav className="flex flex-col gap-4">
                    <h6 className="text-white font-bold uppercase tracking-widest text-sm border-b border-blue-600 pb-2 w-20">Company</h6>
                    <div className="flex flex-col gap-2 text-white opacity-80 text-sm">
                        {/* <a className="hover:text-blue-400 transition-colors cursor-pointer">About Us</a>
                        <a className="hover:text-blue-400 transition-colors cursor-pointer">Vehicles List</a>
                        <a className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</a> */}
                        <Link to="/about" className="hover:text-blue-400 transition-colors cursor-pointer">About Us</Link>
<Link to="/allvehicles" className="hover:text-blue-400 transition-colors cursor-pointer">Vehicles List</Link>
<Link to="/praivacy" className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</Link>
<Link to="/about" className="hover:text-blue-400 transition-colors cursor-pointer">About Us</Link>
                    </div>
                </nav>

                {/* কলাম ৩: সোশ্যাল মিডিয়া */}
                <nav className="flex flex-col gap-4">
                    <h6 className="text-white font-bold uppercase tracking-widest text-sm border-b border-blue-600 pb-2 w-20">Social</h6>
                    <div className="flex items-center gap-5">
                        <a className="text-white hover:text-blue-400 transition-transform hover:-translate-y-1">
                            <FaXTwitter size={24} />
                        </a>
                        <a className="text-white hover:text-red-500 transition-transform hover:-translate-y-1">
                            <FaYoutube size={26} />
                        </a>
                        <a className="text-white hover:text-blue-600 transition-transform hover:-translate-y-1">
                            <FaFacebookF size={24} />
                        </a>
                    </div>
                    <p className="text-white opacity-70 text-xs mt-4">
                        Copyright © {new Date().getFullYear()} - All rights reserved
                    </p>
                </nav>

            </div>
        </footer>
    );
};

export default Fotter;