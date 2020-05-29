// Express JS is Backend web framework for NodeJS
// node install express --save (for production dependency)

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// First middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  //use next() to tell express not to stop the request here and continue to the next middleware
  next();
});

app.use((request, response, next) => {
  let userName = request.body.username || "unknown user";
  response.send(
    `<h1>Hi ${userName}</h1>` +
      "<form method='post' action='/'>" +
      "<input name='username' type='text'>" +
      "<button type='submit'> Send </button>" +
      "</form>"
  );
});

app.listen(3000);
