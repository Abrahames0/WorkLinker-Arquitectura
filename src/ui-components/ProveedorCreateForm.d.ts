/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProveedorCreateFormInputValues = {
    nombreComercial?: string;
    correo?: string;
    telefono?: string;
    calle?: string;
    numero?: string;
    colonia?: string;
    codigoPostal?: number;
    municipio?: string;
    estado?: string;
    pais?: string;
};
export declare type ProveedorCreateFormValidationValues = {
    nombreComercial?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<number>;
    municipio?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProveedorCreateFormOverridesProps = {
    ProveedorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ProveedorCreateFormProps = React.PropsWithChildren<{
    overrides?: ProveedorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProveedorCreateFormInputValues) => ProveedorCreateFormInputValues;
    onSuccess?: (fields: ProveedorCreateFormInputValues) => void;
    onError?: (fields: ProveedorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProveedorCreateFormInputValues) => ProveedorCreateFormInputValues;
    onValidate?: ProveedorCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProveedorCreateForm(props: ProveedorCreateFormProps): React.ReactElement;
