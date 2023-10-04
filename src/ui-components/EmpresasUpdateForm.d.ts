/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Empresas } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmpresasUpdateFormInputValues = {
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
export declare type EmpresasUpdateFormValidationValues = {
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
export declare type EmpresasUpdateFormOverridesProps = {
    EmpresasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EmpresasUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmpresasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    empresas?: Empresas;
    onSubmit?: (fields: EmpresasUpdateFormInputValues) => EmpresasUpdateFormInputValues;
    onSuccess?: (fields: EmpresasUpdateFormInputValues) => void;
    onError?: (fields: EmpresasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresasUpdateFormInputValues) => EmpresasUpdateFormInputValues;
    onValidate?: EmpresasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresasUpdateForm(props: EmpresasUpdateFormProps): React.ReactElement;
