import React, { use } from 'react';
import Vehicl from './Vehicl';

const LatestVehicles = ({vehiclesPromiss}) => {
    const allvehicles=use(vehiclesPromiss)
    console.log(allvehicles)
    return (
        <div className=''>
            <h1 className='text-4xl md:text-5xl font-bold   text-center  '>Latest All vehicles</h1>
            <div className=' ml-19 p-15 grid grid-cols-3 gap-14  '>
                { allvehicles.map(vehicle=> <Vehicl key={vehicle._id} vehicle={vehicle}></Vehicl> )}
                   
            

            </div>
        </div>
    );
};

export default LatestVehicles;