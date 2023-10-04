/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Categorias } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriasUpdateFormInputValues = {
    nombre?: string;
    descripcion?: string;
    productos?: string;
};
export declare type CategoriasUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    productos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriasUpdateFormOverridesProps = {
    CategoriasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    productos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriasUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoriasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    categorias?: Categorias;
    onSubmit?: (fields: CategoriasUpdateFormInputValues) => CategoriasUpdateFormInputValues;
    onSuccess?: (fields: CategoriasUpdateFormInputValues) => void;
    onError?: (fields: CategoriasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriasUpdateFormInputValues) => CategoriasUpdateFormInputValues;
    onValidate?: CategoriasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriasUpdateForm(props: CategoriasUpdateFormProps): React.ReactElement;
