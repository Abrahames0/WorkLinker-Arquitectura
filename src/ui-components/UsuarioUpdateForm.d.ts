/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Usuario } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioUpdateFormInputValues = {
    nombreUsuario?: string;
    apellidoUsuario?: string;
    email?: string;
    calleUsuario?: string;
    numeroUsuario?: string;
    ciudadUsuario?: string;
    codigoPostalUsuario?: number;
    estadoUsuario?: string;
    paisUsuario?: string;
};
export declare type UsuarioUpdateFormValidationValues = {
    nombreUsuario?: ValidationFunction<string>;
    apellidoUsuario?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    calleUsuario?: ValidationFunction<string>;
    numeroUsuario?: ValidationFunction<string>;
    ciudadUsuario?: ValidationFunction<string>;
    codigoPostalUsuario?: ValidationFunction<number>;
    estadoUsuario?: ValidationFunction<string>;
    paisUsuario?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioUpdateFormOverridesProps = {
    UsuarioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    calleUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    numeroUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    ciudadUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    estadoUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    paisUsuario?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuario?: Usuario;
    onSubmit?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onSuccess?: (fields: UsuarioUpdateFormInputValues) => void;
    onError?: (fields: UsuarioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onValidate?: UsuarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioUpdateForm(props: UsuarioUpdateFormProps): React.ReactElement;
