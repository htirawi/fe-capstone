import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

// import basket from '../../assets/images/basket.svg';
import styles from './style.module.css';

const Cart = () => {
  const { itemCount } = useContext(ShoppingCartContext);

  return (
    <div className={styles.cartIcon}>
      <img src="/images/basket.svg" alt="Cart" />
      {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
    </div>
  );
};

export default Cart;
