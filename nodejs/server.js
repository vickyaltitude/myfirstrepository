const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
});

server.listen(3000, () => {
  console.log("https server is running successfully on port 3000");
});
