const Pricing = require("../models/Pricing");

exports.obtenerPrice = async (req, res) => {
  const Prices = await Pricing.find();
  res.json(Prices);
};

exports.crearPrice = async (req, res) => {
  const nuevo = new Price(req.body);
  await nuevo.save();
  res.json(nuevo);
};
