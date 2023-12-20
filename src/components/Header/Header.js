import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';

const Header = () => {
  const navigate = useNavigate();
  const handleReservation = () => {
    navigate('/booking');
  };
  return (
    <header className={styles.headerBackground}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1>JHR</h1>
          <h2>Jordan</h2>
          <p>
            The best way to experience our wide collection of Jordanian cuisine
            is to visit JHR. Follow the aromas and choose the most enticing
            dishes to satisfy your palate.
          </p>
          <button onClick={handleReservation} className={styles.headerButton}>
            Reserve a Table
          </button>
        </div>
        <div className={styles.headerImage}>
          <img src="images/jhrResturant.jpeg" alt="jhrResturant"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
