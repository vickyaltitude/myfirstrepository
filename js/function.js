//functions
//Named function
function toMakeWordCapitalAndTrim(userInput) {
  let result = userInput.trim();
  result = result.toUpperCase();
  return result;
}
console.log(toMakeWordCapitalAndTrim("  vignesh  "));

//Ways of creating functions
//function expression
let addTwoNums = function (a, b) {
  return a + b;
};

console.log(addTwoNums(10, 20));

//ES6
//Using fat arrow function
let subtractTwoNums = (a, b) => {
  return a - b;
};
console.log(subtractTwoNums(50, 10));

//using fat arrow and single line
let multiplyTwoNums = (a, b) => a * b;

console.log(multiplyTwoNums(20, 10));

//default parameters
function printName(name = "student") {
  return name;
}
console.log(printName());

//callback function

function greet(userName) {
  return `hello ${userName}, how you doing?`;
}

function process(callback) {
  return callback("divya");
}

console.log(process(greet));

//Higher order functions -  Function should accept function itself as an argument or returns a function

function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

let multiplyBy10 = createMultiplier(10, 20);

console.log(multiplyBy10(20));

//IIFE - Immediately Invoke Function Expression;
(function myFunc2() {
  console.log("hello world");
})();

//Rest parameters
function restExample(...a) {
  return a;
}
console.log(restExample(10, 20, 30, 40, 100));

//Functions in javascript called as first class citizen
//We can pass function as an argument and also we can return function itself from antoher function.  For these reasons we call function as a first class citizen
if (true) {
  var y = 100;
}
console.log(y);

function Function() {
  var x = 10;

  return x;
}
//console.log(x);
let ans = Function();
//console.log(outerFunction());

//Closures - lexical scope

function outer() {
  let count = 0;
  return function inner() {
    count = count + 1;
    return count;
  };
}

let closureOutput = outer();
console.log(closureOutput());
console.log(closureOutput());
console.log(closureOutput());
