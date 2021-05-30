import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Water Adventures!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Kneeboarding.jpg'
              text='Jaw Dropping Adventure Packages!'
              label='Kneeboarding'
              path='/adventure-packages'
            />
            <CardItem
              src='/images\ben-douglas-ODTVdNcrUW0-unsplash.jpg'
              text='Water Surfing Adventures for your whole family! '
              label='Wake Surfing'
              path='/adventure-packages'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images\patrik-velich-GRSxyDKtlSM-unsplash.jpg'
              text='Experience Tubing on Adrenaline!'
              label='Tubing'
              path='/adventure-packages'
            />
            <CardItem
              src='/images\tim-mossholder-z5KNIclCxPM-unsplash.jpg'
              text='Join Us for an EPIC Group Adventure!'
              label='Rafting'
              path='/adventure-packages'
            />
            <CardItem
              src='/images\changhui-lee-WXmilRe_1Jg-unsplash.jpg'
              text='Fun and Exciting Water Sport Lessons'
              label='Jet Skis'
              path='/adventure-packages'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
