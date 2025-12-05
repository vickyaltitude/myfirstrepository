//Ways of doing conditional operations

//1. If,else:
let check = 18;

if (check >= 20) {
  console.log("yes true");
  if (true) {
    if (true) {
    } else {
    }
  } else {
  }
} else if (check >= 10) {
  console.log("yes true it is");
} else if (check >= 10) {
  console.log("yes true it is");
} else if (check >= 10) {
  console.log("yes true it is");
} else if (check >= 10) {
  console.log("yes true it is");
} else {
  console.log("no false");
}

//ternatory operator
let age = 28;

age >= 30
  ? console.log(true)
  : age >= 20
  ? console.log("yes more than 20")
  : console.log(false);

//switch statement

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    console.log("first day of the week");
    break;
  case 2:
    console.log("Tuesday");
    console.log("second day of the week");
    break;
  case 3:
    console.log("wednesday");
    console.log("Third day of the week");
    break;
  default:
    console.log("invalid day");
}
