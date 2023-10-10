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
export declare type EmpresaCreateFormInputValues = {
    nombreEmpresa?: string;
    emailEmpresa?: string;
    calleEmpresa?: string;
    numeroEmpresa?: string;
    ciudadEmpresa?: string;
    codigoPostalEmpresa?: number;
    estadoEmpresa?: string;
    paisEmpresa?: string;
};
export declare type EmpresaCreateFormValidationValues = {
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
export declare type EmpresaCreateFormOverridesProps = {
    EmpresaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    emailEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    calleEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    numeroEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    ciudadEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostalEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    estadoEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
    paisEmpresa?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaCreateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onSuccess?: (fields: EmpresaCreateFormInputValues) => void;
    onError?: (fields: EmpresaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onValidate?: EmpresaCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaCreateForm(props: EmpresaCreateFormProps): React.ReactElement;
