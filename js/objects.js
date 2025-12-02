//Objects in javascript

let myObj = {
  "user Name": "vignesh",
  userAge: 20,
  place: "india",
  hobbies: ["chess", "tv", "painting", "coding"],
  address: {
    place: "india",
    street: "gandhi nagar",
  },
};

console.log(myObj);

let anotherObj = new Object();
console.log(anotherObj);

myObj.userAge = 30;

console.log(myObj["hobbies"]);

delete myObj.userAge;

console.log(myObj);

console.log(myObj.address["place"]);
