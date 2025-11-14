
import React, { use } from 'react';
import Vehicl from './Vehicl';

const LatestVehicles = ({ vehiclesPromiss }) => {
    // Using the promise with React's `use`
    const allvehicles = use(vehiclesPromiss);

    return (
        <div className='px-4 lg:px-20'>
            {/* Page Title */}
            <h1 className='text-4xl md:text-5xl font-bold text-center my-10'>
                Latest Vehicles
            </h1>

            {/* Vehicles Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 mt-10'>
                {allvehicles && allvehicles.length > 0 ? (
                    allvehicles.map(vehicle => (
                        <Vehicl key={vehicle._id} vehicle={vehicle} />
                    ))
                ) : (
                    // Default placeholder card
                    <div className="border rounded-lg shadow p-6 text-center text-gray-500 col-span-1 lg:col-span-3">
                        <h2 className="text-xl font-semibold">dfgf</h2>
                        <p>Placeholder vehicle info</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestVehicles;
