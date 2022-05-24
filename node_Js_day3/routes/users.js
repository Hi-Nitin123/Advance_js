module.exports = (app) => {
  const user = require("../controller/Authcontroller");
  app.post("/users", (req, res) => {
    user.users(req, res);
  });
};
