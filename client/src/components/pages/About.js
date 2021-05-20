import React from 'react';
import AboutTopContainer from '../AboutTopContainer';
import CardItem from '../CardItem';

function About() {

  return (
    <>
      {/* <AboutTopContainer /> */}
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <AboutTopContainer />
              <CardItem
                src='images//Girl-Tubing-moc.jpg'
                text='Click HERE and Join Our EPIC Adventures!
                SHUSWAPS ULTIMATE WATER ADVENTURE COMPANY
                WAKE SURF - 
                WATER SKI - 
                WAKE BOARD SESSIONS
                PRIVATE BOAT TOURS
                GROUP EVENTS - BIRTHDAY PARTIES
                SUMMER WAKE SURF CAMPS
                5 SESSIONS - BEGINS JULY 5TH'
                label='Adventure'
                path='/watersport-rentals-lessons'
              />
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}




export default About
