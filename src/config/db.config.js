const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {});

    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // en caso de error , detener app
  }
};

module.exports = conectarDB;
