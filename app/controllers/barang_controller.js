const db = require("../models");
const BarangModel = db.barang; // Use a different variable name for the model
const nim = "221511065";
const nama = "Taufik MR";

exports.create = async (req, res) => {
  try {
    // Find the maximum existing KodeBarang
    const maxKodeBarang = await BarangModel.max("KodeBarang");

    // Extract the numeric part and increment it
    const numericPart = maxKodeBarang
      ? parseInt(maxKodeBarang.slice(-2), 10) + 1
      : 1;
    const incrementedNumericPart = numericPart.toString().padStart(2, "0");

    // Create a barang with a formatted KodeBarang
    const newBarang = {
      KodeBarang: req.body.KodeBarang,
      NamaBarang: req.body.NamaBarang,
      Satuan: req.body.Satuan,
      HargaSatuan: req.body.HargaSatuan,
      Stok: req.body.Stok,
    };

    // Create the new Barang
    const createdBarang = await BarangModel.create(newBarang);

    res.send(createdBarang);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Barang.",
    });
  }
};

exports.findAll = (req, res) => {
  BarangModel.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Kelas.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  BarangModel.update(req.body, {
    where: { KodeBarang: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Barang was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Barang with id=${id}. Maybe Barang was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Barang with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  BarangModel.destroy({
    where: { KodeBarang: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Barang was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Barang with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Barang with id=" + id,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  BarangModel.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Barang with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Barang with id=" + id,
      });
    });
};
