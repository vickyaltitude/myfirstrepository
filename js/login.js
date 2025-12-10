let btnSubmit = document.querySelector("#btn");

btnSubmit.addEventListener("click", function (event) {
  console.log(event);
  event.preventDefault();
  console.log("button clicked");
});
