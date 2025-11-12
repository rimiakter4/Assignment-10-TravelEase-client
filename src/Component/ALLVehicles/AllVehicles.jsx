import React, { use } from 'react';

import Vehicle from './Vehicle';
const vehiclesPromiss=fetch('http://localhost:3000/all-vehicles').then(res=>res.json())
const AllVehicles = () => {
    const allvehiles=use(vehiclesPromiss)
  
    return (
        <div className=''>
            <div className='text-center my-15  lg:text-5xl text-3xl font-bold text-sky-800'>
  <h1 className=''>Explore Our all  Collection </h1>
    <p className='lg:text-[18px] text-[14px] font-normal  text-sky-600 mt-3 lg:my-8'>Pick from our diverse collection of rides and set off on your next journey with ease and excitement.</p>
            </div>
  
    <div className='lg:ml-19 ml-9 rounded-2xl  mb-16 grid lg:grid-cols-3 grid-cols-1 gap-14'>
{
allvehiles.map(vehicle=><Vehicle key={vehicle._id} vehicle={vehicle}></Vehicle> )
}
    </div>

        </div>
    );
};

export default AllVehicles;