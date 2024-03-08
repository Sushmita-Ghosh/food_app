const express = require("express");
const User = require("../models/User");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");

router.post("/create-user", upload.single("image"), async (req, res) => {
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("User Already Exists", 400));
  }

  const fileName = req.file.filename;
  const filePath = path.join(fileName);

  const user = await User.create({
    name,
    email,
    password,
    avatar: filePath,
  });

  console.log(user);
});

module.exports = router;
