
import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import LatestVehicles from '../Latestvehicles/LatestVehicles';
import ThemeToggle from '../../Toggle/Toggle';
import '../variable/variable.css';
import DateFns from '../DateFns';
import TopCatagories from '../TopCatagories/TopCatagories';
import About from '../About/About';

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [latestVehicles, setLatestVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Fetch vehicles
  const fetchVehicles = () => {
    setLoading(true);
    fetch('https://assignment-10-travelease.vercel.app/vehicles')
      .then(res => res.json())
      .then(data => {
        setLatestVehicles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className=' w-full transition-colors duration-300'  style={{overflowX: 'hidden', overflowY: 'hidden' }} data-theme={theme}>
      <Banner />
      <div className='flex justify-end w-11/12 mx-auto my-4'>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <LatestVehicles
        vehicles={latestVehicles}
        loading={loading}
        refreshVehicles={fetchVehicles}
      />
       <DateFns></DateFns>

     
       <section className='w-11/12 mx-auto my-20'>
      <TopCatagories></TopCatagories>
      </section>

     <section>
       <About></About>
       </section>
    
      
    </div>
  );
};

export default Home;
