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

//slice()
let str = "this is slice method";
console.log(str.slice(4, 12));
console.log(str.slice(2));

//substring()
//the difference between substring and slice is substring don't support negative value
let myStr1 = "this is substring";
console.log(myStr1.substring(0, 5));
console.log(myStr1.substring(9));

//replace(),replaceAll()
let repl = "hello world";
console.log(repl.replace("world", "vignesh"));
console.log(repl.replaceAll("hello world", "hi everyone"));

//split()
let spl = "this is split";
console.log(spl.split("s"));

//concat()
let con = "hello";
console.log(con.concat(" world", " hi", " hello"));
console.log(con + " vignesh");

//startswith(),endsWith()
let starts = "filename.js";
console.log(starts.startsWith("fe"));
console.log(starts.endsWith(".js"));

//repeat()
console.log("ha".repeat(4));

//oneline solution to reverse the string in javascript
console.log("this is slice method".split("").reverse().join(""));
