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
export declare type EmpresasCreateFormInputValues = {
    correo?: string;
    nombre?: string;
    direccion?: string;
    PaginaWeb?: string;
    calle?: string;
    numero?: string;
    colonia?: string;
    codigoPostal?: number;
    municipio?: string;
    pais?: string;
    latutud?: number;
    longitud?: number;
};
export declare type EmpresasCreateFormValidationValues = {
    correo?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    PaginaWeb?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<number>;
    municipio?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    latutud?: ValidationFunction<number>;
    longitud?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresasCreateFormOverridesProps = {
    EmpresasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    PaginaWeb?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    latutud?: PrimitiveOverrideProps<TextFieldProps>;
    longitud?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresasCreateFormProps = React.PropsWithChildren<{
    overrides?: EmpresasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmpresasCreateFormInputValues) => EmpresasCreateFormInputValues;
    onSuccess?: (fields: EmpresasCreateFormInputValues) => void;
    onError?: (fields: EmpresasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresasCreateFormInputValues) => EmpresasCreateFormInputValues;
    onValidate?: EmpresasCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresasCreateForm(props: EmpresasCreateFormProps): React.ReactElement;
