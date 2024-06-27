import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Facebook from '../../../assets/images/facebook.png';
import Instagram from '../../../assets/images/Instagram.png';
import Twitter from '../../../assets/images/Twitter.png';
import Linkedin from '../../../assets/images/Linkedin.png';
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";


const Footer: React.FC = () => {
    return (
        <div className={`${styles.footerSection}`}>
            <div className='container'>
                <div className={`${styles.topFooter}`}>
                    <div className='row'>
                        <div className='col-3'>
                            <div className={`${styles.contactBox}`}>
                                <div className={`${styles.imgBox}`}>
                                    <img src={Logo} alt='Logo' />
                                </div>
                                <p className={`${styles.mianText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                                <div className={`${styles.numberDetails} mb-3`}>
                                    <div className={`${styles.contactIcon}`}>
                                    <CiMobile4 />
                                    </div>
                                    <p className={styles.numberText}>+12 3 4567 8901</p>
                                </div>
                                <div className={`${styles.numberDetails}`}>
                                    <div className={`${styles.contactIcon}`}>
                                    <MdOutlineMail />
                                    </div>
                                    <p className={styles.numberText}>info@oceanhotel.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.aboutWrapper}`}>
                                <h4 className={`${styles.mainHeading}`}>About</h4>
                                <ul className={`${styles.footerLinksList}`}>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">About Us</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Contact Us</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Destinations</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Blogs</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">FAQ’s</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.aboutWrapper}`}>
                                <h4 className={`${styles.mainHeading}`}>Features</h4>
                                <ul className={`${styles.footerLinksList}`}>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Cheap Flights</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Budget Hotel</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Sign in / Register</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Site map</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.aboutWrapper}`}>
                                <h4 className={`${styles.mainHeading}`}>Company</h4>
                                <ul className={`${styles.footerLinksList}`}>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Terms & Conditions</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Terms of use</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Privacy Policy</Link>
                                    </li>
                                    <li className={`${styles.footerLink}`}>
                                        <Link className={`${styles.linkItems}`} to="/">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
            <div className={`${styles.copyRightSection}`}>
                <div className={`${styles.socialLinks}`}>
                    <Link className={`${styles.Links}`} to="/">
                        <img src={Facebook} alt='facebook' /></Link>
                    <Link className={`${styles.Links}`} to="/">
                        <img src={Twitter} alt='facebook' /></Link>
                    <Link className={`${styles.Links}`} to="/">
                        <img src={Instagram} alt='facebook' /></Link>
                    <Link className={`${styles.Links}`} to="/">
                        <img src={Linkedin} alt='facebook' /></Link>
                </div>
                <p className={styles.copyText}>Copyright 2023, All Rights Reserved by <span className={styles.spanText}>Meezab Group</span></p>
            </div>
        </div>
    )
}

export default Footer