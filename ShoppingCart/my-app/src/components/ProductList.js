import React from 'react';
import { formatCurrency } from "../utils/commonUtil";

export const ProductList = ({productList, setProductList}) => {

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...productList];

    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }
    setProductList(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = productList.filter((product, index) => {
      return index !== i;
    });

    setProductList(filteredProduct);
  };

  return (
    <section className="container">
      <ul className="products">
        {productList.map((product, index) => {
          return (
            <li className="row" key={index} data-testid="product-list">
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={product.image} alt={product.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.name}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    data-testid="quantity"
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className="remove">
                  <svg
                    data-testid="remove-button"
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
