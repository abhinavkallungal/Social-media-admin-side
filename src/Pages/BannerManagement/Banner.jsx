import React from 'react';
import AddBanner from '../../Components/AddBanner/AddBanner';
import Banners from '../../Components/Banners/Banners';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Banner() {
  return <div className='banner'>
      <Sidebar>
          <Banners/>
        </Sidebar>
     

  </div>;
}

export default Banner;
