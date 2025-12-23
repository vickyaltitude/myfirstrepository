import React from "react";
import { useRef } from "react";

function ControlledComponents() {
  let reference = useRef();

  function changeValue() {
    reference.current.innerText = "hello world";
  }

  return (
    <div className="div">
      <button onClick={changeValue}>Click me</button>
      <p ref={reference}>Hello</p>
    </div>
  );
}

export default ControlledComponents;
