import React, { useState } from "react";
import { useEffect } from "react";

function UseEffectHook() {
  let [count, setCount] = useState(0);
  let [hobbies, setHobbies] = useState(0);
  let [details, setDetails] = useState(0);

  let [mapping, setMapping] = useState(0);

  useEffect(() => {
    console.log("Im useEffect");
  }, [count, hobbies]);

  return (
    <div>
      <h1>UseEffect hook</h1>
      <p>UseEffect hook is used to run sideeffects in react components</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setHobbies(hobbies + 1)}>Increase hobbies</button>
      hobbies - {hobbies}
    </div>
  );
}

export default UseEffectHook;
