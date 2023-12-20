import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

// import logo from '../../assets/images/logo.svg';
import styles from './style.module.css';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className={styles.navContainer}>
      <img className={styles.navLogo} src="/images/logo.svg" alt="little lemon logo" />
      <div className={`${styles.navLinks} ${isMenuVisible ? 'active' : ''}`}>
        <Link to="/" className={styles.navItems} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/menu" className={styles.navItems} onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/about" className={styles.navItems} onClick={toggleMenu}>
          About
        </Link>
        <Link to="/booking" className={styles.navItems} onClick={toggleMenu}>
          Booking
        </Link>
        <Link to="/login" className={styles.navItems} onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/order" className={styles.navItems} onClick={toggleMenu}>
          <Cart />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
