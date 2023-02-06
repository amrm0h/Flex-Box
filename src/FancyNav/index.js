import React from 'react';
import './FancyNav.scss';

const items = ['item 1', 'item 1', 'item 1', 'item 1'];
const icons = [
  '/images/icons/facebook.svg',
  '/images/icons/instagram.svg',
  '/images/icons/linkedin.svg',
  '/images/icons/twitter.svg',
];

const FancyNavBar = () => {
  return (
    <div className='wrapper'>
      <ul className='container'>
        {items.map((item, index) => (
          <li key={String(index)} className='item'>{item}</li>
        ))}
        <li className='socials'>
          {icons.map((icon, index) => (
            <span key={String(index)}>
              <img src={icon} alt="" width={20} height={20} />
            </span>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default FancyNavBar;