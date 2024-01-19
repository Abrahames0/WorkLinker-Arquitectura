import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}