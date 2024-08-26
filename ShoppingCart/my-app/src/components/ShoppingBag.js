import React, { useState } from "react";
import { ShoppingBagHeader } from "./ShoppingBagHeader";
import { ProductList } from "./ProductList";
import { Summary } from "./Summary";

export const ShoppingBag = ({productData, promotionsData}) => {
  const [productList, setProductList] = useState(productData);

  return (
    <div data-testid="shopping-bag">
      <ShoppingBagHeader productList={productList} />
      {productList.length > 0 ? (
        <div>
          <ProductList 
            productList={productList}
            setProductList={setProductList}
          />
          <Summary
            productList={productList}
            promotionsData={promotionsData}
            />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button onClick={() => window.location.reload()}>Shopping now</button>
        </div>
      )}
    </div>
  );
};
