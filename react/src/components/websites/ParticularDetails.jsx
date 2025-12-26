import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ParticularDetails() {
  const [dummyProduct, setDummyProduct] = useState([
    {
      productName: "apple phone",
      price: "$1500",
      warranty: "3 years",
      customerCare: "234234",
    },
    {
      productName: "chocolate",
      price: "$15",
      warranty: "6 months",
      customerCare: "2323434",
    },
    {
      productName: "dresses",
      price: "$280",
      warranty: "unlimited",
      customerCare: "324545",
    },
    {
      productName: "utensils",
      price: "$500",
      warranty: "3 years",
      customerCare: "5364365",
    },
  ]);
  let { productName } = useParams();
  console.log(productName);
  let filteredProduct = dummyProduct.filter((product) => {
    return product.productName === productName;
  });
  console.log(filteredProduct);
  return (
    <div>
      {filteredProduct?.map((product, index) => {
        return (
          <div key={index}>
            <h2>{product.productName}</h2>
            <p>Price - {product.price}</p>
            <p>warranty - {product.warranty}</p>
            <p>customer care - {product.customerCare}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ParticularDetails;
