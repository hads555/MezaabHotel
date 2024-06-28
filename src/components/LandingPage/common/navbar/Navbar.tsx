// Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css'; 
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className='container'>
        <Link to="/" className="navbar-brand" >
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.navLink}`} >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.navLink}`} >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.navLink}`}>Contact</Link>
            </li>
            <li className="nav-item">
              <button className={`btn btn-primary ${styles.CustomButton}`}>Partner With Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
