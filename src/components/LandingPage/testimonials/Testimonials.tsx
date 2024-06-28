import React from 'react';
import styles from './Testimonials.module.css';
import Slider from 'react-slick';
import Star from  '../../assets/images/rating.png';

const Testimonials: React.FC = () => {
    const settings = {
        dots: true,
        // centerMode: true,
        // infinite: true,
        // speed: 500,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3, // Show 6 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
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
    return (
        <div className={`${styles.testimonialSection}`}>
            <div className='container'>
                <div className={`${styles.testWrapper}`}>
                    <h2 className={`${styles.testHeading}`}>What People Say About Us!</h2>

                    <div className={styles.sliderWrapper}>
                        <Slider {...settings}>
<div>
    <div className={`${styles.customSlider}`}>
<h3 className={`${styles.slideHeading}`}>Kevin Lawrence</h3>
<p className={`${styles.addresText}`}>Tripworld LLC, USA</p>
<p className={`${styles.reviewText}`}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
</p>
<div className={`${styles.ratingStar} d-flex align-items-center justify-content-start`}>
<img className='me-1' src={Star} alt='Star' />
<img className='me-1' src={Star} alt='Star' />
<img className='me-1' src={Star} alt='Star' />
<img className='me-1' src={Star} alt='Star' />
<img className='me-1' src={Star} alt='Star' />
</div>
<p className={`${styles.googleReview}`}>Google Review</p>
    </div>
</div>
<div>
    lkdsf
</div>
<div>
    lkdsf
</div>
<div>
    lkdsf
</div>
<div>
    lkdsf
</div>
<div>
    lkdsf
</div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials