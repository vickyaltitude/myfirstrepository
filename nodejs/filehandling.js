console.log(__dirname);
console.log(__filename);

let fs = require("fs");

const myName = "vignesh";
const myPlace = "india";
function greet() {
  return "Hello world from backend";
}

fs.writeFileSync("sample.txt", "This is sample text file");
fs.writeFileSync("sample.txt", "This is sample text file");
fs.writeFileSync("sample.txt", "This is sample text file");
fs.appendFileSync("sample.txt", "\nThis is appended text 1");
fs.appendFileSync("sample.txt", "\nThis is appended text 2");
fs.appendFileSync("sample.txt", "\nThis is appended text 3");
fs.appendFileSync("sample.txt", "\nThis is appended text 4");

console.log(fs.readFileSync("sample.txt", "utf8"));

module.exports = {
  myName,
  myPlace,
  greet,
};
