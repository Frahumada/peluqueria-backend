// const express = require("express");
// const router = express.Router();
// const { obtenerServicios, crearServicio } = require("../controllers/servicioController");

// router.get("/", obtenerServicios);
// router.post("/", crearServicio);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Price = require('../models/Pricing');

// GET /api/precios
router.get('/', async (req, res) => {
  console.log('🔥  GET /api/precios entró al handler');
  try {
    const prices = await Price.find();
    return res.json(prices);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al obtener precios' });
  }
});

// Crear un servicio
router.post('/', async (req, res) => {
    try {
      const nuevo = new Price(req.body);
      const guardado = await nuevo.save();
      res.status(201).json(guardado);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error al crear precio' });
    }
  });

module.exports = router;
