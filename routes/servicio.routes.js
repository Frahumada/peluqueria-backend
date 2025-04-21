const express = require("express");
const router = express.Router();
const { obtenerServicios, crearServicio } = require("../controllers/servicioController");

router.get("/", obtenerServicios);
router.post("/", crearServicio);

module.exports = router;
