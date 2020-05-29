const express = require("express");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/location");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
});

app.use(locationRoutes);
