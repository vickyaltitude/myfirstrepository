console.log("vignesh");
//string methods

let newVar = "hello world"; //--> by single quotation
let upperC = "THIS IS UPPERCASE";
let secVar = "hi all"; //--> by double quotation
let myName = "vignesh";
let tempLit = `My name is ${myName}`; //--> Template literals
console.log(tempLit);

//length
console.log(newVar.length);

//charAt
console.log(newVar.charAt(0));
console.log(newVar[0]);

//toUpperCase() and toLowerCase()
console.log(newVar.toUpperCase());
console.log(upperC.toLowerCase());

//trim(),trimStart(),trimEnd();

let trimText = "     fruits   ";
let trimS = "     fruits";
let trimE = "fruits   ";
console.log(trimText.trim());
console.log(trimS.trimStart());
console.log(trimE.trimEnd());

//includes()
let incl = "we are learning javascript string methods";
console.log(incl.includes("ript str"));

//indexOf(),lastIndexOf()

let indO = "this is indexof method";

console.log(indO.indexOf("h"));
console.log(indO.lastIndexOf("h"));
