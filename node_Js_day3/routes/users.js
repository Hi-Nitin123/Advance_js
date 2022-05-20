const User = require("../Model/userData");

const bcrypt = require("bcrypt");

const joi = require("joi");

module.exports = async function (request, response) {
  const password = request.body.pswd;
  const confirmPassword = request.body.password;

  if (password === confirmPassword) {
    return await User.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: await bcrypt.hash(password, 10),
      confirmPassword: await bcrypt.hash(confirmPassword, 10),
    });
  } else {
    response.send("Passwords do not match");
  }
};
