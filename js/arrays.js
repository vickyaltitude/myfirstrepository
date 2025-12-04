//Difference between double equal to operator and strict operator (triple equal to operator);

console.log(1 == "1");
console.log(1 === "1");

//Arrays in javascript

//Array is an index based ordered and dynamic data structure in javascript

let myArray = [4, true, "hello", null];
console.log(myArray.length);

//Array methods - push,pop,shift,unshift

//Push inserts element in the last position of the array
myArray.push("abc");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(12);
console.log(myArray);
myArray.shift();
console.log(myArray);

//splice
let myArray2 = [1, 34, 5, "abc", "apple", "orange", true];
console.log(myArray2.length);
myArray2.splice(0, 3, "100", "banana");
console.log(myArray2);

//slice
let myArray3 = [1, 34, 5, "abc", "apple", "orange", true];
console.log(myArray3.slice(3, 6));

//concat
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
console.log(arrayA.concat(arrayB));

//sort
let myNum = [12, 0, 5, -2, 98, 65, 78];
console.log(myNum.sort((a, b) => a - b));

//Higher order function method in array is pending

//map
let mapExample = [1, 2, 3, 4, 5];

let mutlipliedBy10 = mapExample.map((a) => {
  return a * 10;
});
console.log(mutlipliedBy10);
