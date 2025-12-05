//Loops in javascript - for loop, while loop, do while loop
//for loop
//we can either give i = i + 1 or i++
for (let i = 1; i <= 10; i = i + 2) {
  console.log(i);
}

//while loop
let a = 1;
while (a <= 10) {
  console.log(a);
  a = a + 1;
}

let i = 1;

do {
  console.log(i);
  i = i + 1;
} while (i == 5);
