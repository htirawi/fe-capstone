import { useState } from 'react';

import cx from 'classnames';
import styles from './style.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <button
          onClick={goToPrevious}
          className={cx(styles.carouselButton, styles.prevButton)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left"
            viewBox="0 0 16 16"
          >
            <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
          </svg>
        </button>
        <img
          src={images[currentIndex]}
          alt="Restaurant"
          className={styles.carouselImage}
        />
        <button
          onClick={goToNext}
          className={cx(styles.carouselButton, styles.nextButton)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right"
            viewBox="0 0 16 16"
          >
            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
          </svg>
        </button>
        <div className={styles.carouselContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.carouselDot} ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
