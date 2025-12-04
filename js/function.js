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
