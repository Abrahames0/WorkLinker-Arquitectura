/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Usuarios } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsuariosUpdateForm(props) {
  const {
    id: idProp,
    usuarios: usuariosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    usuario: "",
  };
  const [usuario, setUsuario] = React.useState(initialValues.usuario);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usuariosRecord
      ? { ...initialValues, ...usuariosRecord }
      : initialValues;
    setUsuario(cleanValues.usuario);
    setErrors({});
  };
  const [usuariosRecord, setUsuariosRecord] = React.useState(usuariosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Usuarios, idProp)
        : usuariosModelProp;
      setUsuariosRecord(record);
    };
    queryData();
  }, [idProp, usuariosModelProp]);
  React.useEffect(resetStateValues, [usuariosRecord]);
  const validations = {
    usuario: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          usuario,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Usuarios.copyOf(usuariosRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsuariosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Usuario"
        isRequired={false}
        isReadOnly={false}
        value={usuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usuario: value,
            };
            const result = onChange(modelFields);
            value = result?.usuario ?? value;
          }
          if (errors.usuario?.hasError) {
            runValidationTasks("usuario", value);
          }
          setUsuario(value);
        }}
        onBlur={() => runValidationTasks("usuario", usuario)}
        errorMessage={errors.usuario?.errorMessage}
        hasError={errors.usuario?.hasError}
        {...getOverrideProps(overrides, "usuario")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usuariosModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usuariosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
