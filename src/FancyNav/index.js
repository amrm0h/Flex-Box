import React from 'react';
import './FancyNav.scss';

const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];
const icons = [
  '/images/icons/facebook.svg',
  '/images/icons/instagram.svg',
  '/images/icons/linkedin.svg',
  '/images/icons/twitter.svg',
];

const FancyNavBar = () => {
  return (
    <nav className='wrapper'>
      <ul className='container'>
        {items.map((item, index) => (
          <li key={String(index)} className='item'>{item}</li>
        ))}
        {icons.map((icon, index) => (
          <li key={String(index)} className="social">
            <img src={icon} alt="" width={20} height={20} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FancyNavBar;