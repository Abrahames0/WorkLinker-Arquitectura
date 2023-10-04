/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Empresas } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EmpresasUpdateForm(props) {
  const {
    id: idProp,
    empresas: empresasModelProp,
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
    nombre: "",
    direccion: "",
    PaginaWeb: "",
    calle: "",
    numero: "",
    colonia: "",
    codigoPostal: "",
    municipio: "",
    pais: "",
    latutud: "",
    longitud: "",
  };
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [direccion, setDireccion] = React.useState(initialValues.direccion);
  const [PaginaWeb, setPaginaWeb] = React.useState(initialValues.PaginaWeb);
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [latutud, setLatutud] = React.useState(initialValues.latutud);
  const [longitud, setLongitud] = React.useState(initialValues.longitud);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = empresasRecord
      ? { ...initialValues, ...empresasRecord }
      : initialValues;
    setCorreo(cleanValues.correo);
    setNombre(cleanValues.nombre);
    setDireccion(cleanValues.direccion);
    setPaginaWeb(cleanValues.PaginaWeb);
    setCalle(cleanValues.calle);
    setNumero(cleanValues.numero);
    setColonia(cleanValues.colonia);
    setCodigoPostal(cleanValues.codigoPostal);
    setMunicipio(cleanValues.municipio);
    setPais(cleanValues.pais);
    setLatutud(cleanValues.latutud);
    setLongitud(cleanValues.longitud);
    setErrors({});
  };
  const [empresasRecord, setEmpresasRecord] = React.useState(empresasModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Empresas, idProp)
        : empresasModelProp;
      setEmpresasRecord(record);
    };
    queryData();
  }, [idProp, empresasModelProp]);
  React.useEffect(resetStateValues, [empresasRecord]);
  const validations = {
    correo: [],
    nombre: [],
    direccion: [],
    PaginaWeb: [{ type: "URL" }],
    calle: [],
    numero: [],
    colonia: [],
    codigoPostal: [],
    municipio: [],
    pais: [],
    latutud: [],
    longitud: [],
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
          nombre,
          direccion,
          PaginaWeb,
          calle,
          numero,
          colonia,
          codigoPostal,
          municipio,
          pais,
          latutud,
          longitud,
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
            Empresas.copyOf(empresasRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EmpresasUpdateForm")}
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
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
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
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              nombre: value,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
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
        label="Direccion"
        isRequired={false}
        isReadOnly={false}
        value={direccion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              nombre,
              direccion: value,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
            };
            const result = onChange(modelFields);
            value = result?.direccion ?? value;
          }
          if (errors.direccion?.hasError) {
            runValidationTasks("direccion", value);
          }
          setDireccion(value);
        }}
        onBlur={() => runValidationTasks("direccion", direccion)}
        errorMessage={errors.direccion?.errorMessage}
        hasError={errors.direccion?.hasError}
        {...getOverrideProps(overrides, "direccion")}
      ></TextField>
      <TextField
        label="Pagina web"
        isRequired={false}
        isReadOnly={false}
        value={PaginaWeb}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              nombre,
              direccion,
              PaginaWeb: value,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
            };
            const result = onChange(modelFields);
            value = result?.PaginaWeb ?? value;
          }
          if (errors.PaginaWeb?.hasError) {
            runValidationTasks("PaginaWeb", value);
          }
          setPaginaWeb(value);
        }}
        onBlur={() => runValidationTasks("PaginaWeb", PaginaWeb)}
        errorMessage={errors.PaginaWeb?.errorMessage}
        hasError={errors.PaginaWeb?.hasError}
        {...getOverrideProps(overrides, "PaginaWeb")}
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle: value,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero: value,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia: value,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud,
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal: value,
              municipio,
              pais,
              latutud,
              longitud,
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio: value,
              pais,
              latutud,
              longitud,
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
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais: value,
              latutud,
              longitud,
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
        label="Latutud"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={latutud}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud: value,
              longitud,
            };
            const result = onChange(modelFields);
            value = result?.latutud ?? value;
          }
          if (errors.latutud?.hasError) {
            runValidationTasks("latutud", value);
          }
          setLatutud(value);
        }}
        onBlur={() => runValidationTasks("latutud", latutud)}
        errorMessage={errors.latutud?.errorMessage}
        hasError={errors.latutud?.hasError}
        {...getOverrideProps(overrides, "latutud")}
      ></TextField>
      <TextField
        label="Longitud"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitud}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              correo,
              nombre,
              direccion,
              PaginaWeb,
              calle,
              numero,
              colonia,
              codigoPostal,
              municipio,
              pais,
              latutud,
              longitud: value,
            };
            const result = onChange(modelFields);
            value = result?.longitud ?? value;
          }
          if (errors.longitud?.hasError) {
            runValidationTasks("longitud", value);
          }
          setLongitud(value);
        }}
        onBlur={() => runValidationTasks("longitud", longitud)}
        errorMessage={errors.longitud?.errorMessage}
        hasError={errors.longitud?.hasError}
        {...getOverrideProps(overrides, "longitud")}
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
          isDisabled={!(idProp || empresasModelProp)}
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
              !(idProp || empresasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
