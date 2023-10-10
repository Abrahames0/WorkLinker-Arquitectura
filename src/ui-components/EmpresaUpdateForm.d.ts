/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Empresa } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmpresaUpdateFormInputValues = {
    nombreEmpresa?: string;
    emailEmpresa?: string;
    calleEmpresa?: string;
    numeroEmpresa?: string;
    ciudadEmpresa?: string;
    codigoPostalEmpresa?: number;
    estadoEmpresa?: string;
    paisEmpresa?: string;
};
export declare type EmpresaUpdateFormValidationValues = {
    nombreEmpresa?: ValidationFunction<string>;
    emailEmpresa?: ValidationFunction<string>;
    calleEmpresa?: ValidationFunction<string>;
    numeroEmpresa?: ValidationFunction<string>;
    ciudadEmpresa?: ValidationFunction<string>;
    codigoPostalEmpresa?: ValidationFunction<number>;
    estadoEmpresa?: ValidationFunction<string>;
    paisEmpresa?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresaUpdateFormOverridesProps = {
    EmpresaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    emailEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    calleEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    numeroEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    ciudadEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    estadoEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    paisEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    empresa?: Empresa;
    onSubmit?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onSuccess?: (fields: EmpresaUpdateFormInputValues) => void;
    onError?: (fields: EmpresaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onValidate?: EmpresaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaUpdateForm(props: EmpresaUpdateFormProps): React.ReactElement;
