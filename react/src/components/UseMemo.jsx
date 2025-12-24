import React, { useState, useMemo } from "react";

function UseMemo() {
  let [count, setCount] = useState(0);
  let [inputVal, setInputVal] = useState("");
  //memoization
  function calculateSum(num) {
    console.log("inside calculateSum function");
    for (let i = 0; i < 1000000; i++) {
      num++;
    }
    return num;
  }

  let result = useMemo(() => {
    return calculateSum(count);
  }, [count]);
  return (
    <div>
      <h1>Usememo</h1>
      <h3>{result}</h3>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => setCount(count++)}>increase count by 1</button>
    </div>
  );
}

export default UseMemo;
