/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Carrito } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CarritoUpdateForm(props) {
  const {
    id: idProp,
    carrito: carritoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TotalCarrito: "",
  };
  const [TotalCarrito, setTotalCarrito] = React.useState(
    initialValues.TotalCarrito
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = carritoRecord
      ? { ...initialValues, ...carritoRecord }
      : initialValues;
    setTotalCarrito(cleanValues.TotalCarrito);
    setErrors({});
  };
  const [carritoRecord, setCarritoRecord] = React.useState(carritoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Carrito, idProp)
        : carritoModelProp;
      setCarritoRecord(record);
    };
    queryData();
  }, [idProp, carritoModelProp]);
  React.useEffect(resetStateValues, [carritoRecord]);
  const validations = {
    TotalCarrito: [],
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
          TotalCarrito,
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
            Carrito.copyOf(carritoRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CarritoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Total carrito"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalCarrito}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              TotalCarrito: value,
            };
            const result = onChange(modelFields);
            value = result?.TotalCarrito ?? value;
          }
          if (errors.TotalCarrito?.hasError) {
            runValidationTasks("TotalCarrito", value);
          }
          setTotalCarrito(value);
        }}
        onBlur={() => runValidationTasks("TotalCarrito", TotalCarrito)}
        errorMessage={errors.TotalCarrito?.errorMessage}
        hasError={errors.TotalCarrito?.hasError}
        {...getOverrideProps(overrides, "TotalCarrito")}
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
          isDisabled={!(idProp || carritoModelProp)}
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
              !(idProp || carritoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
