import React from 'react';
import styles from './HolyLands.module.css';

const HolyLands: React.FC = () => {
  return (
    <div className={`${styles.mainWrapper}`}>
        <div className='container'>
            <div className={`${styles.contentBox} text-center`}>
<h1 className={`${styles.topHeading}`}>Explore More Hotels
At Holy Land</h1>
<button className={`btn btn-primary w-100 ${styles.CustomButton}`}>Explore More</button>
            </div>

        </div>

    </div>
  )
}

export default HolyLands