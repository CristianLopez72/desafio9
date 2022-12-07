//Importo Librerias a utilizar
import express from "express";
import mainRouter from "../routes/index.js";
import http from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRouter);

app.use((req, res) => {
  return res.status(404).json({
    error: -2,
    descripcion: 'Página no encontrada en el Servidor',
  });
});

app.use(function (error, res) {
  return res.status("500").json({
    mensaje: "Error interno del Servidor",
    error: error.message,
  });
});

const httpServer = http.Server(app);

export default httpServer;