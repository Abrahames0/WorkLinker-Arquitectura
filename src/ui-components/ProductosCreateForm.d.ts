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
export declare type ProductosCreateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    categoria?: string;
    cantidadStock?: number;
    valoracionPromedio?: string;
};
export declare type ProductosCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
    categoria?: ValidationFunction<string>;
    cantidadStock?: ValidationFunction<number>;
    valoracionPromedio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductosCreateFormOverridesProps = {
    ProductosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    cantidadStock?: PrimitiveOverrideProps<TextFieldProps>;
    valoracionPromedio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductosCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductosCreateFormInputValues) => ProductosCreateFormInputValues;
    onSuccess?: (fields: ProductosCreateFormInputValues) => void;
    onError?: (fields: ProductosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductosCreateFormInputValues) => ProductosCreateFormInputValues;
    onValidate?: ProductosCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductosCreateForm(props: ProductosCreateFormProps): React.ReactElement;
