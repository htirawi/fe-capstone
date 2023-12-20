import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

import styles from './style.module.css';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className={styles.navContainer}>
      <Link to="/">
        <img
          className={styles.navLogo}
          src="/images/logo.svg"
          alt="little lemon logo"
        />
      </Link>

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
        <Link
          to="/reservation"
          className={styles.navItems}
          onClick={toggleMenu}
        >
          Reservation
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
