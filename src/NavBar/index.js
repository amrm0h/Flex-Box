import React from 'react';
import './navBarStyles.scss';

const NavBar = () => {
  return (
    <>
      <nav className='solved'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Products</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      &nbsp;
      &nbsp;
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Products</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
