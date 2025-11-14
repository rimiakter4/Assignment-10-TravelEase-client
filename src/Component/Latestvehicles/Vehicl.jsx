import React from 'react';
import { Link } from 'react-router';

const Vehicl = ({vehicle}) => {
    console.log(vehicle)
    const {coverImage,description,vehicleName,_id}=vehicle
    return (
        <div>
            <div className="card rounded-2xl bg-base-100 lg:w-96  shadow-sm">
  
    <img className='h-[300px] rounded-t-2xl'
      src={coverImage}
      alt="Shoes" />
 
  <div className="card-body p-5 ">
    <h3 className="card-title">{vehicleName}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end my-3">
      <Link to={`/vehiclesDetails/${_id}`} className="btn w-full text-white hover:bg-sky-400  bg-sky-600">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Vehicl;