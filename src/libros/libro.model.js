const mongoose = require("mongoose");

const LibroModel = mongoose.Schema({
  titulo: String,
  autor: String,
  editorial: String,
  fecha: String,
  precio: Number,
  categoria: String,
});

module.exports = mongoose.model("Libro", LibroModel);
