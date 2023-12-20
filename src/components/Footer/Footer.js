import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Find Us:</h3>
          <ul>
            <li>Amman – Jabal Al-Weibdeh, Al-Farazdaq Street,</li>
            <li>Phone: (962) 77 77 33 0 33</li>
            <li>Email: info@jordanheritage.jo</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/heritagejhr">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/heritagejhr">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com/heritagejhr">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} JHR Restaurant | Designed by Hussein
        Tirawi
      </div>
    </footer>
  );
};

export default Footer;
