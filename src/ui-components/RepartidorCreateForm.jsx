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
    NombreRepartidor: "",
    DescripcionRepartidor: "",
  };
  const [NombreRepartidor, setNombreRepartidor] = React.useState(
    initialValues.NombreRepartidor
  );
  const [DescripcionRepartidor, setDescripcionRepartidor] = React.useState(
    initialValues.DescripcionRepartidor
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreRepartidor(initialValues.NombreRepartidor);
    setDescripcionRepartidor(initialValues.DescripcionRepartidor);
    setErrors({});
  };
  const validations = {
    NombreRepartidor: [],
    DescripcionRepartidor: [],
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
          NombreRepartidor,
          DescripcionRepartidor,
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
        label="Nombre repartidor"
        isRequired={false}
        isReadOnly={false}
        value={NombreRepartidor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NombreRepartidor: value,
              DescripcionRepartidor,
            };
            const result = onChange(modelFields);
            value = result?.NombreRepartidor ?? value;
          }
          if (errors.NombreRepartidor?.hasError) {
            runValidationTasks("NombreRepartidor", value);
          }
          setNombreRepartidor(value);
        }}
        onBlur={() => runValidationTasks("NombreRepartidor", NombreRepartidor)}
        errorMessage={errors.NombreRepartidor?.errorMessage}
        hasError={errors.NombreRepartidor?.hasError}
        {...getOverrideProps(overrides, "NombreRepartidor")}
      ></TextField>
      <TextField
        label="Descripcion repartidor"
        isRequired={false}
        isReadOnly={false}
        value={DescripcionRepartidor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NombreRepartidor,
              DescripcionRepartidor: value,
            };
            const result = onChange(modelFields);
            value = result?.DescripcionRepartidor ?? value;
          }
          if (errors.DescripcionRepartidor?.hasError) {
            runValidationTasks("DescripcionRepartidor", value);
          }
          setDescripcionRepartidor(value);
        }}
        onBlur={() =>
          runValidationTasks("DescripcionRepartidor", DescripcionRepartidor)
        }
        errorMessage={errors.DescripcionRepartidor?.errorMessage}
        hasError={errors.DescripcionRepartidor?.hasError}
        {...getOverrideProps(overrides, "DescripcionRepartidor")}
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
