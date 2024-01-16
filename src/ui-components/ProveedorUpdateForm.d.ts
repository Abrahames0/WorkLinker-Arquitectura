/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Proveedor } from "../models";
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
export declare type ProveedorUpdateFormInputValues = {
    correo?: string;
    apellidosProveedor?: string;
    calleProveedor?: string;
    numeroProveedor?: string;
    codigoPostalProveedor?: number;
    estadoProveedor?: string;
    paisProveedor?: string;
    nombreProveedor?: string;
};
export declare type ProveedorUpdateFormValidationValues = {
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
export declare type ProveedorUpdateFormOverridesProps = {
    ProveedorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    apellidosProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    calleProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    numeroProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    estadoProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    paisProveedor?: PrimitiveOverrideProps<TextFieldProps>;
    nombreProveedor?: PrimitiveOverrideProps<TextFieldProps>;
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
