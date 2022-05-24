const User = require("../Model/userData");

const db = require("../Model/db");

const bcrypt = require("bcrypt");

const registerView = (req, res) => {
  res.redirect("/signUp.html");
};

const loginView = (req, res) => {
  res.redirect("/login.html");
};

const user = async (req, res) => {
  const password = request.body.pswd;
  const confirmPassword = request.body.password;

  return await User.create({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: await bcrypt.hash(password, 10),
    confirmPassword: await bcrypt.hash(confirmPassword, 10),
  });
};

module.exports = { registerView, loginView, user };
