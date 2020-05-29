// Express JS is Backend web framework for NodeJS
// node install express --save (for production dependency)

const express = require("express");

const app = express();

// First middleware
app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  //use next() to tell express not to stop the request here and continue to the next middleware
  next();
});

//second middleware
app.use((request, response, next) => {
  response.send("<h1>Hello world !</h1>");
});

app.listen(3000);
