const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>hello There !</h1>");
  res.end();
});

server.listen(3000);
