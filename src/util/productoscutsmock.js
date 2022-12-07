import { faker } from "@faker-js/faker";
faker.locale = "es";

let productos = [];

export const generaProducto = () => {
  return {
    nombre: faker.commerce.nombreProducto(),
    precio: faker.commerce.precio(),
    foto: faker.image.abstract(),
  };
};

export const creaProductosMock = (cant) => {
  productos.length = 0;
  for (let i = 0; i < cant; i++) {
    const producto = generaProducto();
    producto.id = i + 1;
    productos.push(producto);
  }
  return productos;
};