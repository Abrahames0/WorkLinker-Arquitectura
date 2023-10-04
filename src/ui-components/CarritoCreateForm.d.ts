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
export declare type CarritoCreateFormInputValues = {
    idUsuario?: string;
    productos?: string;
};
export declare type CarritoCreateFormValidationValues = {
    idUsuario?: ValidationFunction<string>;
    productos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarritoCreateFormOverridesProps = {
    CarritoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idUsuario?: PrimitiveOverrideProps<TextFieldProps>;
    productos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarritoCreateFormProps = React.PropsWithChildren<{
    overrides?: CarritoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarritoCreateFormInputValues) => CarritoCreateFormInputValues;
    onSuccess?: (fields: CarritoCreateFormInputValues) => void;
    onError?: (fields: CarritoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarritoCreateFormInputValues) => CarritoCreateFormInputValues;
    onValidate?: CarritoCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarritoCreateForm(props: CarritoCreateFormProps): React.ReactElement;
