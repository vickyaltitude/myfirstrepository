import Welcome from "./components/Welcome";
import Regards from "./components/Regards";
import ReactHooks from "./components/ReactHooks";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import { useState } from "react";
import ControlledComponents from "./components/ControlledComponents";
import Conditionalrendering from "./components/Conditionalrendering";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import { Route, Routes } from "react-router-dom";
import Home from "./components/websites/Home";
import Products from "./components/websites/Products";
import AboutUs from "./components/websites/AboutUs";
import Contact from "./components/websites/Contact";
import Navigation from "./components/websites/Navigation";
import ProductDetails from "./components/websites/ProductDetails";

function App() {
  //JSX - Javascript + XML

  //Hooks - special functions prvided by React
  let fruit = "apple";
  let [showComponent, setShowComponent] = useState(false);
  return (
    <>
      {/* <h1>Hello world, This is react js course {fruit}</h1> */}
      {/*  <Welcome />
      <ReactHooks /> */}
      {/* <UseStateHook /> */}
      {/*    <button onClick={() => setShowComponent(!showComponent)}>
        Render component
      </button>
      {showComponent && <UseEffectHook />}
      <ControlledComponents /> */}
      {/* <Conditionalrendering /> */}
      {/* <UseMemo />
      <UseCallback /> */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="details" element={<ProductDetails />} />
        </Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
