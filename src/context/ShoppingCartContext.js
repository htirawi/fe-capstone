import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setItemCount(itemCount + 1);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setCartItems(newCartItems);
    setItemCount(itemCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setItemCount(0);
  };

  const contextValue = {
    cartItems,
    itemCount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
