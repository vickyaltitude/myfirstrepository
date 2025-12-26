import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      {" "}
      <h1>Products</h1>
      <p>Click below link to see products details</p>
      <Link to="details">Product details</Link>
      <Outlet />
    </div>
  );
}

export default Products;
