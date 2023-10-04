/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Carrito } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CarritoCreateForm(props) {
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
    idUsuario: "",
    productos: "",
  };
  const [idUsuario, setIdUsuario] = React.useState(initialValues.idUsuario);
  const [productos, setProductos] = React.useState(initialValues.productos);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdUsuario(initialValues.idUsuario);
    setProductos(initialValues.productos);
    setErrors({});
  };
  const validations = {
    idUsuario: [],
    productos: [],
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
          idUsuario,
          productos,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Carrito(modelFields));
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
      {...getOverrideProps(overrides, "CarritoCreateForm")}
      {...rest}
    >
      <TextField
        label="Id usuario"
        isRequired={false}
        isReadOnly={false}
        value={idUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idUsuario: value,
              productos,
            };
            const result = onChange(modelFields);
            value = result?.idUsuario ?? value;
          }
          if (errors.idUsuario?.hasError) {
            runValidationTasks("idUsuario", value);
          }
          setIdUsuario(value);
        }}
        onBlur={() => runValidationTasks("idUsuario", idUsuario)}
        errorMessage={errors.idUsuario?.errorMessage}
        hasError={errors.idUsuario?.hasError}
        {...getOverrideProps(overrides, "idUsuario")}
      ></TextField>
      <TextField
        label="Productos"
        isRequired={false}
        isReadOnly={false}
        value={productos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idUsuario,
              productos: value,
            };
            const result = onChange(modelFields);
            value = result?.productos ?? value;
          }
          if (errors.productos?.hasError) {
            runValidationTasks("productos", value);
          }
          setProductos(value);
        }}
        onBlur={() => runValidationTasks("productos", productos)}
        errorMessage={errors.productos?.errorMessage}
        hasError={errors.productos?.hasError}
        {...getOverrideProps(overrides, "productos")}
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
