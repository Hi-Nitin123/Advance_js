module.exports = (app) => {
  const signUp = require("../controller/Authcontroller");
  app.get("/register", (req, res) => {
    signUp.registerView(req, res);
  });
};
