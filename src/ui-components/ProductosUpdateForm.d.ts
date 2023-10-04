/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Productos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductosUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    categoria?: string;
    cantidadStock?: number;
    valoracionPromedio?: string;
};
export declare type ProductosUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
    categoria?: ValidationFunction<string>;
    cantidadStock?: ValidationFunction<number>;
    valoracionPromedio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductosUpdateFormOverridesProps = {
    ProductosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    cantidadStock?: PrimitiveOverrideProps<TextFieldProps>;
    valoracionPromedio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductosUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productos?: Productos;
    onSubmit?: (fields: ProductosUpdateFormInputValues) => ProductosUpdateFormInputValues;
    onSuccess?: (fields: ProductosUpdateFormInputValues) => void;
    onError?: (fields: ProductosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductosUpdateFormInputValues) => ProductosUpdateFormInputValues;
    onValidate?: ProductosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductosUpdateForm(props: ProductosUpdateFormProps): React.ReactElement;
