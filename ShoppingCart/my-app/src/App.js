import React from "react";
import "./App.css";
import { ShoppingBag } from "./components/ShoppingBag";
import { PRODUCTS } from "./data/products";
import { PROMOTIONS } from "./data/promotions";

const App = () => {
  return (
    <div className="App">
      <ShoppingBag productData = {PRODUCTS} promotionsData={PROMOTIONS} />
    </div>
  );
};

export default App;
