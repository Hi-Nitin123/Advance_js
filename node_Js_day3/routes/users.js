module.exports = (app) => {
  const user = require("../controller/Authcontroller");
  app.post("/users", (req, res) => {
    user.user(req, res);
  });
};
