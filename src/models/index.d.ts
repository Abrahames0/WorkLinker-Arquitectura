import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Producto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Producto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Producto = LazyLoading extends LazyLoadingDisabled ? EagerProducto : LazyProducto

export declare const Producto: (new (init: ModelInit<Producto>) => Producto) & {
  copyOf(source: Producto, mutator: (draft: MutableModel<Producto>) => MutableModel<Producto> | void): Producto;
}