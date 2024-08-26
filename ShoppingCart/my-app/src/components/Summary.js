import React, {useEffect, useState} from "react";
import { formatCurrency } from "../utils/commonUtil";

export const Summary = ({ productList }) => {
  const tax = 5; // assume tax to be constatnt. Do not update this value.
  const subTotal = productList.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
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
