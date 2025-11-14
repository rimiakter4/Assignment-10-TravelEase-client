
import React from 'react';
import Vehicl from './Vehicl';

const LatestVehicles = ({ vehicles, loading, refreshVehicles }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className='px-4 lg:px-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-center my-10'>
        Latest Vehicles
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 mt-10'>
        {vehicles.length > 0 ? (
          vehicles.map(vehicle => (
            <Vehicl key={vehicle._id} vehicle={vehicle} refreshVehicles={refreshVehicles} />
          ))
        ) : (
          <div className="border rounded-lg shadow p-6 text-center text-gray-500 col-span-1 lg:col-span-3">
            <h2 className="text-xl font-semibold">No vehicles yet</h2>
            <p>Placeholder vehicle info</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestVehicles;
