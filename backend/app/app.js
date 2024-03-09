const express = require("express");
const ErrorHandler = require("./utlis/errorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const user = require("./controllers/user");
const cors = require("cors");

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}

// routes
app.use("/api/v1/user", user);

// error handler
app.use(ErrorHandler);

module.exports = app;
