/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Repartidor } from "../models";
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
export declare type RepartidorUpdateFormInputValues = {
    correo?: string;
    descripcionRepartidor?: string;
    nombreRepartidor?: string;
};
export declare type RepartidorUpdateFormValidationValues = {
    correo?: ValidationFunction<string>;
    descripcionRepartidor?: ValidationFunction<string>;
    nombreRepartidor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RepartidorUpdateFormOverridesProps = {
    RepartidorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    descripcionRepartidor?: PrimitiveOverrideProps<TextFieldProps>;
    nombreRepartidor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RepartidorUpdateFormProps = React.PropsWithChildren<{
    overrides?: RepartidorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    repartidor?: Repartidor;
    onSubmit?: (fields: RepartidorUpdateFormInputValues) => RepartidorUpdateFormInputValues;
    onSuccess?: (fields: RepartidorUpdateFormInputValues) => void;
    onError?: (fields: RepartidorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepartidorUpdateFormInputValues) => RepartidorUpdateFormInputValues;
    onValidate?: RepartidorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RepartidorUpdateForm(props: RepartidorUpdateFormProps): React.ReactElement;
