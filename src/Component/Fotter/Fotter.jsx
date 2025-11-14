import React from 'react';
import nabimg from '../../assets/76eb3b183454807.65403a376d822.png'
import { FaXTwitter } from "react-icons/fa6";

const Fotter = () => {
    return (
        <div>
 
<div>
    
        <footer className="footer   footer-horizontal bg-no-repeat bg-cover   bg-linear-to-l  from-blue-500  blue-700 to-blue-500    bg-center  footer-center text-white   bg-opacity-5000 p-10">
        
  <aside>
    <div>
         <img className='w-[90px] rounded-full ' src={nabimg} alt="" />
    </div>
   
    <p className="font-bold">
    TravelEase
      <br />
      Reliable Travel Solutions Since 2025
    </p>
   <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col items-center gap-4">
      <a >
      <FaXTwitter/>

      
       
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
</div>

        </div>
        
    );
};

export default Fotter;