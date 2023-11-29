const db = require("../models");
const Tenan = db.tenan;

exports.findAll = (req, res) => {
  Tenan.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Prodi.",
      });
    });
};
