import React from "react";

export const ShoppingBagHeader = ({productList}) => {

  const itemCount = productList.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);


  return (
    <header className="container">
      <h2>Shopping Cart</h2>
      <p><span data-testid="item-count">{itemCount}</span> items in the bag</p>
    </header>
  );
};
