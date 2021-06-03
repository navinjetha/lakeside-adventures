import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import AuthService from "../services/auth.service";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let user = AuthService.getCurrentUser()

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

  const history = useHistory();

  const onClickLogin = () => {
    history.push("/login");
    window.location.reload();
  }

  const onClickLogout = () => {
    user = null;
    AuthService.logout()
    history.push("/");
    window.location.reload();
  }

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
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}>
                About
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
            {/* <li className='nav-item'>
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
            </li> */}
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
                to='/Cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >

                {button && !user && <Button buttonStyle='btn--outline' onClick={onClickLogin}>SIGN IN</Button>}
                {button && user && <Button buttonStyle='btn--outline' onClick={onClickLogout}>LOG OUT</Button>}
              </Link>
            </li>
          </ul>
          {/* {button && !user && <Button buttonStyle='btn--outline' onClick={onClickLogin}>SIGN IN</Button>} */}
          {/* {button && user && <Button buttonStyle='btn--outline' onClick={onClickLogout}>LOG OUT</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
