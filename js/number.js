let myNum = 12;
let myNum2 = 12.4;

console.log(typeof myNum2);

//javascript uses 64 bit floating point
let addition = 0.1 + 0.2;
console.log(addition);

//Infinity, -Infinity

//type coercion

let concat = "hasdf" / 6;

// division /, multiplaction *, addition + , subtract - , % Modulus operator

let concattedString = "hello" + " world";

console.log(concat);

let divideNum = 31 % 5;

console.log(divideNum);
console.log(concattedString);
//Number is the object provided by javascript to use number methods
console.log(Number.isInteger(12));

let a = 70;
let b = Number("70");

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = "15";
console.log(Number.parseFloat(c) + Number.parseFloat(c));

let d = 14.345345;
console.log(d.toFixed(2));

//Math methods

let e = 15.5;
console.log(Math.round(e));
console.log(Math.floor(e));
console.log(Math.ceil(e));
console.log(Math.trunc(e));

console.log(Math.max(12, 55, 15, 16, 100));
console.log(Math.min(14, 15, 55, 100, -1));

console.log(Math.pow(5, 3));
console.log(Math.sqrt(49));

//Math.random() will give you random number ranging from 0 to 1 without absolute 0 and absolute 1
let randomNum = Math.trunc(Math.random() * 100 + 1);
console.log(randomNum);
