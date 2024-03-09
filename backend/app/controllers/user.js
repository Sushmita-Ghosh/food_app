const express = require("express");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { upload } = require("../multer");

router.post("/create-user", upload.single("file"), async (req, res) => {
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
      } else {
        res.json({
          message: "User Already Exists",
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

  // console.log(user);

  const newUser = await User.create(user);

  res.status(201).json({
    success: true,
    newUser,
  });
});

module.exports = router;
