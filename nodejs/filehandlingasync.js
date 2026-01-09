const { read } = require("fs");

let fs = require("fs").promises;

async function readFileAsync() {
  try {
    let data = await fs.readFile("sample.txt", "utf8");
    console.log("File data:", data);
  } catch (err) {
    console.log("Error reading file:", err);
  }
}

async function writeFileAsync() {
  try {
    await fs.writeFile("data.js", "console.log('Hello from data.js');");
    console.log("File written successfully");
  } catch (err) {
    console.log("Error writing file:", err);
  }
}
writeFileAsync();
readFileAsync();
