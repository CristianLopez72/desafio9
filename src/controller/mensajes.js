//importo librerias a utilizar
import { MensajesModelo } from "../modelos/mensajes.js";
import { normalize, denormalize, schema } from "normalizr";

const autor = new schema.Entity("author", {}, { idAttribute: "id" });

const msg = new schema.Entity(
  "mensaje",
  {
    autor: autor,
  },
  { idAttribute: "_id" }
);

const msgsSchema = new schema.Array(msg);

export const AllMensajes = async (req, res) => {
  try {
    const Mensajes = await MensajesModelo.find().lean();

    if (!Mensajes) {
      return res.status(400).json({
        mensaje: "No se encontraron mensajes",
      });
    } else {
      return res.status(200).json({
        data: Mensajes,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack,
    });
  }
};

export const NormalizedMensajes = async (req, res) => {
  try {
    const mensajesOriginalDatos = await MensajesModelo.find().lean();

    let normalizedMensajes = normalize(mensajesOriginalDatos, msgsSchema);

    return res.status(200).json({
      data: normalizedMensajes,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack,
    });
  }
};

export const DenormalizedMensajes = async (req, res) => {
  try {
    const mensajesOriginalDatos = await MensajesModelo.find().lean();

    let normalizedMensajes = normalize(mensajesOriginalDatos, msgsSchema);

    const denormalizedDatos = denormalize(
        normalizedMensajes.result,
        msgsSchema,
        normalizedMensajes.entities
    );

    return res.status(200).json({
      data: denormalizedDatos,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      stack: error.stack,
    });
  }
};