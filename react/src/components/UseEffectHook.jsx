import React, { useState } from "react";
import { useEffect } from "react";

function UseEffectHook() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let setInt = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      clearInterval(setInt);
    };
  }, []);

  return (
    <div>
      <h1>UseEffect hook</h1>
      <p>UseEffect hook is used to run sideeffects in react components</p>
      <p>{count}</p>
      <button>Increase</button>
    </div>
  );
}

export default UseEffectHook;
