const { extractErrors } = require("../helpers/helper");
const mongoose = require("mongoose");
const { User } = require("../models/User");
const { validate } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.json({
        success: false,
        message: error.details[0].message
      });
    //checking if the user already exist
    let userhere = await User.findOne({
      email: req.body.email
    });
    if (userhere)
      return res.json({
        success: false,
        message: "User already exists"
      });
    //creating user
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });

    await user.save();
    //creating jwt
    const token = jwt.sign({
      _id: user._id
    });
    res.header("x-auth-token", token).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      token: token,
      success: true
    });
  } catch (error) {
    console.log(error);
    res.st;
  }
};

module.exports = register;
