let grandParent = document.querySelector("#grand-parent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

grandParent.addEventListener("click", function (event) {
  console.log("Grand parent clicked");
  console.log(event.target.id);
});

/* parent.addEventListener(
  "click",
  function (event) {
    console.log("parent clicked");
  },
  true
);

child.addEventListener("click", function () {
  console.log("child clicked");
}); */

//event capturing and event trickling is same

//Event delegation is a technique of using event bubbling to handle events at a higher level in the DOM rather than attaching event listeners to individual elements.
