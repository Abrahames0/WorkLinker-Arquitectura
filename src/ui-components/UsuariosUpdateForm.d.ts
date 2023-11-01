/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Usuarios } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuariosUpdateFormInputValues = {
    nombreUsuario?: string;
    apellidoUsuario?: string;
    correo?: string;
    telefono?: string;
    calleUsuario?: string;
    numeroUsuario?: string;
    colonia?: string;
    codigoPostalUsuario?: number;
    municipioUsuario?: string;
    estadoUsuario?: string;
    paisUsuario?: string;
};
export declare type UsuariosUpdateFormValidationValues = {
    nombreUsuario?: ValidationFunction<string>;
    apellidoUsuario?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    calleUsuario?: ValidationFunction<string>;
    numeroUsuario?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    codigoPostalUsuario?: ValidationFunction<number>;
    municipioUsuario?: ValidationFunction<string>;
    estadoUsuario?: ValidationFunction<string>;
    paisUsuario?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuariosUpdateFormOverridesProps = {
    UsuariosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    calleUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    numeroUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    municipioUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    estadoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    paisUsuario?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuariosUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuariosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuarios?: Usuarios;
    onSubmit?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onSuccess?: (fields: UsuariosUpdateFormInputValues) => void;
    onError?: (fields: UsuariosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onValidate?: UsuariosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuariosUpdateForm(props: UsuariosUpdateFormProps): React.ReactElement;
