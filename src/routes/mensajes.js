//importo librerias a utilizar
import { Router } from "express";
const router = Router();
import {
  AllMensajes,
  NormalizedMensajes,
  DenormalizedMensajes,
} from "../controller/mensajes.js";

router.get("/todos", AllMensajes);
router.get("/normalizados", NormalizedMensajes);
router.get("/denormalizados", DenormalizedMensajes);

export default router;