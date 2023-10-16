/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Usuarios } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuariosUpdateFormInputValues = {
    nombreUsuario?: string;
    apellidoUsuario?: string;
    emailUsuario?: string;
    calleUsuario?: string;
    numeroUsuario?: string;
    ciudadUsuario?: string;
    codigoPostalUsuario?: number;
    paisUsuario?: string;
    estadoUsuario?: string;
};
export declare type UsuariosUpdateFormValidationValues = {
    nombreUsuario?: ValidationFunction<string>;
    apellidoUsuario?: ValidationFunction<string>;
    emailUsuario?: ValidationFunction<string>;
    calleUsuario?: ValidationFunction<string>;
    numeroUsuario?: ValidationFunction<string>;
    ciudadUsuario?: ValidationFunction<string>;
    codigoPostalUsuario?: ValidationFunction<number>;
    paisUsuario?: ValidationFunction<string>;
    estadoUsuario?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuariosUpdateFormOverridesProps = {
    UsuariosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    emailUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    calleUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    numeroUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    ciudadUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    paisUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    estadoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
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
