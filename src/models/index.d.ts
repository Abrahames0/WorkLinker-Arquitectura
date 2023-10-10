import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProductoCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductoCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carritoID: string;
  readonly nombreProducto?: string | null;
  readonly precio?: number | null;
  readonly cantidad?: number | null;
  readonly subtotal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductoCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductoCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carritoID: string;
  readonly nombreProducto?: string | null;
  readonly precio?: number | null;
  readonly cantidad?: number | null;
  readonly subtotal?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductoCarrito = LazyLoading extends LazyLoadingDisabled ? EagerProductoCarrito : LazyProductoCarrito

export declare const ProductoCarrito: (new (init: ModelInit<ProductoCarrito>) => ProductoCarrito) & {
  copyOf(source: ProductoCarrito, mutator: (draft: MutableModel<ProductoCarrito>) => MutableModel<ProductoCarrito> | void): ProductoCarrito;
}

type EagerCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ProductoCarritos?: (ProductoCarrito | null)[] | null;
  readonly totalCarrito?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ProductoCarritos: AsyncCollection<ProductoCarrito>;
  readonly totalCarrito?: number | null;
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
  readonly nombreProducto?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly stock?: number | null;
  readonly imagenURL?: string | null;
  readonly categoria?: string | null;
  readonly empresaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Productos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly stock?: number | null;
  readonly imagenURL?: string | null;
  readonly categoria?: string | null;
  readonly empresaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Productos = LazyLoading extends LazyLoadingDisabled ? EagerProductos : LazyProductos

export declare const Productos: (new (init: ModelInit<Productos>) => Productos) & {
  copyOf(source: Productos, mutator: (draft: MutableModel<Productos>) => MutableModel<Productos> | void): Productos;
}

type EagerEmpresa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreEmpresa?: string | null;
  readonly emailEmpresa?: string | null;
  readonly calleEmpresa?: string | null;
  readonly numeroEmpresa?: string | null;
  readonly ciudadEmpresa?: string | null;
  readonly codigoPostalEmpresa?: number | null;
  readonly estadoEmpresa?: string | null;
  readonly paisEmpresa?: string | null;
  readonly Productos?: (Productos | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmpresa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Empresa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreEmpresa?: string | null;
  readonly emailEmpresa?: string | null;
  readonly calleEmpresa?: string | null;
  readonly numeroEmpresa?: string | null;
  readonly ciudadEmpresa?: string | null;
  readonly codigoPostalEmpresa?: number | null;
  readonly estadoEmpresa?: string | null;
  readonly paisEmpresa?: string | null;
  readonly Productos: AsyncCollection<Productos>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Empresa = LazyLoading extends LazyLoadingDisabled ? EagerEmpresa : LazyEmpresa

export declare const Empresa: (new (init: ModelInit<Empresa>) => Empresa) & {
  copyOf(source: Empresa, mutator: (draft: MutableModel<Empresa>) => MutableModel<Empresa> | void): Empresa;
}

type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreUsuario?: string | null;
  readonly apellidoUsuario?: string | null;
  readonly emailUsuario?: string | null;
  readonly calleUsuario?: string | null;
  readonly numeroUsuario?: string | null;
  readonly ciudadUsuario?: string | null;
  readonly codigoPostalUsuario?: number | null;
  readonly estadoUsuario?: string | null;
  readonly paisUsuario?: string | null;
  readonly Carrito?: Carrito | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosCarritoId?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreUsuario?: string | null;
  readonly apellidoUsuario?: string | null;
  readonly emailUsuario?: string | null;
  readonly calleUsuario?: string | null;
  readonly numeroUsuario?: string | null;
  readonly ciudadUsuario?: string | null;
  readonly codigoPostalUsuario?: number | null;
  readonly estadoUsuario?: string | null;
  readonly paisUsuario?: string | null;
  readonly Carrito: AsyncItem<Carrito | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosCarritoId?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}