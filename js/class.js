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
//console.log(student1.tellAge());
/* console.log(student2);
console.log(student3);
console.log(student4); */

//Class example

let person1Obj = {
  name: "abcd",
  accountNumber: 3242135,
  initialAmount: 1000,
  place: "chennai",
};

class CanadaBank {
  constructor(name, accountNumber, initialAmount, place) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.initialAmount = initialAmount;
    this.place = place;
  }
  checkBalance() {
    return `Hello ${this.name}, happy day!  Your account balance is ${this.initialAmount}`;
  }
  moneyDeposit(depositAmount) {
    this.initialAmount = this.initialAmount + depositAmount;
    return `Hey ${this.name}, your money successfully deposited and the new balance is ${this.initialAmount}`;
  }
  withdrawMoney(withdrawAmount) {
    this.initialAmount = this.initialAmount - withdrawAmount;
    return `Hey ${this.name}, money debited successfully and your new balance is ${this.initialAmount}`;
  }
}

let person1 = new CanadaBank("priya", 25425425, 2000, "chennai");
let person2 = new CanadaBank("akbar", 24546734, 3000, "cbe");
let person3 = new CanadaBank("divya", 87654321, 5000, "madurai");
console.log(person1.moneyDeposit(5000));
console.log(person1.checkBalance());
console.log(person1.withdrawMoney(1000));
console.log(person1.checkBalance());
//console.log(person2.checkBalance());
//console.log(person3.checkBalance());
