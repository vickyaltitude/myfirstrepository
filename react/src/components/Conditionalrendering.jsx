import React, { useState } from "react";

function Conditionalrendering() {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  function getData() {
    (async function fetchData() {
      let result = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(result);
      let parsedData = await result.json();
      if (!result.ok) {
        setError("Data failed to fetch or we got nothing from the backend");
      }
      console.log(parsedData);
      if (parsedData.length > 0) {
        setError(null);
        setData(parsedData);
      }
    })();
  }

  return (
    <div>
      <h1>conditionalrendering</h1>
      <button onClick={getData}>Click me to get data</button>
      <ol>
        {data !== null
          ? data.map((element, index) => {
              return (
                <li key={index}>
                  Name = {element.name} , email = {element.email}
                </li>
              );
            })
          : ""}
        {error !== null ? <h3>{error}</h3> : null}
      </ol>
    </div>
  );
}

export default Conditionalrendering;
