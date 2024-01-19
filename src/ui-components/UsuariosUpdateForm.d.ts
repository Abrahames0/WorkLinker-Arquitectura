/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Usuarios } from "../models";
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
export declare type UsuariosUpdateFormInputValues = {};
export declare type UsuariosUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuariosUpdateFormOverridesProps = {
    UsuariosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type UsuariosUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuariosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuarios?: Usuarios;
    onSubmit?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onSuccess?: (fields: UsuariosUpdateFormInputValues) => void;
    onError?: (fields: UsuariosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onValidate?: UsuariosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuariosUpdateForm(props: UsuariosUpdateFormProps): React.ReactElement;
