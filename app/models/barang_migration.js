const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("barang", {
    KodeBarang: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    NamaBarang: {
      type: DataTypes.STRING,
    },
    Satuan: {
      type: DataTypes.STRING,
    },
    HargaSatuan: {
      type: DataTypes.INTEGER,
    },
    Stok: {
      type: DataTypes.INTEGER,
    },
  });
  return Barang;
};
