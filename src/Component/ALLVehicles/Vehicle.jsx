import React from 'react';
import { Link } from 'react-router';

const Vehicle = ({vehicle}) => {
    const {coverImage,vehicleName,description,pricePerDay,availability,_id}=vehicle
  
    return (
        <div>
              <div>
            <div className="card rounded-2xl bg-base-100 w-96 shadow-sm">
  
    <img className='h-[300px] rounded-t-2xl'
      src={coverImage}
      alt="Shoes" />
 
  <div className="card-body p-5 ">
    <h2 className="card-title">{vehicleName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge outline-1 outline-sky-800 ">Perday : ${pricePerDay}</div>
      <div className="badge outline-1 outline-sky-800 ">{availability}</div>
    </div>
    <div className="card-actions justify-end my-3">
      <Link to={`/vehiclesDetails/${_id}`} className="btn w-full text-white hover:bg-sky-400  bg-sky-600">View Details</Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Vehicle;