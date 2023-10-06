// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categorias, Carrito, Productos, Clientes, Empresas } = initSchema(schema);

export {
  Categorias,
  Carrito,
  Productos,
  Clientes,
  Empresas
};