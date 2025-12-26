import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ProductDetails() {
  const [dummyProduct, setDummyProduct] = useState([
    {
      productName: "apple phone",
    },
    {
      productName: "chocolate",
    },
    {
      productName: "dresses",
    },
    {
      productName: "utensils",
    },
  ]);
  return (
    <div>
      <h3>Product details</h3>
      <div>
        <ol>
          {dummyProduct.map((product, index) => {
            return (
              <li key={index}>
                {product.productName} -{" "}
                <Link to={`${product.productName}`}>
                  Click to see {product.productName} details
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
      <Outlet />
    </div>
  );
}

export default ProductDetails;
