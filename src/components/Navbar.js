import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './fonts.css';

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
          <Link to='/' className='navbar-logo sadgan' onClick={closeMobileMenu}>
          <img src="images/logo2.png" width="150" height="100"/>
            پوشا
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links iranSans' onClick={closeMobileMenu}>
                خانه
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links iranSans'
                onClick={closeMobileMenu}
              >
                محصولات
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links iranSans'
                onClick={closeMobileMenu}
              >
                سبد خرید
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' className='iranSans'>ثبت نام</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
