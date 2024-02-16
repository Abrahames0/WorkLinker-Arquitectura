/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Producto } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductoUpdateForm(props) {
  const {
    id: idProp,
    producto: productoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nombre: "",
  };
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productoRecord
      ? { ...initialValues, ...productoRecord }
      : initialValues;
    setNombre(cleanValues.Nombre);
    setErrors({});
  };
  const [productoRecord, setProductoRecord] = React.useState(productoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Producto, idProp)
        : productoModelProp;
      setProductoRecord(record);
    };
    queryData();
  }, [idProp, productoModelProp]);
  React.useEffect(resetStateValues, [productoRecord]);
  const validations = {
    Nombre: [],
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
          Nombre,
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
            Producto.copyOf(productoRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProductoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre: value,
            };
            const result = onChange(modelFields);
            value = result?.Nombre ?? value;
          }
          if (errors.Nombre?.hasError) {
            runValidationTasks("Nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("Nombre", Nombre)}
        errorMessage={errors.Nombre?.errorMessage}
        hasError={errors.Nombre?.hasError}
        {...getOverrideProps(overrides, "Nombre")}
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
          isDisabled={!(idProp || productoModelProp)}
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
              !(idProp || productoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
