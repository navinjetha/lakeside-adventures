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
              text='Kneeboarding'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Jet-Ski-Group.jpg'
              text='Jet ski'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Jet-Ski-1.jpg'
              text='More jet ski'
              label='Mystery'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Group-with-Raft.jpg'
              text='Lake toys'
              label='Adventure'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Jet-Ski-Group.jpg'
              text='More jet ski'
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
