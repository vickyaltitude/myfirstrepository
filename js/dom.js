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

document.querySelector("#ptag").style.color = "blue";
document.querySelector("#ptag").style.backgroundColor = "black";
document.querySelector("#ptag").style.fontSize = "30px";
console.log(document.querySelector("#div").innerHTML);
//console.log(document.querySelector(".remove").classList.remove("remove"));
console.log(document.querySelector("#div").innerHTML);

//setAttribute,getAttribute
console.log(document.querySelector("#ptag").getAttribute("class"));
document.querySelector("#ptag").setAttribute("class", "newclass");
console.log(document.querySelector("#ptag").getAttribute("class"));
document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector("#btn-text").textContent = "Button Clicked!";
});
