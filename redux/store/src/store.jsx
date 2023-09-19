import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 5,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    removeItem: (state) => {
      state.count -= 1
    },
    clearCart: (state, action) => {
      state.count = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions

export const useCart = () => {
    const count = useSelector((state) => state.cart.count);
    const dispatch = useDispatch();
    return ({
        count,
        addItem: () => dispatch(addItem()),
        removeItem: () => dispatch(removeItem()),
        clearCart: () => dispatch(clearCart())
    });
}

export const store = configureStore({
  reducer: {
      cart: cartSlice.reducer
  },
});

export const CartProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)
