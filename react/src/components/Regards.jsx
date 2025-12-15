const Regards = ({ userData, sendData }) => {
  //data arrived from backend or api
  function getDataFromApi() {
    let data = "this is data from API";
    sendData(data);
  }
  return (
    <div>
      <h2>Hello, {userData.name} How was your day?</h2>
      <button onClick={getDataFromApi}>Click to get data</button>
    </div>
  );
};

export default Regards;
