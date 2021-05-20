import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link, NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/patrik-velich-GRSxyDKtlSM-unsplash.jpg' alt="there is an image here not being displayed" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/sign-up' className='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >

            GET STARTED
        </Button>
        </Link>
        <Link to='/About' className='btn-mobile'>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        {/* onClick={console.log('hey')} src="https://www.youtube.com/embed/s1UBEYBQ4OY" async="" */}
        {/* <script src="https://www.youtube.com/s/desktop/c20c1e6c/jsbin/spf.vflset/spf.js" nonce="WnmGmZI14YHZRTruttRClA" class="js-httpswwwyoutubecomsdesktopc20c1e6cjsbinspfvflsetspfjs"></script> */}
      
          WATCH TRAILER <i className='far fa-play-circle' 
           />
        </Button>
        </Link>
      </div >
    </div >
  );
}

export default HeroSection;
