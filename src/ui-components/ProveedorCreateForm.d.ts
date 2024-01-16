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
    correo?: string;
    apellidosProveedor?: string;
    calleProveedor?: string;
    numeroProveedor?: string;
    codigoPostalProveedor?: number;
    estadoProveedor?: string;
    paisProveedor?: string;
    nombreProveedor?: string;
};
export declare type ProveedorCreateFormValidationValues = {
    correo?: ValidationFunction<string>;
    apellidosProveedor?: ValidationFunction<string>;
    calleProveedor?: ValidationFunction<string>;
    numeroProveedor?: ValidationFunction<string>;
    codigoPostalProveedor?: ValidationFunction<number>;
    estadoProveedor?: ValidationFunction<string>;
    paisProveedor?: ValidationFunction<string>;
    nombreProveedor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProveedorCreateFormOverridesProps = {
    ProveedorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    apellidosProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    calleProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    numeroProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    estadoProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    paisProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    nombreProveedor?: PrimitiveOverrideProps<TextFieldProps>;
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
