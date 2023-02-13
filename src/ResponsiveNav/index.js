import React from 'react';
import './responsiveStyles.scss';

const ResponsiveNav = () => {
  return (
    <>
      {/* <img src='/images/navResponsive.png' alt="" width="100%" /> */}
      {/* <hr /> */}
      <ul className="navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </>
  )
}

export default ResponsiveNav;