/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Carrito } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarritoUpdateFormInputValues = {
    TotalCarrito?: number;
};
export declare type CarritoUpdateFormValidationValues = {
    TotalCarrito?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarritoUpdateFormOverridesProps = {
    CarritoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TotalCarrito?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarritoUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarritoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carrito?: Carrito;
    onSubmit?: (fields: CarritoUpdateFormInputValues) => CarritoUpdateFormInputValues;
    onSuccess?: (fields: CarritoUpdateFormInputValues) => void;
    onError?: (fields: CarritoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarritoUpdateFormInputValues) => CarritoUpdateFormInputValues;
    onValidate?: CarritoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarritoUpdateForm(props: CarritoUpdateFormProps): React.ReactElement;
