/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Repartidor } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RepartidorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    correo: "",
    descripcionRepartidor: "",
    nombreRepartidor: "",
  };
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [descripcionRepartidor, setDescripcionRepartidor] = React.useState(
    initialValues.descripcionRepartidor
  );
  const [nombreRepartidor, setNombreRepartidor] = React.useState(
    initialValues.nombreRepartidor
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCorreo(initialValues.correo);
    setDescripcionRepartidor(initialValues.descripcionRepartidor);
    setNombreRepartidor(initialValues.nombreRepartidor);
    setErrors({});
  };
  const validations = {
    correo: [],
    descripcionRepartidor: [],
    nombreRepartidor: [],
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
          correo,
          descripcionRepartidor,
          nombreRepartidor,
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
          await DataStore.save(new Repartidor(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RepartidorCreateForm")}
      {...rest}
    >
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo: value,
              descripcionRepartidor,
              nombreRepartidor,
            };
            const result = onChange(modelFields);
            value = result?.correo ?? value;
          }
          if (errors.correo?.hasError) {
            runValidationTasks("correo", value);
          }
          setCorreo(value);
        }}
        onBlur={() => runValidationTasks("correo", correo)}
        errorMessage={errors.correo?.errorMessage}
        hasError={errors.correo?.hasError}
        {...getOverrideProps(overrides, "correo")}
      ></TextField>
      <TextField
        label="Descripcion repartidor"
        isRequired={false}
        isReadOnly={false}
        value={descripcionRepartidor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              descripcionRepartidor: value,
              nombreRepartidor,
            };
            const result = onChange(modelFields);
            value = result?.descripcionRepartidor ?? value;
          }
          if (errors.descripcionRepartidor?.hasError) {
            runValidationTasks("descripcionRepartidor", value);
          }
          setDescripcionRepartidor(value);
        }}
        onBlur={() =>
          runValidationTasks("descripcionRepartidor", descripcionRepartidor)
        }
        errorMessage={errors.descripcionRepartidor?.errorMessage}
        hasError={errors.descripcionRepartidor?.hasError}
        {...getOverrideProps(overrides, "descripcionRepartidor")}
      ></TextField>
      <TextField
        label="Nombre repartidor"
        isRequired={false}
        isReadOnly={false}
        value={nombreRepartidor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              descripcionRepartidor,
              nombreRepartidor: value,
            };
            const result = onChange(modelFields);
            value = result?.nombreRepartidor ?? value;
          }
          if (errors.nombreRepartidor?.hasError) {
            runValidationTasks("nombreRepartidor", value);
          }
          setNombreRepartidor(value);
        }}
        onBlur={() => runValidationTasks("nombreRepartidor", nombreRepartidor)}
        errorMessage={errors.nombreRepartidor?.errorMessage}
        hasError={errors.nombreRepartidor?.hasError}
        {...getOverrideProps(overrides, "nombreRepartidor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
