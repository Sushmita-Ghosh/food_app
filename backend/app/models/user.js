const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  // addresses: [
  //   {
  //     country: {
  //       type: String,
  //     },
  //     city: {
  //       type: String,
  //     },
  //     address1: {
  //       type: String,
  //     },
  //     address2: {
  //       type: String,
  //     },
  //     zipCode: {
  //       type: Number,
  //     },
  //     addressType: {
  //       type: String,
  //     },
  //   },
  // ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    // public_id: {
    //   type: String,
    //   required: true,
    // },
    // url: {
    //   type: String,
    //   required: true,
    // },
    type: String,
    default: "avatar.png",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// hashing password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password -checking whether password is correct or not
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
