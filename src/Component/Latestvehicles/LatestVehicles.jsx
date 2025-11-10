import React, { use } from 'react';
import Vehicl from './Vehicl';

const LatestVehicles = ({vehiclesPromiss}) => {
    const allvehicles=use(vehiclesPromiss)
    console.log(allvehicles)
    return (
        <div>
            <h1 className='text-4xl md:text-5xl font-bold   text-center  '>Latest All vehicles</h1>
            <div>
                { allvehicles.map(vehicle=> <Vehicl key={vehicle._id} vehicle={vehicle}></Vehicl> )}
                   
            

            </div>
        </div>
    );
};

export default LatestVehicles;