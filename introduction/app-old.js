// Express JS is Backend web framework for NodeJS
// node install express --save (for production dependency)

const express = require("express");
const bodyParser = require("body-parser");

const appOld = express();

//Rendering views on server-side
appOld.set("view engine", "ejs");
appOld.set("views", "views");

// First middleware
appOld.use(bodyParser.urlencoded({ extended: false }));

appOld.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  //use next() to tell express not to stop the request here and continue to the next middleware
  next();
});

appOld.use((request, response, next) => {
  let userName = request.body.username || "unknown user";
  response.render("index", {
    user: userName,
  });
});

appOld.listen(3000);
