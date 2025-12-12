//async - await

let clickBtn = document.querySelector("#clickbtn");

clickBtn.addEventListener("click", function () {
  fetchData();
});

//using promise

function fetchData() {
  let getData = new Promise((resolve, reject) => {
    let getData = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(getData);
    return getData ? resolve(getData) : reject("error fetching data");
  });
  console.log(getData);
  getData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let lists = document.querySelector("#lists");
      lists.innerHTML = "";
      let formatResponse = data;
      formatResponse.forEach((post) => {
        let listItem = document.createElement("li");
        listItem.textContent = `Title: ${post.title} - Body: ${post.body}`;
        lists.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

/* async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let formatResponse = await response.json();
  console.log(formatResponse);
  let lists = document.querySelector("#lists");
  lists.innerHTML = "";

  formatResponse.forEach((post) => {
    let listItem = document.createElement("li");
    listItem.textContent = `Title: ${post.title} - Body: ${post.body}`;
    lists.appendChild(listItem);
  });
}
 */
