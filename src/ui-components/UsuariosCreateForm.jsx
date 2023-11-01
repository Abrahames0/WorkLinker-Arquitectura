/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Usuarios } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsuariosCreateForm(props) {
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
    nombreUsuario: "",
    apellidoUsuario: "",
    correo: "",
    telefono: "",
    calleUsuario: "",
    numeroUsuario: "",
    colonia: "",
    codigoPostalUsuario: "",
    municipioUsuario: "",
    estadoUsuario: "",
    paisUsuario: "",
  };
  const [nombreUsuario, setNombreUsuario] = React.useState(
    initialValues.nombreUsuario
  );
  const [apellidoUsuario, setApellidoUsuario] = React.useState(
    initialValues.apellidoUsuario
  );
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [calleUsuario, setCalleUsuario] = React.useState(
    initialValues.calleUsuario
  );
  const [numeroUsuario, setNumeroUsuario] = React.useState(
    initialValues.numeroUsuario
  );
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [codigoPostalUsuario, setCodigoPostalUsuario] = React.useState(
    initialValues.codigoPostalUsuario
  );
  const [municipioUsuario, setMunicipioUsuario] = React.useState(
    initialValues.municipioUsuario
  );
  const [estadoUsuario, setEstadoUsuario] = React.useState(
    initialValues.estadoUsuario
  );
  const [paisUsuario, setPaisUsuario] = React.useState(
    initialValues.paisUsuario
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreUsuario(initialValues.nombreUsuario);
    setApellidoUsuario(initialValues.apellidoUsuario);
    setCorreo(initialValues.correo);
    setTelefono(initialValues.telefono);
    setCalleUsuario(initialValues.calleUsuario);
    setNumeroUsuario(initialValues.numeroUsuario);
    setColonia(initialValues.colonia);
    setCodigoPostalUsuario(initialValues.codigoPostalUsuario);
    setMunicipioUsuario(initialValues.municipioUsuario);
    setEstadoUsuario(initialValues.estadoUsuario);
    setPaisUsuario(initialValues.paisUsuario);
    setErrors({});
  };
  const validations = {
    nombreUsuario: [],
    apellidoUsuario: [],
    correo: [],
    telefono: [],
    calleUsuario: [],
    numeroUsuario: [],
    colonia: [],
    codigoPostalUsuario: [],
    municipioUsuario: [],
    estadoUsuario: [],
    paisUsuario: [],
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
          nombreUsuario,
          apellidoUsuario,
          correo,
          telefono,
          calleUsuario,
          numeroUsuario,
          colonia,
          codigoPostalUsuario,
          municipioUsuario,
          estadoUsuario,
          paisUsuario,
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
          await DataStore.save(new Usuarios(modelFields));
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
      {...getOverrideProps(overrides, "UsuariosCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre usuario"
        isRequired={false}
        isReadOnly={false}
        value={nombreUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario: value,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.nombreUsuario ?? value;
          }
          if (errors.nombreUsuario?.hasError) {
            runValidationTasks("nombreUsuario", value);
          }
          setNombreUsuario(value);
        }}
        onBlur={() => runValidationTasks("nombreUsuario", nombreUsuario)}
        errorMessage={errors.nombreUsuario?.errorMessage}
        hasError={errors.nombreUsuario?.hasError}
        {...getOverrideProps(overrides, "nombreUsuario")}
      ></TextField>
      <TextField
        label="Apellido usuario"
        isRequired={false}
        isReadOnly={false}
        value={apellidoUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario: value,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.apellidoUsuario ?? value;
          }
          if (errors.apellidoUsuario?.hasError) {
            runValidationTasks("apellidoUsuario", value);
          }
          setApellidoUsuario(value);
        }}
        onBlur={() => runValidationTasks("apellidoUsuario", apellidoUsuario)}
        errorMessage={errors.apellidoUsuario?.errorMessage}
        hasError={errors.apellidoUsuario?.hasError}
        {...getOverrideProps(overrides, "apellidoUsuario")}
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
              nombreUsuario,
              apellidoUsuario,
              correo: value,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
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
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono: value,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
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
        label="Calle usuario"
        isRequired={false}
        isReadOnly={false}
        value={calleUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario: value,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.calleUsuario ?? value;
          }
          if (errors.calleUsuario?.hasError) {
            runValidationTasks("calleUsuario", value);
          }
          setCalleUsuario(value);
        }}
        onBlur={() => runValidationTasks("calleUsuario", calleUsuario)}
        errorMessage={errors.calleUsuario?.errorMessage}
        hasError={errors.calleUsuario?.hasError}
        {...getOverrideProps(overrides, "calleUsuario")}
      ></TextField>
      <TextField
        label="Numero usuario"
        isRequired={false}
        isReadOnly={false}
        value={numeroUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario: value,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.numeroUsuario ?? value;
          }
          if (errors.numeroUsuario?.hasError) {
            runValidationTasks("numeroUsuario", value);
          }
          setNumeroUsuario(value);
        }}
        onBlur={() => runValidationTasks("numeroUsuario", numeroUsuario)}
        errorMessage={errors.numeroUsuario?.errorMessage}
        hasError={errors.numeroUsuario?.hasError}
        {...getOverrideProps(overrides, "numeroUsuario")}
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
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia: value,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
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
        label="Codigo postal usuario"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={codigoPostalUsuario}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario: value,
              municipioUsuario,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostalUsuario ?? value;
          }
          if (errors.codigoPostalUsuario?.hasError) {
            runValidationTasks("codigoPostalUsuario", value);
          }
          setCodigoPostalUsuario(value);
        }}
        onBlur={() =>
          runValidationTasks("codigoPostalUsuario", codigoPostalUsuario)
        }
        errorMessage={errors.codigoPostalUsuario?.errorMessage}
        hasError={errors.codigoPostalUsuario?.hasError}
        {...getOverrideProps(overrides, "codigoPostalUsuario")}
      ></TextField>
      <TextField
        label="Municipio usuario"
        isRequired={false}
        isReadOnly={false}
        value={municipioUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario: value,
              estadoUsuario,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.municipioUsuario ?? value;
          }
          if (errors.municipioUsuario?.hasError) {
            runValidationTasks("municipioUsuario", value);
          }
          setMunicipioUsuario(value);
        }}
        onBlur={() => runValidationTasks("municipioUsuario", municipioUsuario)}
        errorMessage={errors.municipioUsuario?.errorMessage}
        hasError={errors.municipioUsuario?.hasError}
        {...getOverrideProps(overrides, "municipioUsuario")}
      ></TextField>
      <TextField
        label="Estado usuario"
        isRequired={false}
        isReadOnly={false}
        value={estadoUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario: value,
              paisUsuario,
            };
            const result = onChange(modelFields);
            value = result?.estadoUsuario ?? value;
          }
          if (errors.estadoUsuario?.hasError) {
            runValidationTasks("estadoUsuario", value);
          }
          setEstadoUsuario(value);
        }}
        onBlur={() => runValidationTasks("estadoUsuario", estadoUsuario)}
        errorMessage={errors.estadoUsuario?.errorMessage}
        hasError={errors.estadoUsuario?.hasError}
        {...getOverrideProps(overrides, "estadoUsuario")}
      ></TextField>
      <TextField
        label="Pais usuario"
        isRequired={false}
        isReadOnly={false}
        value={paisUsuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreUsuario,
              apellidoUsuario,
              correo,
              telefono,
              calleUsuario,
              numeroUsuario,
              colonia,
              codigoPostalUsuario,
              municipioUsuario,
              estadoUsuario,
              paisUsuario: value,
            };
            const result = onChange(modelFields);
            value = result?.paisUsuario ?? value;
          }
          if (errors.paisUsuario?.hasError) {
            runValidationTasks("paisUsuario", value);
          }
          setPaisUsuario(value);
        }}
        onBlur={() => runValidationTasks("paisUsuario", paisUsuario)}
        errorMessage={errors.paisUsuario?.errorMessage}
        hasError={errors.paisUsuario?.hasError}
        {...getOverrideProps(overrides, "paisUsuario")}
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
