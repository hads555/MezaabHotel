import React from 'react';
import styles from './Banner.module.css';
import CustomInput from '../common/customInput/CustomInput';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    return (
        <div className={`${styles.bannerWrapper}`}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <div className={`${styles.leftContent}`}>
                            <h1 className={`${styles.mainHeading}`}>
                                Best Hotel Booking Platform
                            </h1>
                            <p className={`${styles.subText}`}>
                                Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world.
                            </p>
                            <button className={`btn btn-primary ${styles.CustomButton}`}>Partner With Us</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className={`${styles.rightContent}`}>
                            <form className={`${styles.formLogin}`}>
                                <p className={`${styles.topText}`}>Agent Login</p>
                                <div>
                                    <CustomInput className='mb-4' type="text" label="Email" placeholder="johndoe@email.com" />
                                    <CustomInput type="password" label="Password" placeholder="*********" />
                                    <Link to="" className={`${styles.forgetText}`}>Forgot Password?</Link>
                                </div>
                                <Link to="/login">
                                <button className={`btn btn-primary w-100 ${styles.CustomButton}`}>Continue</button>
                                </Link>
                                

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Banner