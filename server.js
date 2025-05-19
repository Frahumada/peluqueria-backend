require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Importa tu router de servicios
const pricesRouter = require("./routes/pricing.routes.js");

const app = express();
const PORT = process.env.PORT;

// Conexión a MongoDB Atlas (incluye opciones para evitar warnings)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ Error conectando a MongoDB:", err.message);
    process.exit(1);
  });

// Middlewares globales
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("🎉 API de la Peluquería funcionando correctamente!");
});

// Monta el router de prices
app.use("/api/precios", pricesRouter);

// 404 para rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});


// Arranca el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
