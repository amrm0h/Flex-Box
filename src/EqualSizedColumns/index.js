import React from 'react';
import './EqualSizedColumnsStyles.scss';

const texts = [
  "I am small",
  "I have more content than the very small item.",
  "I have lots of content. So much content that I don't know where it is all going to go. I'm glad that CSS is pretty good at dealing with situations where we end up with more words than expected!",
]

const EqualSizedColumns = () => {
  return (
    <>
      <img src="images/equalSizedColumn.png" height={300} alt="" />
      <div className='container'>
        {texts.map(text => (
          <div className='item'>
            {text}
          </div>
        ))}
      </div>
    </>
  )
}

export default EqualSizedColumns;
