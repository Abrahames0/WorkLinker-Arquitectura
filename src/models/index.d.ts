import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly productos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly productos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categorias = LazyLoading extends LazyLoadingDisabled ? EagerCategorias : LazyCategorias

export declare const Categorias: (new (init: ModelInit<Categorias>) => Categorias) & {
  copyOf(source: Categorias, mutator: (draft: MutableModel<Categorias>) => MutableModel<Categorias> | void): Categorias;
}

type EagerCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUsuario?: string | null;
  readonly productos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUsuario?: string | null;
  readonly productos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Carrito = LazyLoading extends LazyLoadingDisabled ? EagerCarrito : LazyCarrito

export declare const Carrito: (new (init: ModelInit<Carrito>) => Carrito) & {
  copyOf(source: Carrito, mutator: (draft: MutableModel<Carrito>) => MutableModel<Carrito> | void): Carrito;
}

type EagerProductos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Productos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly categoria?: string | null;
  readonly cantidadStock?: number | null;
  readonly valoracionPromedio?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Productos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly categoria?: string | null;
  readonly cantidadStock?: number | null;
  readonly valoracionPromedio?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Productos = LazyLoading extends LazyLoadingDisabled ? EagerProductos : LazyProductos

export declare const Productos: (new (init: ModelInit<Productos>) => Productos) & {
  copyOf(source: Productos, mutator: (draft: MutableModel<Productos>) => MutableModel<Productos> | void): Productos;
}

type EagerClientes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clientes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly correo?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly municipio?: string | null;
  readonly pais?: string | null;
  readonly historialCompras?: string | null;
  readonly carritoActual?: string | null;
  readonly listaDeseos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClientes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clientes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly correo?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly municipio?: string | null;
  readonly pais?: string | null;
  readonly historialCompras?: string | null;
  readonly carritoActual?: string | null;
  readonly listaDeseos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Clientes = LazyLoading extends LazyLoadingDisabled ? EagerClientes : LazyClientes

export declare const Clientes: (new (init: ModelInit<Clientes>) => Clientes) & {
  copyOf(source: Clientes, mutator: (draft: MutableModel<Clientes>) => MutableModel<Clientes> | void): Clientes;
}

type EagerEmpresas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly correo?: string | null;
  readonly nombre?: string | null;
  readonly direccion?: string | null;
  readonly PaginaWeb?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly municipio?: string | null;
  readonly pais?: string | null;
  readonly latutud?: number | null;
  readonly longitud?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmpresas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly correo?: string | null;
  readonly nombre?: string | null;
  readonly direccion?: string | null;
  readonly PaginaWeb?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly municipio?: string | null;
  readonly pais?: string | null;
  readonly latutud?: number | null;
  readonly longitud?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Empresas = LazyLoading extends LazyLoadingDisabled ? EagerEmpresas : LazyEmpresas

export declare const Empresas: (new (init: ModelInit<Empresas>) => Empresas) & {
  copyOf(source: Empresas, mutator: (draft: MutableModel<Empresas>) => MutableModel<Empresas> | void): Empresas;
}