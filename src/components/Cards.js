import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Water Sports!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Kneeboarding.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Jet-Ski-Group.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Jet-Ski-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Group-with-Raft.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Jet-Ski-Group.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/watersport-rentals-lessons'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
