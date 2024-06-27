// MySlider.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from './HotelSlider.module.css';
import Holiday from '../../../assets/images/Holiday-Inn-Logo.png';
import Sheraton from '../../../assets/images/Sheraton-Logo.png';
import PalmDubai from '../../../assets/images/palm-dubai-logo.png';
import Aloft from '../../../assets/images/aloft-hotels-logo.png';
import Mercure from '../../../assets/images/Mercure-Hotels-Logo.png';

const HotelSlider: React.FC = () => {
  const settings = {
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { src: Holiday, alt: 'Holiday Inn' },
    { src: Sheraton, alt: 'Sheraton' },
    { src: PalmDubai, alt: 'Palm Dubai' },
    { src: Aloft, alt: 'Aloft' },
    { src: Mercure, alt: 'Mercure' },
    { src: Holiday, alt: 'Holiday Inn' },
    { src: Sheraton, alt: 'Sheraton' },
    { src: PalmDubai, alt: 'Palm Dubai' },
    { src: Aloft, alt: 'Aloft' },
    { src: Mercure, alt: 'Mercure' },
  ];

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className={styles.slideCustom}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotelSlider;
