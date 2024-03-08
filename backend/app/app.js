const express = require("express");
const ErrorHandler = require("./utlis/errorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}

// error handler
app.use(ErrorHandler);

module.exports = app;
