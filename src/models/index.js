// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Producto, RepartirProducto, Carrito, ProductoCarrito, Repartidor, Proveedor, Usuarios } = initSchema(schema);

export {
  Producto,
  RepartirProducto,
  Carrito,
  ProductoCarrito,
  Repartidor,
  Proveedor,
  Usuarios
};