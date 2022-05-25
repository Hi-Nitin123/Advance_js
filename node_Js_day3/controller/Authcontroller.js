const User = require("../Model/userData");

const joi = require("@hapi/joi");

const bcrypt = require("bcrypt");

const registerView = (req, res) => {
  res.redirect("/signUp.html");
};

const loginView = (req, res) => {
  res.redirect("/login.html");
};

const user = async (request, response) => {
  const password = request.body.pswd;
  const confirmPassword = request.body.password;

  const schema = joi.object().keys({
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    confirmPassword: joi.ref("password"),
  });

  var usr = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: await bcrypt.hash(password, 10),
    confirmPassword: await bcrypt.hash(confirmPassword, 10),
  };

  try {
    const value = await schema.validateAsync(request.body);
    console.log(value);
    created_user = await User.create(usr);
    console.log("here-------------------------------------");
    response.status(201).json(created_user);
  } catch (err) {}
};

module.exports = { registerView, loginView, user };
