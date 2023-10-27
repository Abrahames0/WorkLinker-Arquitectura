/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Proveedor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProveedorUpdateFormInputValues = {
    nombreComercial?: string;
    correo?: string;
    telefono?: number;
    calle?: string;
    numero?: string;
    colonia?: string;
    codigoPostal?: number;
    municipio?: string;
    estado?: string;
    pais?: string;
};
export declare type ProveedorUpdateFormValidationValues = {
    nombreComercial?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    telefono?: ValidationFunction<number>;
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<number>;
    municipio?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProveedorUpdateFormOverridesProps = {
    ProveedorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreComercial?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProveedorUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProveedorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    proveedor?: Proveedor;
    onSubmit?: (fields: ProveedorUpdateFormInputValues) => ProveedorUpdateFormInputValues;
    onSuccess?: (fields: ProveedorUpdateFormInputValues) => void;
    onError?: (fields: ProveedorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProveedorUpdateFormInputValues) => ProveedorUpdateFormInputValues;
    onValidate?: ProveedorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProveedorUpdateForm(props: ProveedorUpdateFormProps): React.ReactElement;
