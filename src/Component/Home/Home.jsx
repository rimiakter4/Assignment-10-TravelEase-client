
// import React, { useState, Suspense } from 'react';
// import Banner from '../Banner/Banner';
// import LatestVehicles from '../Latestvehicles/LatestVehicles';
// import TopCatagories from '../TopCatagories/TopCatagories';
// import About from '../About/About';
// import DateFns from '../DateFns';
// import ThemeToggle from '../../Toggle/Toggle';
// import '../variable/variable.css';

// const vehiclesPromiss = fetch('http://localhost:3000/vehicles').then(res => res.json());

// const Home = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div className='min-h-screen transition-colors duration-300' data-theme={theme}>
      
//       {/* Banner */}
//       <Banner />

//       {/* Theme Toggle below Banner */}
//       <div className='flex justify-end w-11/12 mx-auto my-4'>
//         <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//       </div>

    
//       <section className='w-11/12 mx-auto h-full my-10'>
//         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
//           <LatestVehicles vehiclesPromiss={vehiclesPromiss} />
//         </Suspense>
//       </section>


//       <DateFns />

     
//       <section className='w-11/12 mx-auto my-20'>
//         <TopCatagories />
//       </section>

     
//       <section>
//         <About />
//       </section>
//     </div>
//   );
// };

// export default Home;

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
