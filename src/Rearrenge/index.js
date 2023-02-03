import React from 'react';
import './tagsStyles.scss';

const texts = [
  'Turnip',
  'greens',
  'yarrow',
  'ricebean',
  'rutabag',
  'endive',
  'cauliflower',
  'sea lettuce',
  'kohlrabi',
  'amaranth'
]

const Rearrenged = () => {
  return (
    <>
      <img src="images/tags.png" height={200} width="100%" alt="" />
      <div className='container'>
        {texts.map(text => (
          <p className='item'>
            {text}
          </p>
        ))}
      </div>
    </>
  )
}

export default Rearrenged;
