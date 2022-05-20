const express = require("express");

const login = require("../routes/login");

const signUp = require("../routes/signUp");

const users = require("../routes/users");

const path = require("path");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "../view");

app.use(express.static(staticPath));

app.get("/", signUp);

app.get("/login", login);

app.post("/", users);
const port = 8000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
