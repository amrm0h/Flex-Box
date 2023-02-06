import React from 'react';
import createItems from '../Boxes';
import './BasicStyles.scss';

const items = createItems(4);

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