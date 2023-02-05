import React from 'react';
import './ProductsGallaryStyles.scss';

const items = [
  { src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg", alt: "Interesting living room light through a window" },
  { src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg", alt: "Sara on a red bike" },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg", alt: "XOXO venue in between talks"
  },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg", alt: "Trees lit by green light during dusk"
  },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg", alt: "Portrait of Justin Pervorse"
  },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg", alt: "Empty bike racks outside a hotel"
  },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg", alt: "Heavy rain on an intersection"
  },
  {
    src: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05544_aczrb9.jpg", alt: "Portland skyline sunset"
  }
];

const ProductsGallary = () => {
  return (
    <ul className="container">
      {items.map(({ src, alt }, index) => (
        <li className='item' key={String(index)}>
          <img src={src} alt={alt} loading="lazy" />
          <section>
            <h2>{`Item ${index + 1}`}</h2>
            <p>{`Description # ${index + 1}`}</p>
            <button type="button">
              Show
            </button>
          </section>
        </li>
      ))}
    </ul>
  );
}

export default ProductsGallary;
