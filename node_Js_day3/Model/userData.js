const { sequelize, DataTypes } = require("../Model/db");

const joi = require("joi");
const User = sequelize.define("User", {
  firstName: { allowNull: false, type: DataTypes.STRING },
  lastName: { allowNull: false, type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  password: { type: DataTypes.STRING, allowNull: false },
  confirmPassword: { type: DataTypes.STRING, allowNull: false },
});

console.log(User === sequelize.models.User);

(async () => {
  await sequelize.sync({ alter: true });
  // Code here
})();
module.exports = User;
