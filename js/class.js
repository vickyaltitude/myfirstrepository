//Class is a blueprint to create an object in javascript
class Student {
  static schoolName = "ABC hr secondary school";

  #age;

  constructor(name, age, place, address) {
    this.name = name;
    this.#age = age;
    this.place = place;
    this.address = address;
  }

  tellAge() {
    return this.#age;
  }

  greet() {
    return `Hello ${this.name}, from ${this.place},${this.address} welcome to our academy`;
  }
}

let student1 = new Student("senthil", 25, "india", "chennai");
let student2 = new Student("karthik", 26, "india", "pondy");
let student3 = new Student("deepa", 28, "india", "cbe");
let student4 = new Student("siva", 22, "india", "banglore");
//console.log(Student.schoolName);
console.log(student1.tellAge());
/* console.log(student2);
console.log(student3);
console.log(student4); */
