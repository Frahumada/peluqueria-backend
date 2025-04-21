const mongoose = require("mongoose");

const ServicioSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
});

module.exports = mongoose.model("Servicio", ServicioSchema);
