const db = require(".././models");
const Tenan = db.tenan;
const nim = "221511065";
const nama = "Taufik";

function initialTenan() {
  Tenan.create({
    KodeTenan: `TS${nim}01`,
    NamaTenan: `${nama}Nov`,
    HP: `08${nim}123`,
  });
  Tenan.create({
    KodeTenan: `TS${nim}02`,
    NamaTenan: `${nama}Des`,
    HP: `08${nim}132`,
  });
}

module.exports = initialTenan;
