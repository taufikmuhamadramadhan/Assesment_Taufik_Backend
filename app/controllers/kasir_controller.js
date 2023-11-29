const db = require("../models");
const Kasir = db.kasir;

exports.findAll = (req, res) => {
  Kasir.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Prodi.",
      });
    });
};
