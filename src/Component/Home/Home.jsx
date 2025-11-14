
import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import LatestVehicles from '../Latestvehicles/LatestVehicles';
import ThemeToggle from '../../Toggle/Toggle';
import '../variable/variable.css';

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
    fetch('http://localhost:3000/vehicles')
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
    <div className='min-h-screen transition-colors duration-300' data-theme={theme}>
      <Banner />
      <div className='flex justify-end w-11/12 mx-auto my-4'>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <LatestVehicles
        vehicles={latestVehicles}
        loading={loading}
        refreshVehicles={fetchVehicles}
      />
    </div>
  );
};

export default Home;
