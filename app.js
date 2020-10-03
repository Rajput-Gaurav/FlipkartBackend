// main express file:
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// import MobileRouter:
const MobileRouter = require("./routes/mobile-route");

// initialize the express:
const app = express();

// for printing the log:
app.use(logger("dev"));

// use CORS for connect to the frontend:
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS"
  );
  next();
});

// use body-parser for parse the data:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mount the routers:
app.use("/mobiles", MobileRouter);

// exports the app:
module.exports = app;
