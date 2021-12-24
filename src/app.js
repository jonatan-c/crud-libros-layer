const express = require("express");
const app = express();
const conectarDB = require("./config/db.config");
app.use(express.json());
conectarDB();

app.use("/", require("./libros/libro.routes"));

module.exports = app;

// {
//   "titulo": "editado v22222222222",
// "autor" : "davinci",
// "editorial": "pokemon",
// "fecha": "10/12/2021",
// "precio": 1000,
// "categoria" : "humor"
// }
