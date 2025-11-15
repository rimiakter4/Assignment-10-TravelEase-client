import React from 'react';
import Nabver from './Navbar/Nabver';
import { Outlet} from 'react-router';
import Fotter from './Fotter/Fotter';

const Root = () => {


    return (
        <div className='w-full '>
            <Nabver></Nabver>
           
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;