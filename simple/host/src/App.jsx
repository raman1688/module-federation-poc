import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "navbar/Header";

import "./index.scss";

const App = () => {
  const [count, setcount] = useState(0);
  const addItem = () => setcount(count+1);
  const removeItem = () => setcount(count-1);
  const clearCart = () => setcount(0);
  return (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header count={count} clearCart={clearCart} />
    <div>Name: host</div>
    <div>{count}</div>
    <button onClick={addItem} className="bg-indigo-400 text-white font-bold py-2 px-4 rounded mr-10">Add Item</button>
    <button onClick={removeItem} className="bg-yellow-400 text-white font-bold py-2 px-4 rounded">Remove Item</button>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
