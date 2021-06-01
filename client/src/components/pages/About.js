import React from 'react';
import AboutTopContainer from '../AboutTopContainer';

function About() {

  return (
    <>
      {/* <AboutTopContainer /> */}
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <AboutTopContainer />
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}




export default About
