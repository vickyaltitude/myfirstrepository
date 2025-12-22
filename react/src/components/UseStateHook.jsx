import React from "react";
import { useState } from "react";

function UseStateHook() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Increase Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
    </div>
  );
}

export default UseStateHook;
