import React from 'react';
import eorrimg from '../../assets/image.png'
import { Link } from 'react-router';
const Erorr = () => {
    return (
        <div>
              <div>
        <div className='  justify-center items-center  mt-10'>
      <div className='flex justify-center items-center'>
 <img className='w-[400px] ' src={eorrimg} alt="" />
      </div>
          
        
   <h1 className='text-4xl mt-4 font-semibold text-center'>Oops, page not found!</h1>
        <p className='text-gray-500 text-center mt-4'>  The page you are looking for is not available.</p>
      <Link to='/'> 
        
          <div className='flex items-center justify-around '>   <button className="btn bg-linear-to-l w-[130px] mr-2 from-[#9F62F2] to-[#632EE3] p-6 my-4 ">Go Back</button></div>
       
</Link>
           </div>
         
                
          
        </div>
            
        </div>
    );
};

export default Erorr;