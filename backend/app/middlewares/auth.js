// some routes are private and some routes are public
// hence we need to check if user is authenticated or not

const errorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
