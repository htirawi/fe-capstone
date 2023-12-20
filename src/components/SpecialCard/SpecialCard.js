import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

import styles from './style.module.css';

const SpecialCard = ({ imageSrc, name: menuName, price, description }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart({ menuName, price, description });
  };

  console.log(`${imageSrc}`, 'aaaa');

  return (
    <article className={styles.specialCard}>
      <img
        src={imageSrc}
        alt={menuName}
        className={styles.cardItemImage}
      />
      <div className={styles.cardItemInfo}>
        <div className={styles.cardItemTitle}>
          <h2>{menuName}</h2>
          <h3>{price}</h3>
        </div>
        <p>{description}</p>
        <button
          className={styles.cardItemButton}
          to="/order"
          onClick={handleAddToCart}
        >
          Add to bag
        </button>
      </div>
    </article>
  );
};

export default SpecialCard;
