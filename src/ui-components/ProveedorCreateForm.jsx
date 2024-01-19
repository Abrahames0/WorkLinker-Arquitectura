/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Proveedor } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProveedorCreateForm(props) {
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
    nombreComercial: "",
    correo: "",
    telefono: "",
    calle: "",
    numero: "",
    colonia: "",
    codigoPostal: "",
    municipio: "",
    estado: "",
    pais: "",
  };
  const [nombreComercial, setNombreComercial] = React.useState(
    initialValues.nombreComercial
  );
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreComercial(initialValues.nombreComercial);
    setCorreo(initialValues.correo);
    setTelefono(initialValues.telefono);
    setCalle(initialValues.calle);
    setNumero(initialValues.numero);
    setColonia(initialValues.colonia);
    setCodigoPostal(initialValues.codigoPostal);
    setMunicipio(initialValues.municipio);
    setEstado(initialValues.estado);
    setPais(initialValues.pais);
    setErrors({});
  };
  const validations = {
    nombreComercial: [],
    correo: [],
    telefono: [],
    calle: [],
    numero: [],
    colonia: [],
    codigoPostal: [],
    municipio: [],
    estado: [],
    pais: [],
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
          nombreComercial,
          correo,
          telefono,
          calle,
          numero,
          colonia,
          codigoPostal,
          municipio,
          estado,
          pais,
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
          await DataStore.save(new Proveedor(modelFields));
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
      {...getOverrideProps(overrides, "ProveedorCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre comercial"
        isRequired={false}
        isReadOnly={false}
        value={nombreComercial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial: value,
              correo,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais,
            };
            const result = onChange(modelFields);
            value = result?.nombreComercial ?? value;
          }
          if (errors.nombreComercial?.hasError) {
            runValidationTasks("nombreComercial", value);
          }
          setNombreComercial(value);
        }}
        onBlur={() => runValidationTasks("nombreComercial", nombreComercial)}
        errorMessage={errors.nombreComercial?.errorMessage}
        hasError={errors.nombreComercial?.hasError}
        {...getOverrideProps(overrides, "nombreComercial")}
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
              nombreComercial,
              correo: value,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais,
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
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              correo,
              telefono: value,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
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
              nombreComercial,
              correo,
              telefono,
              calle: value,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais,
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
              nombreComercial,
              correo,
              telefono,
              calle,
              numero: value,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais,
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
              nombreComercial,
              correo,
              telefono,
              calle,
              numero,
              colonia: value,
              codigoPostal,
              municipio,
              estado,
              pais,
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
              nombreComercial,
              correo,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal: value,
              municipio,
              estado,
              pais,
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
              nombreComercial,
              correo,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio: value,
              estado,
              pais,
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
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreComercial,
              correo,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado: value,
              pais,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
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
              nombreComercial,
              correo,
              telefono,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              estado,
              pais: value,
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
