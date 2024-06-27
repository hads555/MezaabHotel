import React from 'react';
import styles from './HotelChain.module.css';
import HotelSlider from '../common/hotelSlider/HotelSlider';

const HotelChains: React.FC = () => {
  return (
    <div className={`${styles.hotelsSection}`}>
      <div className='container'>
        <div className={`${styles.hotelWrapper}`}>
          <h2 className={`${styles.subHeading}`}>
            Chains and Hotels We Are Connected With
          </h2>
          <p className={`${styles.subText} mb-5`}>
            Uncover an expansive array of more than 2,000 directly contracted hotels, supplemented by over 50,000 hotels globally.
          </p>

        </div>
      </div>
      <div className='text-center'>
        <HotelSlider />
        <button className={`btn btn-primary w-100 ${styles.CustomButton}`}>View All</button>
      </div>

    </div>
  )
}

export default HotelChains