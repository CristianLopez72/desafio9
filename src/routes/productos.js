//importo librerias a utilizar
import { Router } from "express";
import { getAllProductos } from "../controller/productos.js";

const router = Router();

router.get("/fackerMock", getAllProductos);

export default router;