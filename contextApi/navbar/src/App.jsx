import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import { CartProvider } from "host/store";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: navigation</div>
  </div>
);
ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("app")
);
