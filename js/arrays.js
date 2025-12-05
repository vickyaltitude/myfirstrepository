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
//Map method will return an array with all the elements computed inside the method
let mapExample = [1, 2, 3, 4, 5];

let mutlipliedBy10 = mapExample.map((a) => {
  console.log("This is element from array ==>", a);
  return a * 10;
});
console.log(mutlipliedBy10);

//forEach
//Foreach method will always return undefined
let forEachExample = [23, 14, 5, 7];
forEachExample.forEach((b) => {
  console.log("this is from foreach", b);
});
//console.log(receiveFor);

//filter()
let myArray4 = [12, 15, 20, 51, 63, 25, 30, 35, 19, 29];
let filtered = myArray4.filter((b) => {
  return b > 20;
});
console.log(filtered);

//reduce
let myArray5 = [17, 16, 15, 12, 122, 130];
let answer = myArray5.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);
console.log(answer);

//find
let findExample = [12, 45, 10, 50];
let found = findExample.find((a) => {
  return a >= 45;
});
console.log(found);

//findIndex
let findInd = [17, 16, 15, 12, 122, 130];
let foundInd = findInd.findIndex((a) => {
  return a > 100;
});
console.log(foundInd);

//some
let ages = [12, 15, 18, 9, 2];
let isOver18 = ages.some((a) => {
  return a >= 18;
});
console.log(isOver18);

//every
let voted = ["yes", "yes", "yes", "yes", "yes"];
let checkVote = voted.every((a) => {
  return a === "yes";
});
console.log(checkVote);

// '==' vs '===' .  Triple equal to operator is also called strict operator

let a = 68;
let b = "68";
console.log(a == b);
console.log(a === b);

//flat
let myArray6 = [1, 2, 3, [2, 5, 6, [3, 5, 6]]];
let flatted = myArray6.flat(2);
console.log(flatted);
