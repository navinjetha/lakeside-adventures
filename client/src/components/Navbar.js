import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Lakeside Adventures
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}>
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/watersport-rentals-lessons'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Watersport Rentals & Lessons
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/adventure-packages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Adventure Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/summer-camp'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Summer Camp
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/boattours-watertaxi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Boat Tours/Water Taxi
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/booking'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Booking
              </Link>
            </li> */}
            <li>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
