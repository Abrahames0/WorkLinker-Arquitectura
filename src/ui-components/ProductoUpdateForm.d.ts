/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Producto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductoUpdateFormInputValues = {
    nombreProducto?: string;
    descripcion?: string;
    precio?: string;
    stock?: string;
    imageURL?: string;
    categoria?: string;
};
export declare type ProductoUpdateFormValidationValues = {
    nombreProducto?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    precio?: ValidationFunction<string>;
    stock?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductoUpdateFormOverridesProps = {
    ProductoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreProducto?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    producto?: Producto;
    onSubmit?: (fields: ProductoUpdateFormInputValues) => ProductoUpdateFormInputValues;
    onSuccess?: (fields: ProductoUpdateFormInputValues) => void;
    onError?: (fields: ProductoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductoUpdateFormInputValues) => ProductoUpdateFormInputValues;
    onValidate?: ProductoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductoUpdateForm(props: ProductoUpdateFormProps): React.ReactElement;
