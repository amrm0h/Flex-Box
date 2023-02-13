import React from 'react';
import './tagsStyles.scss';

const arTexts = [
  'مغامرات',
  'انيمي',
  'تاريخي',
  'حرب',
  'رياضه',
  'رعب',
  'كوميدي',
  'خيال علمي',
  'فانتازي',
  'جريمه'
];

const enTexts = [
  'Adventure',
  'Anime',
  'Historical',
  'War',
  'Sports',
  'Horror',
  'Comedy',
  'Science fiction',
  'Fantacy',
  'Crime'
];

const MovieTags = () => {
  return (
    <div dir='rtl'>
      <div className='wrapper'>
        <div className="image">صورة الفيلم</div>
        <section className="container">
          <div className='itemsWrapper'>
            {arTexts.map(text => (
              <p className='item'>
                {text}
              </p>
            ))}
          </div>
          <p className='time'>
            <span>المده:</span>
            {' '}
            <span>٥٠ دقيقه</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default MovieTags;
