import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function handleOnClick() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleOnClick}>Show products</button>
    </div>
  );
}

export default Home;
