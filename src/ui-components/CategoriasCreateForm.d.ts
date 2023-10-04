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
export declare type CategoriasCreateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    productos?: string;
};
export declare type CategoriasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    productos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriasCreateFormOverridesProps = {
    CategoriasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    productos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriasCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoriasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoriasCreateFormInputValues) => CategoriasCreateFormInputValues;
    onSuccess?: (fields: CategoriasCreateFormInputValues) => void;
    onError?: (fields: CategoriasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriasCreateFormInputValues) => CategoriasCreateFormInputValues;
    onValidate?: CategoriasCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriasCreateForm(props: CategoriasCreateFormProps): React.ReactElement;
