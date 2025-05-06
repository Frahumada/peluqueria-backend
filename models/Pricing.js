const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  duracion: Number,
  imagenUrl: String
});

module.exports = mongoose.model('price', pricingSchema);
