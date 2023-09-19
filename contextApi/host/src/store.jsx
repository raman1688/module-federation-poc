import React, { createContext, useContext, useState } from "react";

const initialState = {
  count: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
};

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  const addItem = () => setcount(count + 1);
  const removeItem = () => setcount(count - 1);
  const clearCart = () => setcount(0);
  return (
    <CartContext.Provider
      value={{
        count,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
