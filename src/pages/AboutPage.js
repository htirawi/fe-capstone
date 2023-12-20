import styles from './style.module.css';

import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';

const images = [
  '/images/chef2.jpeg',
  '/images/chef1.jpeg',
  '/images/chef3.jpeg',
  '/images/chef4.jpeg',
];

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <h1>JHR Restaurant</h1>

        <section className={styles.aboutSection}>
          <h2>The Journey Begins</h2>
          <p>
            Jordan Heritage embarked on documenting the Jordanian cuisine not
            knowing that the five year journey will hold 95 dishes and 11
            distinct flavors, reflecting the diversity and richness of the
            Jordanian cultural and geo-climatic landscapes. To stay true to the
            heritage authenticity, to empower women-owned micro business and to
            contribute to economic decentralization, JHR sources all of its key
            ingredients from women-owned home-based businesses in 9 different
            governorates.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Experience the Jordanian Heritage with every bite !</h2>
          <p>
            Every dish tells the story of a region, town or a distinct side of
            Jordan’s many cultural groups. It’s a bit of Jordan on a plate… A
            bit of Jordan in every bite!
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>AL M'AZEB</h2>
          <p>
            JHR recruits from 6 different governorates and calls each one Al
            M’azeb; a concept that embodies the Jordanian unique hospitality
            traditions that spanned thousands of years with five-star
            international standards mixing the best of both worlds!
          </p>
        </section>
      </div>
      <Carousel images={images} />
    </>
  );
};

export default AboutPage;
