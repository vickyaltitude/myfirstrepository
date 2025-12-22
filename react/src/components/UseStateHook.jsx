import React from "react";
import { useState } from "react";

function UseStateHook() {
  let [details, setDetails] = useState({
    name: "vignesh",
    age: 10,
    place: "india",
  });
  console.log(Object.entries(details));
  return (
    <div>
      <h1>Increase Count</h1>
      <ul>
        {Object.entries(details).map((items, index) => (
          <li key={index}>
            {items[0]}:{items[1]}
          </li>
        ))}
      </ul>
      <button onClick={() => setDetails({ ...details, hobbies: "cooking" })}>
        Add cooking
      </button>
    </div>
  );
}

export default UseStateHook;
