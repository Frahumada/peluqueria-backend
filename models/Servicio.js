const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  duracion: Number,
  imagenUrl: String
});

module.exports = mongoose.model('Servicio', servicioSchema);
