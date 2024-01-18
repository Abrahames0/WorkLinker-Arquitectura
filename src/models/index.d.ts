import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Producto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly stock?: number | null;
  readonly imagenURL?: string | null;
  readonly categoria?: string | null;
  readonly statusVisible?: boolean | null;
  readonly proveedorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Producto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly descripcion?: string | null;
  readonly precio?: number | null;
  readonly stock?: number | null;
  readonly imagenURL?: string | null;
  readonly categoria?: string | null;
  readonly statusVisible?: boolean | null;
  readonly proveedorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Producto = LazyLoading extends LazyLoadingDisabled ? EagerProducto : LazyProducto

export declare const Producto: (new (init: ModelInit<Producto>) => Producto) & {
  copyOf(source: Producto, mutator: (draft: MutableModel<Producto>) => MutableModel<Producto> | void): Producto;
}

type EagerRepartirProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RepartirProducto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly repartidorID: string;
  readonly productosParaEntregar?: string | null;
  readonly direccionDeEntrega?: string | null;
  readonly informacionDeCliente?: string | null;
  readonly correoCliente?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRepartirProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RepartirProducto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly repartidorID: string;
  readonly productosParaEntregar?: string | null;
  readonly direccionDeEntrega?: string | null;
  readonly informacionDeCliente?: string | null;
  readonly correoCliente?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RepartirProducto = LazyLoading extends LazyLoadingDisabled ? EagerRepartirProducto : LazyRepartirProducto

export declare const RepartirProducto: (new (init: ModelInit<RepartirProducto>) => RepartirProducto) & {
  copyOf(source: RepartirProducto, mutator: (draft: MutableModel<RepartirProducto>) => MutableModel<RepartirProducto> | void): RepartirProducto;
}

type EagerCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TotalCarrito?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TotalCarrito?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Carrito = LazyLoading extends LazyLoadingDisabled ? EagerCarrito : LazyCarrito

export declare const Carrito: (new (init: ModelInit<Carrito>) => Carrito) & {
  copyOf(source: Carrito, mutator: (draft: MutableModel<Carrito>) => MutableModel<Carrito> | void): Carrito;
}

type EagerProductoCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductoCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly precio?: string | null;
  readonly cantidad?: number | null;
  readonly subTotal?: number | null;
  readonly nombreProducto?: string | null;
  readonly usuariosID: string;
  readonly imagenURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductoCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductoCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly precio?: string | null;
  readonly cantidad?: number | null;
  readonly subTotal?: number | null;
  readonly nombreProducto?: string | null;
  readonly usuariosID: string;
  readonly imagenURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductoCarrito = LazyLoading extends LazyLoadingDisabled ? EagerProductoCarrito : LazyProductoCarrito

export declare const ProductoCarrito: (new (init: ModelInit<ProductoCarrito>) => ProductoCarrito) & {
  copyOf(source: ProductoCarrito, mutator: (draft: MutableModel<ProductoCarrito>) => MutableModel<ProductoCarrito> | void): ProductoCarrito;
}

type EagerRepartidor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repartidor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly correo?: string | null;
  readonly descripcionRepartidor?: string | null;
  readonly RepartirProductos?: (RepartirProducto | null)[] | null;
  readonly nombreRepartidor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRepartidor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repartidor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly correo?: string | null;
  readonly descripcionRepartidor?: string | null;
  readonly RepartirProductos: AsyncCollection<RepartirProducto>;
  readonly nombreRepartidor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Repartidor = LazyLoading extends LazyLoadingDisabled ? EagerRepartidor : LazyRepartidor

export declare const Repartidor: (new (init: ModelInit<Repartidor>) => Repartidor) & {
  copyOf(source: Repartidor, mutator: (draft: MutableModel<Repartidor>) => MutableModel<Repartidor> | void): Repartidor;
}

type EagerProveedor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proveedor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreComercial?: string | null;
  readonly correo?: string | null;
  readonly telefono?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly Productos?: (Producto | null)[] | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProveedor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proveedor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreComercial?: string | null;
  readonly correo?: string | null;
  readonly telefono?: string | null;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostal?: number | null;
  readonly Productos: AsyncCollection<Producto>;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Proveedor = LazyLoading extends LazyLoadingDisabled ? EagerProveedor : LazyProveedor

export declare const Proveedor: (new (init: ModelInit<Proveedor>) => Proveedor) & {
  copyOf(source: Proveedor, mutator: (draft: MutableModel<Proveedor>) => MutableModel<Proveedor> | void): Proveedor;
}

type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreUsuario?: string | null;
  readonly apellidoUsuario?: string | null;
  readonly correo?: string | null;
  readonly telefono?: string | null;
  readonly calleUsuario?: string | null;
  readonly numeroUsuario?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostalUsuario?: number | null;
  readonly municipioUsuario?: string | null;
  readonly estadoUsuario?: string | null;
  readonly paisUsuario?: string | null;
  readonly ProductoCarritos?: (ProductoCarrito | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreUsuario?: string | null;
  readonly apellidoUsuario?: string | null;
  readonly correo?: string | null;
  readonly telefono?: string | null;
  readonly calleUsuario?: string | null;
  readonly numeroUsuario?: string | null;
  readonly colonia?: string | null;
  readonly codigoPostalUsuario?: number | null;
  readonly municipioUsuario?: string | null;
  readonly estadoUsuario?: string | null;
  readonly paisUsuario?: string | null;
  readonly ProductoCarritos: AsyncCollection<ProductoCarrito>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}