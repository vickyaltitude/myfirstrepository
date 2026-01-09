const http = require("http");
const { myName, myPlace, greet } = require("./filehandling");

const server = http.createServer((request, response) => {
  console.log("Request received:", request.url);
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(`Hello, ${myName} from ${myPlace}! ${greet()}`);
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ name: myName, place: myPlace }));
  }
});

server.listen(3000, () => {
  console.log("https server is running successfully on port 3000");
});
