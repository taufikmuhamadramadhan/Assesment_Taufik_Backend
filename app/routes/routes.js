const barang = require("../controllers/barang_controller");
const kasir = require("../controllers/kasir_controller");
const tenan = require("../controllers/tenan_controller");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //API untuk CRUD Barang

  app.get("/api/barang/", barang.findAll);

  app.get("/api/barang/:id", barang.findOne);

  app.post("/api/barang/create", barang.create);

  app.put("/api/barang/update/:id", barang.update);

  app.delete("/api/barang/destroy/:id", barang.delete);

  app.get("/api/tenan/", tenan.findAll);

  app.get("/api/kasir/", kasir.findAll);
};
