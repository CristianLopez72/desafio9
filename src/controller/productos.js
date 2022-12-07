//importo librerias a utilizar
import { creaProductosMock } from "../util/productoscutsmock.js";

export const getAllProductos = async (req, res) => {
  try {
    res.status(200).json({
      data: creaProductosMock(5),
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      stack: error.stack,
    });
  }
};