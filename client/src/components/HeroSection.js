import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Button.css'
// import { Link, useHistory, Redirect } from 'react-router-dom';
// import Cart from './pages/Cart';
// import HomeScreen from '../shop/screens/HomeScreen';

function HeroSection() {

  return (
    <div className='hero-container'>
      <img src='./images/sagar-thakurdesai-iNaYUA25so0-unsplash.jpg' alt=" " autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Link to='/cart' className='mobile'> */}
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            linkProperty='/watersport-rentals-lessons'
          >
            GET STARTED
        </Button>
        {/* </Link> */}
        {/* <Link to='/about' className='btn-mobile'> */}
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            linkProperty='/about'
          >
          WATCH TRAILER <i className='far fa-play-circle'
            />
          </Button>
        {/* </Link> */}
      </div >
    </div >
  );
}

export default HeroSection;
