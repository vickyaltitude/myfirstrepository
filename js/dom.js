//DOM
console.log(document);
console.log(document.getElementById("ptag"));
console.log(document.getElementsByClassName("select"));
console.log(document.getElementsByTagName("p"));

//selector

console.log(document.querySelector("#ptag"));
console.log(document.querySelectorAll(".select"));

//Inner text vs text Content
console.log(document.querySelector("#ptag").textContent); //preferable
console.log(document.querySelector("#ptag").innerText); //wont show output if visibilty is hidden

document.querySelector("#ptag").textContent = "The text is modified";

//innerHTML
console.log(document.querySelector("#div").innerHTML);
/* document.querySelector("#div").innerHTML =
  '<h2 style="color:red">Heading added using innerHTML</h2><h2 style="color:red">Heading added using innerHTML</h2>'; */

//style
let ptag = document.querySelector("#ptag");
ptag.style.color = "blue";
ptag.style.backgroundColor = "black";
ptag.style.fontSize = "30px";
console.log(document.querySelector("#div").innerHTML);
//console.log(document.querySelector(".remove").classList.remove("remove"));
console.log(document.querySelector("#div").innerHTML);

//setAttribute,getAttribute
console.log(document.querySelector("#ptag").getAttribute("class"));
document.querySelector("#ptag").setAttribute("class", "newclass");
console.log(document.querySelector("#ptag").getAttribute("class"));

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let btnText = document.querySelector("#btn-text");
  btnText.textContent = "Button Clicked!";
});

let mouseover = document.querySelector("#mouseover");
mouseover.addEventListener("mouseover", function () {
  mouseover.style.color = "red";
  mouseover.style.backgroundColor = "black";
});

mouseover.addEventListener("mouseout", function () {
  mouseover.style.color = "black";
  mouseover.style.backgroundColor = "white";
});

//createElement, appendChild, removeChild

let newElement = document.createElement("ul");
let firstChild = document.createElement("li");
let secondChild = document.createElement("li");
let thirdChild = document.createElement("li");
let fourthChild = document.createElement("li");

firstChild.textContent = "HTML";
secondChild.textContent = "CSS";
thirdChild.textContent = "JS";
fourthChild.textContent = "ReactJS";

let body = document.querySelector("body");
body.appendChild(newElement);
newElement.appendChild(firstChild);
newElement.appendChild(secondChild);
newElement.appendChild(thirdChild);
newElement.appendChild(fourthChild);

/* firstChild.style.color = "red";
secondChild.style.color = "blue";
thirdChild.style.color = "green";
fourthChild.style.color = "purple"; */

//Loop to style li elements

let liElements = document.querySelectorAll("li");

for (let i = 0; i < liElements.length; i++) {
  liElements[i].style.color = "orange";
}

//style by selecting nth child;
console.log(liElements[0]);

console.log(newElement.children[0]);

console.log(btn.nextElementSibling);
console.log(btn.previousElementSibling);
console.log(btn.parentElement);
console.log(newElement.childNodes);
console.log(newElement.children);
