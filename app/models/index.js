const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.barang = require("./barang_migration.js")(sequelize, Sequelize);
db.kasir = require("./kasir_migration.js")(sequelize, Sequelize);
db.tenan = require("./tenan_migration.js")(sequelize, Sequelize);
db.nota = require("./nota_migration.js")(sequelize, Sequelize);
db.barangNota = require("./barangNota_migration.js")(sequelize, Sequelize);

/* 
  ========================================
  Relation Nota
  ========================================
*/

db.nota.belongsTo(db.tenan, { foreignKey: "KodeTenan", onDelete: "RESTRICT" });
db.tenan.hasOne(db.nota, { foreignKey: "KodeTenan", onDelete: "RESTRICT" });

db.nota.belongsTo(db.kasir, { foreignKey: "KodeKasir", onDelete: "RESTRICT" });
db.kasir.hasOne(db.nota, { foreignKey: "KodeKasir", onDelete: "RESTRICT" });

/* 
  ========================================
  Relation barang Nota
  ========================================
*/

// Assuming id_nota is the primary key of the nota model
db.barangNota.belongsTo(db.nota, {
  foreignKey: "KodeNota",
  onDelete: "RESTRICT",
});
db.nota.hasOne(db.barangNota, { foreignKey: "KodeNota", onDelete: "RESTRICT" });

db.barangNota.belongsTo(db.barang, {
  foreignKey: "KodeBarang",
  onDelete: "RESTRICT",
});
db.barang.hasMany(db.barangNota, {
  foreignKey: "KodeBarang",
  onDelete: "RESTRICT",
});

module.exports = db;
