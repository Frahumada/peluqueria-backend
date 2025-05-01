// const express = require("express");
// const router = express.Router();
// const { obtenerServicios, crearServicio } = require("../controllers/servicioController");

// router.get("/", obtenerServicios);
// router.post("/", crearServicio);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Servicio = require('../models/Servicio');

// GET /api/servicios
router.get('/', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
});

// Crear un servicio
router.post('/', async (req, res) => {
    try {
      const nuevo = new Servicio(req.body);
      const guardado = await nuevo.save();
      res.status(201).json(guardado);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error al crear servicio' });
    }
  });

module.exports = router;
