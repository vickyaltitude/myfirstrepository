import React, { useCallback, useState } from "react";

function UseCallback() {
  let [inputVal, setInputVal] = useState("");
  const handleClick = useCallback(() => {
    console.log("handle click");
  }, []);

  return (
    <div>
      <h2>UseCallback</h2>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleClick}>click me</button>
      <UseCallbackChild onClick={handleClick} />
    </div>
  );
}

const UseCallbackChild = React.memo(() => {
  console.log("usecallback child");
  return <div>UseCallbackChild</div>;
});

export default UseCallback;
