// some routes are private and some routes are public
// hence we need to check if user is authenticated or not

const ErrorHandler = require("../utlis/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  // verify token
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

  console.log(decodedToken);

  req.user = await User.findById(decodedToken.id);

  next();
});
