import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import LatestVehicles from '../Latestvehicles/LatestVehicles';
import Owner from '../Owner/Owner';
import TopCatagories from '../TopCatagories/TopCatagories';
import About from '../About/About';

const vehiclesPromiss=fetch('http://localhost:3000/vehicles').then(res=>res.json())

const Home = () => {
    return (
        <div className='bg-blue-50'>
      <Banner></Banner>
      <section className='w-11/12  mx-auto h-full my-10 '>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}> <LatestVehicles vehiclesPromiss={vehiclesPromiss}></LatestVehicles></Suspense>

      </section>
       <section className='w-11/12 mx-auto my-20 '>
 <TopCatagories></TopCatagories>


      </section>
      <section>
        <About></About>
      </section>
     
      {/* <section className='w-11/12 mx-auto my-20 '>
      <Owner></Owner>


      </section> */}
     
        </div>
    );
};

export default Home;