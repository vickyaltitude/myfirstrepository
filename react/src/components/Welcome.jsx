import Info from "./Info";
import Regards from "./Regards";
//props - properties - used to pass data from one component to another component
//Ways to pass data 1. Parent to child 2. child to parent 3. between siblings
//Lifting the state up - Moving the data to common parent component
//Props usually is an object

function Welcome() {
  let info = { name: "vignesh", place: "pondicherry" };

  function getDataFromChild(data) {
    console.log("Data from child:", data);
  }

  return (
    <div>
      <h1>Hello world, {info.name}</h1>
      <Regards userData={info} sendData={getDataFromChild} />
      <Info userData={info} />
    </div>
  );
}

export default Welcome;
