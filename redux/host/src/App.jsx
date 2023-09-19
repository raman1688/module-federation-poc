import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "navbar/Header";

import { CartProvider, useCart } from "store/store";

import "./index.scss";

const App = () => {
  console.log("use cart: ", useCart());
  const { count, addItem, removeItem, clearCart } = useCart();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: host</div>
      <div>{count}</div>
      <button
        onClick={addItem}
        className="bg-indigo-400 text-white font-bold py-2 px-4 rounded mr-10"
      >
        Add Item
      </button>
      <button
        onClick={removeItem}
        className="bg-yellow-400 text-white font-bold py-2 px-4 rounded"
      >
        Remove Item
      </button>
    </div>
  );
};
ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("app")
);
