import React from "react";

export default ({ count, clearCart }) => (
  <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex mb-10">
    <div class="flex-grow">Awesome Header</div>
    <div>{count}</div>

    <button className="bg-red-400 text-white font-bold py-2 px-4 rounded ml-10" onClick={clearCart}>Clear cart</button>
  </header>
);
