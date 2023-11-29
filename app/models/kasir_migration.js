const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Kasir = sequelize.define("kasir", {
    KodeKasir: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Nama: {
      type: DataTypes.STRING,
    },
    HP: {
      type: DataTypes.STRING,
    },
  });
  return Kasir;
};
