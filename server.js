const express = require("express");

const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const seeders = require("./app/seeders");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   seeders.initialKasir();
//   seeders.initialTenan();
// });

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome To SLP apps" });
});

require("./app/routes/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
