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
export declare type RepartidorCreateFormInputValues = {
    NombreRepartidor?: string;
    DescripcionRepartidor?: string;
};
export declare type RepartidorCreateFormValidationValues = {
    NombreRepartidor?: ValidationFunction<string>;
    DescripcionRepartidor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RepartidorCreateFormOverridesProps = {
    RepartidorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NombreRepartidor?: PrimitiveOverrideProps<TextFieldProps>;
    DescripcionRepartidor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RepartidorCreateFormProps = React.PropsWithChildren<{
    overrides?: RepartidorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RepartidorCreateFormInputValues) => RepartidorCreateFormInputValues;
    onSuccess?: (fields: RepartidorCreateFormInputValues) => void;
    onError?: (fields: RepartidorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepartidorCreateFormInputValues) => RepartidorCreateFormInputValues;
    onValidate?: RepartidorCreateFormValidationValues;
} & React.CSSProperties>;
export default function RepartidorCreateForm(props: RepartidorCreateFormProps): React.ReactElement;
