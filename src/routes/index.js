//importo librerias a utilizar
import Router from "express";
import productosRouter from "./productos.js";
import mensajesRouter from "./mensajes.js";

const router = Router();

router.use("/productos", productosRouter);
router.use("/mensajes", mensajesRouter);

export default router;