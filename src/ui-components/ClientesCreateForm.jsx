/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Clientes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClientesCreateForm(props) {
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
    nombre: "",
    apellido: "",
    correo: "",
    calle: "",
    numero: "",
    colonia: "",
    codigoPostal: "",
    municipio: "",
    pais: "",
    historialCompras: "",
    carritoActual: "",
    listaDeseos: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellido, setApellido] = React.useState(initialValues.apellido);
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [historialCompras, setHistorialCompras] = React.useState(
    initialValues.historialCompras
  );
  const [carritoActual, setCarritoActual] = React.useState(
    initialValues.carritoActual
  );
  const [listaDeseos, setListaDeseos] = React.useState(
    initialValues.listaDeseos
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellido(initialValues.apellido);
    setCorreo(initialValues.correo);
    setCalle(initialValues.calle);
    setNumero(initialValues.numero);
    setColonia(initialValues.colonia);
    setCodigoPostal(initialValues.codigoPostal);
    setMunicipio(initialValues.municipio);
    setPais(initialValues.pais);
    setHistorialCompras(initialValues.historialCompras);
    setCarritoActual(initialValues.carritoActual);
    setListaDeseos(initialValues.listaDeseos);
    setErrors({});
  };
  const validations = {
    nombre: [],
    apellido: [],
    correo: [],
    calle: [],
    numero: [],
    colonia: [],
    codigoPostal: [],
    municipio: [],
    pais: [],
    historialCompras: [],
    carritoActual: [],
    listaDeseos: [],
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
          apellido,
          correo,
          calle,
          numero,
          colonia,
          codigoPostal,
          municipio,
          pais,
          historialCompras,
          carritoActual,
          listaDeseos,
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
          await DataStore.save(new Clientes(modelFields));
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
      {...getOverrideProps(overrides, "ClientesCreateForm")}
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
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
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
        label="Apellido"
        isRequired={false}
        isReadOnly={false}
        value={apellido}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido: value,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.apellido ?? value;
          }
          if (errors.apellido?.hasError) {
            runValidationTasks("apellido", value);
          }
          setApellido(value);
        }}
        onBlur={() => runValidationTasks("apellido", apellido)}
        errorMessage={errors.apellido?.errorMessage}
        hasError={errors.apellido?.hasError}
        {...getOverrideProps(overrides, "apellido")}
      ></TextField>
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo: value,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
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
        label="Calle"
        isRequired={false}
        isReadOnly={false}
        value={calle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle: value,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.calle ?? value;
          }
          if (errors.calle?.hasError) {
            runValidationTasks("calle", value);
          }
          setCalle(value);
        }}
        onBlur={() => runValidationTasks("calle", calle)}
        errorMessage={errors.calle?.errorMessage}
        hasError={errors.calle?.hasError}
        {...getOverrideProps(overrides, "calle")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero: value,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Colonia"
        isRequired={false}
        isReadOnly={false}
        value={colonia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia: value,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.colonia ?? value;
          }
          if (errors.colonia?.hasError) {
            runValidationTasks("colonia", value);
          }
          setColonia(value);
        }}
        onBlur={() => runValidationTasks("colonia", colonia)}
        errorMessage={errors.colonia?.errorMessage}
        hasError={errors.colonia?.hasError}
        {...getOverrideProps(overrides, "colonia")}
      ></TextField>
      <TextField
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={codigoPostal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal: value,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostal ?? value;
          }
          if (errors.codigoPostal?.hasError) {
            runValidationTasks("codigoPostal", value);
          }
          setCodigoPostal(value);
        }}
        onBlur={() => runValidationTasks("codigoPostal", codigoPostal)}
        errorMessage={errors.codigoPostal?.errorMessage}
        hasError={errors.codigoPostal?.hasError}
        {...getOverrideProps(overrides, "codigoPostal")}
      ></TextField>
      <TextField
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio: value,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.municipio ?? value;
          }
          if (errors.municipio?.hasError) {
            runValidationTasks("municipio", value);
          }
          setMunicipio(value);
        }}
        onBlur={() => runValidationTasks("municipio", municipio)}
        errorMessage={errors.municipio?.errorMessage}
        hasError={errors.municipio?.hasError}
        {...getOverrideProps(overrides, "municipio")}
      ></TextField>
      <TextField
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais: value,
              historialCompras,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.pais ?? value;
          }
          if (errors.pais?.hasError) {
            runValidationTasks("pais", value);
          }
          setPais(value);
        }}
        onBlur={() => runValidationTasks("pais", pais)}
        errorMessage={errors.pais?.errorMessage}
        hasError={errors.pais?.hasError}
        {...getOverrideProps(overrides, "pais")}
      ></TextField>
      <TextField
        label="Historial compras"
        isRequired={false}
        isReadOnly={false}
        value={historialCompras}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras: value,
              carritoActual,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.historialCompras ?? value;
          }
          if (errors.historialCompras?.hasError) {
            runValidationTasks("historialCompras", value);
          }
          setHistorialCompras(value);
        }}
        onBlur={() => runValidationTasks("historialCompras", historialCompras)}
        errorMessage={errors.historialCompras?.errorMessage}
        hasError={errors.historialCompras?.hasError}
        {...getOverrideProps(overrides, "historialCompras")}
      ></TextField>
      <TextField
        label="Carrito actual"
        isRequired={false}
        isReadOnly={false}
        value={carritoActual}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual: value,
              listaDeseos,
            };
            const result = onChange(modelFields);
            value = result?.carritoActual ?? value;
          }
          if (errors.carritoActual?.hasError) {
            runValidationTasks("carritoActual", value);
          }
          setCarritoActual(value);
        }}
        onBlur={() => runValidationTasks("carritoActual", carritoActual)}
        errorMessage={errors.carritoActual?.errorMessage}
        hasError={errors.carritoActual?.hasError}
        {...getOverrideProps(overrides, "carritoActual")}
      ></TextField>
      <TextField
        label="Lista deseos"
        isRequired={false}
        isReadOnly={false}
        value={listaDeseos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellido,
              correo,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              historialCompras,
              carritoActual,
              listaDeseos: value,
            };
            const result = onChange(modelFields);
            value = result?.listaDeseos ?? value;
          }
          if (errors.listaDeseos?.hasError) {
            runValidationTasks("listaDeseos", value);
          }
          setListaDeseos(value);
        }}
        onBlur={() => runValidationTasks("listaDeseos", listaDeseos)}
        errorMessage={errors.listaDeseos?.errorMessage}
        hasError={errors.listaDeseos?.hasError}
        {...getOverrideProps(overrides, "listaDeseos")}
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
