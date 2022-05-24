const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("view"));

require("./routes/signUp")(app);
require("./routes/login")(app);
require("./routes/users")(app);

const port = 8000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));

module.exports = app;
