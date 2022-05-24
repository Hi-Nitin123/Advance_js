module.exports = (app) => {
  const login = require("../controller/Authcontroller");
  app.get("/login", (req, res) => {
    login.loginView(req, res);
  });
};
