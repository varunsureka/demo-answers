import React from "react";

export const ShoppingBagHeader = ({productList}) => {

  // TODO : Implement the itemCount logic. Currently it is hardcoded to 3.
  // 1. itemCount should be the total quantity of items in the cart. 
  const itemCount = 3;

  return (
    <header className="container">
      <h2>Shopping Cart</h2>
      <p><span data-testid="item-count">{itemCount}</span> items in the bag</p>
    </header>
  );
};
