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
      <div className='container'>
      <img src="images/tags.png" height={200} width={450} alt="" />
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
