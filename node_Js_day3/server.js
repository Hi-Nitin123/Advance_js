const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signUp.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/loggedIn", (req, res) => {
  res.send("Logged in succesfully");
});

app.post("/", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let pswd = req.body.pswd;
  let confirmPassword = req.body.password;
  res.send(
    `firstName: ${firstName} ,lastName: ${lastName} ,email:${email},pswd:${pswd},confirm_password:${confirmPassword}`
  );
});

const port = 8000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
