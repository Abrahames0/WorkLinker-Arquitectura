// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProductoCarrito, Carrito, Productos, Empresa, Usuarios } = initSchema(schema);

export {
  ProductoCarrito,
  Carrito,
  Productos,
  Empresa,
  Usuarios
};