import { useState } from "react";

function App() {
  const [count, setCount] = useState("vicky");
  let name = { name: "vignesh", anotherName: "kumar" };

  //JSX - Javascript + XML

  //Hooks - special functions prvided by React
  return (
    <div>
      <h1>Hello world, {name.anotherName}</h1>
    </div>
  );
}

export default App;
