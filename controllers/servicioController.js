const Servicio = require("../models/Servicio");

exports.obtenerServicios = async (req, res) => {
  const servicios = await Servicio.find();
  res.json(servicios);
};

exports.crearServicio = async (req, res) => {
  const nuevo = new Servicio(req.body);
  await nuevo.save();
  res.json(nuevo);
};
