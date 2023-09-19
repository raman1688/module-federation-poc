import React from "react";

import { useCart } from "host/store";

export default () => {
  const { count, clearCart } = useCart();
  return (
  <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex mb-10">
    <div className="flex-grow">Awesome Header</div>
    <div>{count}</div>

    <button className="bg-red-400 text-white font-bold py-2 px-4 rounded ml-10" onClick={clearCart}>Clear cart</button>
  </header>
)};
