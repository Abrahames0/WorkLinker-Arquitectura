/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuariosCreateFormInputValues = {
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
export declare type UsuariosCreateFormValidationValues = {
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
export declare type UsuariosCreateFormOverridesProps = {
    UsuariosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type UsuariosCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuariosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuariosCreateFormInputValues) => UsuariosCreateFormInputValues;
    onSuccess?: (fields: UsuariosCreateFormInputValues) => void;
    onError?: (fields: UsuariosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuariosCreateFormInputValues) => UsuariosCreateFormInputValues;
    onValidate?: UsuariosCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuariosCreateForm(props: UsuariosCreateFormProps): React.ReactElement;
