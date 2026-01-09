const http = require("http");
const { myName, myPlace, greet } = require("./filehandling");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Hello, ${myName} from ${myPlace}! ${greet()}`);
});

server.listen(3000, () => {
  console.log("https server is running successfully on port 3000");
});
