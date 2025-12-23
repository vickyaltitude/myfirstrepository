import React, { useEffect, useState } from "react";
//import { useRef } from "react";

function ControlledComponents() {
  /*  let reference = useRef();
let anotherReference = useRef();
  function changeValue() {
    console.log(reference.current.value);
  } */

  let [userName, setUserName] = useState("");

  function onChangeValue(e) {
    setUserName(e.target.value);
  }

  useEffect(() => {
    console.log("im useeffect");
  });

  return (
    <div className="div">
      <h1>Controlled components vs uncontrolled components</h1>
      <input
        /* ref={reference} */ value={userName}
        onChange={onChangeValue}
        type="text"
      />
      <input
        /* ref={anotherReference} */ value={userName}
        onChange={onChangeValue}
        type="text"
      />
      <h2>Uncontrolled components</h2>
      <p>
        When you access the value directly using the dom elements with the help
        of useRef hook that is uncontrolled components.
      </p>
      <button>Click me</button>
      <p>Hello</p>
    </div>
  );
}

export default ControlledComponents;
