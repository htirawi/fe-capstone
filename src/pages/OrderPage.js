import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Modal from '../components/Modal/Modal';

const Order = () => {
  const { cartItems, removeFromCart, clearCart } =
    useContext(ShoppingCartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCheckout = () => {
    const orderNumber = generateOrderNumber();
    setModalMessage(
      `Thank you for your order! Your order number is #${orderNumber}.`
    );
    setIsModalOpen(true);
    clearCart();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate('/menu');
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const total = calculateTotal();
  const generateOrderNumber = () => {
    const min = 10000; // Minimum number for a 5-digit order number
    const max = 99999; // Maximum number for a 5-digit order number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className={styles.orderContainer}>
      <h2>Your Order</h2>
      <div className={styles.orderItems}>
        {cartItems.map((item, index) => (
          <div key={index} className={styles.orderItem}>
            <p>
              {item.menuName} - {item.price}
            </p>
            <button
              onClick={() => handleRemoveItem(index)}
              className={styles.orderRemoveButton}
            >
              <img src="/images/trash.svg" alt="remove"></img>
            </button>
          </div>
        ))}
      </div>
      <p>Total: ${total.toFixed(2)}</p>
      <div className={styles.orderButtons}>
        <button onClick={handleContinueShopping} className={styles.orderItem}>
          Continue Shopping
        </button>
        <button onClick={handleCheckout} className={styles.orderItem}>
          Check Out
        </button>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Order;
