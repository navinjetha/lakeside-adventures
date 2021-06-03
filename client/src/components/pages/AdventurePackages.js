// import React from 'react';
// import '../../App.css';

// export default function AdventurePackages() {
//   return <h1 className='adventure-packages'>ADVENTURE PACKAGES</h1>;
// }

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MyPricingTable from '../MyPricingTable';


function Home() {
  return (
    
    <>
      <h1>Contact us now to create your own custom group excursion!
        </h1> 
      {/* <Cards /> */}
      <MyPricingTable />
           
    </>
  );
}



export default Home;

