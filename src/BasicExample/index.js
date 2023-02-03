import React from 'react';
import createItems from '../Boxes';
import './BEStyling.scss';

const items = createItems(12);

const BasicExample = () => {
  return (
    <div className="container">
      {items.map(({ name, bg }, index) => (
        <div
          key={String(index)}
          className={`item box box${index + 1}`}
          style={{ backgroundColor: bg }}
        >{name}</div>
      ))}
    </div>
  )
}

export default BasicExample;
