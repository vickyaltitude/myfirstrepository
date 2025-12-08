//Let, var, const
var a = 10;
let b = 20;
const c = 30;

var a = 40; //redeclaring is allowed with var
console.log(a);
//let b = 100; redeclaring is not allowed with let
b = 50; //reassigning is allowed with let
console.log(b);
//const c = 60; //redeclaring or reassigning is not allowed with const
//c = 200;
console.log(c);

const myArray = [2, 3, 4, 5];
const myObj = { name: "sarath", place: "india" };
myObj.name = "divya";
delete myObj.name;
myArray.push(6);
console.log(myObj);
