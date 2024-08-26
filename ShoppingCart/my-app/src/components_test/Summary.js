import React from "react";
import { formatCurrency } from "../utils/commonUtil";

export const Summary = ({ productList }) => {
  const tax = 5; // tax is fixed value. No need to update this value.

  // TODO : Implement subTotal logic. It is hardcoded for now.
  // 1. subTotal should be the total price of all items in the cart. It should be updated on any change in quantity of products on the page
  const subTotal = 50;
  const total = subTotal + tax;

  return (
    <section className="container">
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};
