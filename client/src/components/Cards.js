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
              text='Click and Experience Our Jaw Dropping Adventure Packages!'
              label='Kneeboarding'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='./images/Joanne-Surf-Smile.jpg'
              text='Click and Experience Our EPIC Watersports!'
              label='Wake Surfing'
              path='/watersport-rentals-lessons'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images//Girl-Tubing-moc.jpg'
              text='Click and Rent Our Water Sport Equipment and Have a Blast!'
              label='Adventure'
              label='Tubing'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Group-with-Raft.jpg'
              text='Click and Experience Our Summer Camps'
              label='Rafting'
              path='/watersport-rentals-lessons'
            />
            <CardItem
              src='images/Jet-Ski-Group.jpg'
              text='Fun and Exciting Water Sport Lessons'
              label='Jet Skis'
              path='/watersport-rentals-lessons'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
