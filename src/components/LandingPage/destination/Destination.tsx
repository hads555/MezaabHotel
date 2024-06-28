import React from 'react';
import styles from './Destination.module.css';
import Istanbul from '../../assets/images/istumbol.png';
import London from '../../assets/images/lodon.png';
import Bangkok from '../../assets/images/bankok.png';
import Athens from '../../assets/images/athems.png';
import Lumper from '../../assets/images/lumper.png';
import Dubai from '../../assets/images/dubai.png';
import Paris from '../../assets/images/paris.png';

const Destination: React.FC = () => {
    return (
        <div className={`${styles.mainWrapper}`}>
            <div className='container'>
                <div className={`${styles.DestinationWrapper}`}>
                    <h3 className={`${styles.mainText}`}>Popular Destinations</h3>
                    <p className={`${styles.subText}`}> These alluring destinations are picked just for you.</p>

                    <div className={`${styles.destinationContent} d-flex justify-content-between`}>
                        <div className={`${styles.contentBox}`}>
                            <img src={Istanbul} alt='Istanbul' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Istanbul</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                        <div className={`${styles.contentBox}`}>
                        <img src={Bangkok} alt='Bangkok' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Bangkok</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                        <div className={`${styles.contentBox}`}>
                        <img src={Athens} alt='Athens' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Athens</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                        <div className={`${styles.contentBox}`}>
                        <img src={Lumper} alt='Lumper' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Kuala Lumpur</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className={`${styles.destinationContent} d-flex justify-content-between mt-3`}>
                    <div className={`${styles.contentBox}`}>
                    <img src={Dubai} alt='Dubai' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Dubai</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                    <div className={`${styles.contentBox}`}>
                    <img src={London} alt='London' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>London</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                    <div className={`${styles.contentBox}`}>
                    <img src={Paris} alt='Paris' />
                            <div className={`${styles.imgDetails}`}>
                                <h3>Paris</h3>
                                <p>From $40</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destination