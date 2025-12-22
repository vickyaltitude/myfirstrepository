import Welcome from "./components/Welcome";
import Regards from "./components/Regards";
import ReactHooks from "./components/ReactHooks";
import UseStateHook from "./components/UseStateHook";

function App() {
  //JSX - Javascript + XML

  //Hooks - special functions prvided by React
  let fruit = "apple";
  return (
    <>
      <h1>Hello world, This is react js course {fruit}</h1>
      {/*  <Welcome />
      <ReactHooks /> */}
      <UseStateHook />
    </>
  );
}

export default App;
