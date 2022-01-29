import React from 'react';
import AddBanner from '../../Components/AddBanner/AddBanner';
import Sidebar from '../../Components/Sidebar/Sidebar';

function AddBannerPage() {
  return <div className='banner'>
      <Sidebar>
          <AddBanner/>
        </Sidebar>
     

  </div>;
}

export default AddBannerPage;
