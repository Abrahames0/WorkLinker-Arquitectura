/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Producto } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductoCreateForm(props) {
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
    nombreProducto: "",
    descripcion: "",
    precio: "",
    stock: "",
    imageURL: "",
    categoria: "",
  };
  const [nombreProducto, setNombreProducto] = React.useState(
    initialValues.nombreProducto
  );
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [precio, setPrecio] = React.useState(initialValues.precio);
  const [stock, setStock] = React.useState(initialValues.stock);
  const [imageURL, setImageURL] = React.useState(initialValues.imageURL);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreProducto(initialValues.nombreProducto);
    setDescripcion(initialValues.descripcion);
    setPrecio(initialValues.precio);
    setStock(initialValues.stock);
    setImageURL(initialValues.imageURL);
    setCategoria(initialValues.categoria);
    setErrors({});
  };
  const validations = {
    nombreProducto: [],
    descripcion: [],
    precio: [],
    stock: [],
    imageURL: [{ type: "URL" }],
    categoria: [],
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
          nombreProducto,
          descripcion,
          precio,
          stock,
          imageURL,
          categoria,
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
          await DataStore.save(new Producto(modelFields));
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
      {...getOverrideProps(overrides, "ProductoCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre producto"
        isRequired={false}
        isReadOnly={false}
        value={nombreProducto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto: value,
              descripcion,
              precio,
              stock,
              imageURL,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.nombreProducto ?? value;
          }
          if (errors.nombreProducto?.hasError) {
            runValidationTasks("nombreProducto", value);
          }
          setNombreProducto(value);
        }}
        onBlur={() => runValidationTasks("nombreProducto", nombreProducto)}
        errorMessage={errors.nombreProducto?.errorMessage}
        hasError={errors.nombreProducto?.hasError}
        {...getOverrideProps(overrides, "nombreProducto")}
      ></TextField>
      <TextField
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto,
              descripcion: value,
              precio,
              stock,
              imageURL,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.descripcion ?? value;
          }
          if (errors.descripcion?.hasError) {
            runValidationTasks("descripcion", value);
          }
          setDescripcion(value);
        }}
        onBlur={() => runValidationTasks("descripcion", descripcion)}
        errorMessage={errors.descripcion?.errorMessage}
        hasError={errors.descripcion?.hasError}
        {...getOverrideProps(overrides, "descripcion")}
      ></TextField>
      <TextField
        label="Precio"
        isRequired={false}
        isReadOnly={false}
        value={precio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto,
              descripcion,
              precio: value,
              stock,
              imageURL,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.precio ?? value;
          }
          if (errors.precio?.hasError) {
            runValidationTasks("precio", value);
          }
          setPrecio(value);
        }}
        onBlur={() => runValidationTasks("precio", precio)}
        errorMessage={errors.precio?.errorMessage}
        hasError={errors.precio?.hasError}
        {...getOverrideProps(overrides, "precio")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={false}
        isReadOnly={false}
        value={stock}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto,
              descripcion,
              precio,
              stock: value,
              imageURL,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto,
              descripcion,
              precio,
              stock,
              imageURL: value,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.imageURL ?? value;
          }
          if (errors.imageURL?.hasError) {
            runValidationTasks("imageURL", value);
          }
          setImageURL(value);
        }}
        onBlur={() => runValidationTasks("imageURL", imageURL)}
        errorMessage={errors.imageURL?.errorMessage}
        hasError={errors.imageURL?.hasError}
        {...getOverrideProps(overrides, "imageURL")}
      ></TextField>
      <TextField
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreProducto,
              descripcion,
              precio,
              stock,
              imageURL,
              categoria: value,
            };
            const result = onChange(modelFields);
            value = result?.categoria ?? value;
          }
          if (errors.categoria?.hasError) {
            runValidationTasks("categoria", value);
          }
          setCategoria(value);
        }}
        onBlur={() => runValidationTasks("categoria", categoria)}
        errorMessage={errors.categoria?.errorMessage}
        hasError={errors.categoria?.hasError}
        {...getOverrideProps(overrides, "categoria")}
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
