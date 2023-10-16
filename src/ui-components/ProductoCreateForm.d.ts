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
export declare type ProductoCreateFormInputValues = {
    nombreProducto?: string;
    descripcion?: string;
    precio?: string;
    stock?: string;
    imageURL?: string;
    categoria?: string;
};
export declare type ProductoCreateFormValidationValues = {
    nombreProducto?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    precio?: ValidationFunction<string>;
    stock?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductoCreateFormOverridesProps = {
    ProductoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreProducto?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductoCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductoCreateFormInputValues) => ProductoCreateFormInputValues;
    onSuccess?: (fields: ProductoCreateFormInputValues) => void;
    onError?: (fields: ProductoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductoCreateFormInputValues) => ProductoCreateFormInputValues;
    onValidate?: ProductoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductoCreateForm(props: ProductoCreateFormProps): React.ReactElement;
