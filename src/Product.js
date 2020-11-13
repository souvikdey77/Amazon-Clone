import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__Info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__star">
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL.jpg" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
