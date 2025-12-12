//Synchronous vs asynchronous javascript

setTimeout(function a() {
  console.log("a");
}, 1000);

setTimeout(function b() {
  console.log("b");
}, 500);

setTimeout(function c() {
  console.log("c");
});

/* setInterval(function () {
  console.log("hello world");
}, 1000); */

function d() {
  console.log("d");
}

d();

function a(func) {
  let num = 0;
  for (let i = 0; i < 10; i++) {
    num++;
  }

  return setTimeout(() => {
    func(num);
  }, 2000);
}

a(function (result) {
  console.log(result);
});

//Promises - resolve and reject and pending

let promise = new Promise(function (resolve, reject) {
  let a = true;

  if (a) {
    resolve("promise resolved successfully");
  } else {
    reject("promise rejected");
  }
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch(() => {
    console.log("promise rejected");
  });
