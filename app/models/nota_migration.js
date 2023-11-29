const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Nota = sequelize.define("nota", {
    KodeNota: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    TglNota: {
      type: DataTypes.DATE,
    },
    JamNota: {
      type: DataTypes.TIME,
    },
    JumlahBelanja: {
      type: DataTypes.INTEGER,
    },
    Diskon: {
      type: DataTypes.INTEGER,
    },
    Total: {
      type: DataTypes.INTEGER,
    },
  });
  return Nota;
};
