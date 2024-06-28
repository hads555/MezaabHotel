import React from 'react';
import styles from './WhyChoose.module.css';
import WhyChose from '../../assets/images/whychose.png'
import TickFlight from '../../assets/images/ticket-flight.png';
import Insurance from '../../assets/images/insurance.png';
import NoFee from '../../assets/images/no-fee.png';

const WhyChooseUs: React.FC = () => {
    return (
        <div className={`${styles.mainWrapper}`}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <div className={`${styles.leftSideContent} text-center`}>
                            <img className={`${styles.choseImg}`} src={WhyChose} alt='why Choose' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className={`${styles.rightSideContent}`}>
                            <h2 className={`${styles.topHeading}`}>
                                Why Choose Us
                            </h2>
                            <p className={`${styles.subText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>

                            <div className={`${styles.contentBox}`}>
                                <div className={`${styles.flights}`}>
                                    <div className={`${styles.leftImg}`}>
                                        <img src={TickFlight} alt='flight' />
                                    </div>
                                    <div className={`${styles.detailBox}`}>
                                        <h4>Hotel Packages</h4>
                                        <p>Search over a million flights packages, and <br></br> more</p>
                                    </div>
                                </div>
                                <div className={`${styles.flights}`}>
                                    <div className={`${styles.leftImg}`}>
                                        <img src={Insurance} alt='Insurance' />
                                    </div>
                                    <div className={`${styles.detailBox}`}>
                                        <h4>Secure Incredible Value</h4>
                                        <p>Secure incredible value with Best Price <br></br> Guarantee.</p>
                                    </div>
                                </div>
                                <div className={`${styles.flights}`}>
                                    <div className={`${styles.leftImg}`}>
                                        <img src={NoFee} alt='No Fee' />
                                    </div>
                                    <div className={`${styles.detailBox}`}>
                                        <h4>No Cancellation Fee</h4>
                                        <p>No Travel cancellation fee to change or cancel almost <br></br>any hotel reservation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyChooseUs