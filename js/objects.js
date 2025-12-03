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

/* let myObjFunc1 = {
  myName: "vignesh",
  greet: function () {
    console.log("hello ", this);
  },
};
 */
let myObjFunc2 = {
  myName: "vignesh",
  greet(abc) {
    return abc;
  },
};

let myObjFunc3 = {
  myName: "vignesh",
  greet: () => {
    return this;
  },
};

console.log(myObjFunc2.greet("santhosh"));

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));

//Object.freeze() & Object.seal()

//Object.freeze(myObj);
//Object.freeze() -  This method will freeze the object meaning we cannot add, edit or delete any of its elements.
//Object.seal() - This method will seal the object meaning we can edit but cannot add or delete its elements.
Object.seal(myObj);
delete myObj.place;

console.log(myObj);
