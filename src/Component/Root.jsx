import React from 'react';
import Nabver from './Navbar/Nabver';
import { Outlet} from 'react-router';
import Fotter from './Fotter/Fotter';

const Root = () => {


    return (
        <div className='w-full absolute '>
           <div className='sticky top-0 z-50 w-full bg-white/80  dark:bg-gray-900/80 backdrop-blur-md shadow-sm'>  <Nabver></Nabver></div>
           
           
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;