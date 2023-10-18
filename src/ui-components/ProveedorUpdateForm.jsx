/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Proveedor } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProveedorUpdateForm(props) {
  const {
    id: idProp,
    proveedor: proveedorModelProp,
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
    apellidosProveedor: "",
    calleProveedor: "",
    numeroProveedor: "",
    codigoPostalProveedor: "",
    estadoProveedor: "",
    paisProveedor: "",
    nombreProveedor: "",
  };
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [apellidosProveedor, setApellidosProveedor] = React.useState(
    initialValues.apellidosProveedor
  );
  const [calleProveedor, setCalleProveedor] = React.useState(
    initialValues.calleProveedor
  );
  const [numeroProveedor, setNumeroProveedor] = React.useState(
    initialValues.numeroProveedor
  );
  const [codigoPostalProveedor, setCodigoPostalProveedor] = React.useState(
    initialValues.codigoPostalProveedor
  );
  const [estadoProveedor, setEstadoProveedor] = React.useState(
    initialValues.estadoProveedor
  );
  const [paisProveedor, setPaisProveedor] = React.useState(
    initialValues.paisProveedor
  );
  const [nombreProveedor, setNombreProveedor] = React.useState(
    initialValues.nombreProveedor
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = proveedorRecord
      ? { ...initialValues, ...proveedorRecord }
      : initialValues;
    setCorreo(cleanValues.correo);
    setApellidosProveedor(cleanValues.apellidosProveedor);
    setCalleProveedor(cleanValues.calleProveedor);
    setNumeroProveedor(cleanValues.numeroProveedor);
    setCodigoPostalProveedor(cleanValues.codigoPostalProveedor);
    setEstadoProveedor(cleanValues.estadoProveedor);
    setPaisProveedor(cleanValues.paisProveedor);
    setNombreProveedor(cleanValues.nombreProveedor);
    setErrors({});
  };
  const [proveedorRecord, setProveedorRecord] =
    React.useState(proveedorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Proveedor, idProp)
        : proveedorModelProp;
      setProveedorRecord(record);
    };
    queryData();
  }, [idProp, proveedorModelProp]);
  React.useEffect(resetStateValues, [proveedorRecord]);
  const validations = {
    correo: [],
    apellidosProveedor: [],
    calleProveedor: [],
    numeroProveedor: [],
    codigoPostalProveedor: [],
    estadoProveedor: [],
    paisProveedor: [],
    nombreProveedor: [],
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
          apellidosProveedor,
          calleProveedor,
          numeroProveedor,
          codigoPostalProveedor,
          estadoProveedor,
          paisProveedor,
          nombreProveedor,
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
            Proveedor.copyOf(proveedorRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProveedorUpdateForm")}
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
              apellidosProveedor,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor,
              nombreProveedor,
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
        label="Apellidos proveedor"
        isRequired={false}
        isReadOnly={false}
        value={apellidosProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor: value,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.apellidosProveedor ?? value;
          }
          if (errors.apellidosProveedor?.hasError) {
            runValidationTasks("apellidosProveedor", value);
          }
          setApellidosProveedor(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidosProveedor", apellidosProveedor)
        }
        errorMessage={errors.apellidosProveedor?.errorMessage}
        hasError={errors.apellidosProveedor?.hasError}
        {...getOverrideProps(overrides, "apellidosProveedor")}
      ></TextField>
      <TextField
        label="Calle proveedor"
        isRequired={false}
        isReadOnly={false}
        value={calleProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor: value,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.calleProveedor ?? value;
          }
          if (errors.calleProveedor?.hasError) {
            runValidationTasks("calleProveedor", value);
          }
          setCalleProveedor(value);
        }}
        onBlur={() => runValidationTasks("calleProveedor", calleProveedor)}
        errorMessage={errors.calleProveedor?.errorMessage}
        hasError={errors.calleProveedor?.hasError}
        {...getOverrideProps(overrides, "calleProveedor")}
      ></TextField>
      <TextField
        label="Numero proveedor"
        isRequired={false}
        isReadOnly={false}
        value={numeroProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor,
              numeroProveedor: value,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.numeroProveedor ?? value;
          }
          if (errors.numeroProveedor?.hasError) {
            runValidationTasks("numeroProveedor", value);
          }
          setNumeroProveedor(value);
        }}
        onBlur={() => runValidationTasks("numeroProveedor", numeroProveedor)}
        errorMessage={errors.numeroProveedor?.errorMessage}
        hasError={errors.numeroProveedor?.hasError}
        {...getOverrideProps(overrides, "numeroProveedor")}
      ></TextField>
      <TextField
        label="Codigo postal proveedor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={codigoPostalProveedor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor: value,
              estadoProveedor,
              paisProveedor,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostalProveedor ?? value;
          }
          if (errors.codigoPostalProveedor?.hasError) {
            runValidationTasks("codigoPostalProveedor", value);
          }
          setCodigoPostalProveedor(value);
        }}
        onBlur={() =>
          runValidationTasks("codigoPostalProveedor", codigoPostalProveedor)
        }
        errorMessage={errors.codigoPostalProveedor?.errorMessage}
        hasError={errors.codigoPostalProveedor?.hasError}
        {...getOverrideProps(overrides, "codigoPostalProveedor")}
      ></TextField>
      <TextField
        label="Estado proveedor"
        isRequired={false}
        isReadOnly={false}
        value={estadoProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor: value,
              paisProveedor,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.estadoProveedor ?? value;
          }
          if (errors.estadoProveedor?.hasError) {
            runValidationTasks("estadoProveedor", value);
          }
          setEstadoProveedor(value);
        }}
        onBlur={() => runValidationTasks("estadoProveedor", estadoProveedor)}
        errorMessage={errors.estadoProveedor?.errorMessage}
        hasError={errors.estadoProveedor?.hasError}
        {...getOverrideProps(overrides, "estadoProveedor")}
      ></TextField>
      <TextField
        label="Pais proveedor"
        isRequired={false}
        isReadOnly={false}
        value={paisProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor: value,
              nombreProveedor,
            };
            const result = onChange(modelFields);
            value = result?.paisProveedor ?? value;
          }
          if (errors.paisProveedor?.hasError) {
            runValidationTasks("paisProveedor", value);
          }
          setPaisProveedor(value);
        }}
        onBlur={() => runValidationTasks("paisProveedor", paisProveedor)}
        errorMessage={errors.paisProveedor?.errorMessage}
        hasError={errors.paisProveedor?.hasError}
        {...getOverrideProps(overrides, "paisProveedor")}
      ></TextField>
      <TextField
        label="Nombre proveedor"
        isRequired={false}
        isReadOnly={false}
        value={nombreProveedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              correo,
              apellidosProveedor,
              calleProveedor,
              numeroProveedor,
              codigoPostalProveedor,
              estadoProveedor,
              paisProveedor,
              nombreProveedor: value,
            };
            const result = onChange(modelFields);
            value = result?.nombreProveedor ?? value;
          }
          if (errors.nombreProveedor?.hasError) {
            runValidationTasks("nombreProveedor", value);
          }
          setNombreProveedor(value);
        }}
        onBlur={() => runValidationTasks("nombreProveedor", nombreProveedor)}
        errorMessage={errors.nombreProveedor?.errorMessage}
        hasError={errors.nombreProveedor?.hasError}
        {...getOverrideProps(overrides, "nombreProveedor")}
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
          isDisabled={!(idProp || proveedorModelProp)}
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
              !(idProp || proveedorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
