//importo librerias a utilizar
import mongoose from "mongoose";
import { autoresSchema } from "./autores.js";

export const mensajesCollectionName = "mensajes";

export const mensajesSchema = new mongoose.Schema({
  author: { type: autoresSchema, required: true },
  text: { type: String, required: true },
});

export const MensajesModelo = mongoose.model(
  mensajesCollectionName,
  mensajesSchema
);