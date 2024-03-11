const express = require("express");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { upload } = require("../multer");
const jwt = require("jsonwebtoken");
const sendMail = require("../utlis/sendMail");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendToken = require("../utlis/jwtToken");
const ErrorHandler = require("../utlis/errorHandler");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    // we should delete the file from uploads folder
    const fileName = req.file.filename;
    const filePath = `uploads/${fileName}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Error deleting file",
        });
      }
    });
    return next(new ErrorHandler("User Already Exists", 400));
  }

  const fileName = req.file.filename;
  const filePath = path.join(fileName);

  const user = {
    name,
    email,
    password,
    avatar: filePath,
  };

  // create activation token
  const token = createActivationToken(user);
  //frontend url
  const activationLink = `http://localhost:1234/activate/${token}`;

  try {
    // send mail to user to activate account
    await sendMail({
      email: user.email,
      subject: "Activate Your Account",
      message:
        "Hello " +
        user.name +
        ",\n\n" +
        "Please click the link below to activate your account:\n\n" +
        activationLink,
    });

    //
    res.status(201).json({
      success: true,
      message: `Email sent to ${user.email}. Please check your email and click on the link to activate your account.`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

// activate user
router.post(
  "/activate",
  catchAsyncError(async (req, res, next) => {
    try {
      const { token } = req.body;

      const newUser = jwt.verify(token, process.env.ACTIVATION_TOKEN_SECRET);

      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar } = newUser;

      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }
      user = await User.create({
        name,
        email,
        avatar,
        password,
      });

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login user
router.post(
  "/login-user",
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
      }

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User doesn't exist", 401));
      }

      const isPasswordMatched = await user.comparePassword(password);

      if (!isPasswordMatched) {
        return next(new ErrorHandler("Sorry, Invalid Email or Password", 401));
      }

      sendToken(user, 200, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// load user

router.get(
  "/get-user",
  isAuthenticatedUser,
  catchAsyncError(async (req, res, next) => {
    try {
      // find your user by the id from database from cookies
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(new ErrorHandler("User doesn't exist", 401));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
