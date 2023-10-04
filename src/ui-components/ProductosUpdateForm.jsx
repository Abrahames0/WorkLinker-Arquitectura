/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Productos } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductosUpdateForm(props) {
  const {
    id: idProp,
    productos: productosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    cantidadStock: "",
    valoracionPromedio: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [precio, setPrecio] = React.useState(initialValues.precio);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [cantidadStock, setCantidadStock] = React.useState(
    initialValues.cantidadStock
  );
  const [valoracionPromedio, setValoracionPromedio] = React.useState(
    initialValues.valoracionPromedio
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productosRecord
      ? { ...initialValues, ...productosRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setDescripcion(cleanValues.descripcion);
    setPrecio(cleanValues.precio);
    setCategoria(cleanValues.categoria);
    setCantidadStock(cleanValues.cantidadStock);
    setValoracionPromedio(cleanValues.valoracionPromedio);
    setErrors({});
  };
  const [productosRecord, setProductosRecord] =
    React.useState(productosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Productos, idProp)
        : productosModelProp;
      setProductosRecord(record);
    };
    queryData();
  }, [idProp, productosModelProp]);
  React.useEffect(resetStateValues, [productosRecord]);
  const validations = {
    nombre: [],
    descripcion: [],
    precio: [],
    categoria: [],
    cantidadStock: [],
    valoracionPromedio: [],
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
          nombre,
          descripcion,
          precio,
          categoria,
          cantidadStock,
          valoracionPromedio,
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
          await DataStore.save(
            Productos.copyOf(productosRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProductosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              descripcion,
              precio,
              categoria,
              cantidadStock,
              valoracionPromedio,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
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
              nombre,
              descripcion: value,
              precio,
              categoria,
              cantidadStock,
              valoracionPromedio,
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
        type="number"
        step="any"
        value={precio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              precio: value,
              categoria,
              cantidadStock,
              valoracionPromedio,
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
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              precio,
              categoria: value,
              cantidadStock,
              valoracionPromedio,
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
      <TextField
        label="Cantidad stock"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cantidadStock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              precio,
              categoria,
              cantidadStock: value,
              valoracionPromedio,
            };
            const result = onChange(modelFields);
            value = result?.cantidadStock ?? value;
          }
          if (errors.cantidadStock?.hasError) {
            runValidationTasks("cantidadStock", value);
          }
          setCantidadStock(value);
        }}
        onBlur={() => runValidationTasks("cantidadStock", cantidadStock)}
        errorMessage={errors.cantidadStock?.errorMessage}
        hasError={errors.cantidadStock?.hasError}
        {...getOverrideProps(overrides, "cantidadStock")}
      ></TextField>
      <TextField
        label="Valoracion promedio"
        isRequired={false}
        isReadOnly={false}
        value={valoracionPromedio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              descripcion,
              precio,
              categoria,
              cantidadStock,
              valoracionPromedio: value,
            };
            const result = onChange(modelFields);
            value = result?.valoracionPromedio ?? value;
          }
          if (errors.valoracionPromedio?.hasError) {
            runValidationTasks("valoracionPromedio", value);
          }
          setValoracionPromedio(value);
        }}
        onBlur={() =>
          runValidationTasks("valoracionPromedio", valoracionPromedio)
        }
        errorMessage={errors.valoracionPromedio?.errorMessage}
        hasError={errors.valoracionPromedio?.hasError}
        {...getOverrideProps(overrides, "valoracionPromedio")}
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
          isDisabled={!(idProp || productosModelProp)}
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
              !(idProp || productosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
