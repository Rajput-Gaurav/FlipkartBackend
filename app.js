// main express file:
const express = require("express");
const logger = require("morgan");

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
  next();
});

// mount the routers:
app.use("/mobiles", MobileRouter);

// exports the app:
module.exports = app;
