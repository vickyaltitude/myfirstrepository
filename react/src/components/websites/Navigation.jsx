import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div
      style={{ padding: "10px", margin: "5px", display: "flex", gap: "1rem" }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/contact"}>Contact us</Link>
      <Link to={"/aboutus"}>About us</Link>
    </div>
  );
}

export default Navigation;
