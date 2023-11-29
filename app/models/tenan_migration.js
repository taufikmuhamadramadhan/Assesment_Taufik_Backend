const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tenan = sequelize.define("tenan", {
    KodeTenan: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    NamaTenan: {
      type: DataTypes.STRING,
    },
    HP: {
      type: DataTypes.STRING,
    },
  });
  return Tenan;
};
