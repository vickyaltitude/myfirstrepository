import Welcome from "./components/Welcome";
import Regards from "./components/Regards";
import ReactHooks from "./components/ReactHooks";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import { useState } from "react";

function App() {
  //JSX - Javascript + XML

  //Hooks - special functions prvided by React
  let fruit = "apple";
  let [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <h1>Hello world, This is react js course {fruit}</h1>
      {/*  <Welcome />
      <ReactHooks /> */}
      {/* <UseStateHook /> */}
      <button onClick={() => setShowComponent(!showComponent)}>
        Render component
      </button>
      {showComponent && <UseEffectHook />}
    </>
  );
}

export default App;
