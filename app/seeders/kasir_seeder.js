const db = require(".././models");
const Kasir = db.kasir;
const nim = "221511065";
const nama = "Taufik MR";

function initialKasir() {
  Kasir.create({
    KodeKasir: `KS${nim}01`,
    Nama: `Ujang ${nama}`,
    HP: `08${nim}123`,
  });
  Kasir.create({
    KodeKasir: `KS${nim}02`,
    Nama: `Lulu ${nama}`,
    HP: `08${nim}132`,
  });
}

module.exports = initialKasir;
