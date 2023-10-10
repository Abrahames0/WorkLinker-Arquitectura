/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Empresa } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EmpresaCreateForm(props) {
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
    nombreEmpresa: "",
    emailEmpresa: "",
    calleEmpresa: "",
    numeroEmpresa: "",
    ciudadEmpresa: "",
    codigoPostalEmpresa: "",
    estadoEmpresa: "",
    paisEmpresa: "",
  };
  const [nombreEmpresa, setNombreEmpresa] = React.useState(
    initialValues.nombreEmpresa
  );
  const [emailEmpresa, setEmailEmpresa] = React.useState(
    initialValues.emailEmpresa
  );
  const [calleEmpresa, setCalleEmpresa] = React.useState(
    initialValues.calleEmpresa
  );
  const [numeroEmpresa, setNumeroEmpresa] = React.useState(
    initialValues.numeroEmpresa
  );
  const [ciudadEmpresa, setCiudadEmpresa] = React.useState(
    initialValues.ciudadEmpresa
  );
  const [codigoPostalEmpresa, setCodigoPostalEmpresa] = React.useState(
    initialValues.codigoPostalEmpresa
  );
  const [estadoEmpresa, setEstadoEmpresa] = React.useState(
    initialValues.estadoEmpresa
  );
  const [paisEmpresa, setPaisEmpresa] = React.useState(
    initialValues.paisEmpresa
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreEmpresa(initialValues.nombreEmpresa);
    setEmailEmpresa(initialValues.emailEmpresa);
    setCalleEmpresa(initialValues.calleEmpresa);
    setNumeroEmpresa(initialValues.numeroEmpresa);
    setCiudadEmpresa(initialValues.ciudadEmpresa);
    setCodigoPostalEmpresa(initialValues.codigoPostalEmpresa);
    setEstadoEmpresa(initialValues.estadoEmpresa);
    setPaisEmpresa(initialValues.paisEmpresa);
    setErrors({});
  };
  const validations = {
    nombreEmpresa: [],
    emailEmpresa: [],
    calleEmpresa: [],
    numeroEmpresa: [],
    ciudadEmpresa: [],
    codigoPostalEmpresa: [],
    estadoEmpresa: [],
    paisEmpresa: [],
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
          nombreEmpresa,
          emailEmpresa,
          calleEmpresa,
          numeroEmpresa,
          ciudadEmpresa,
          codigoPostalEmpresa,
          estadoEmpresa,
          paisEmpresa,
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
          await DataStore.save(new Empresa(modelFields));
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
      {...getOverrideProps(overrides, "EmpresaCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre empresa"
        isRequired={false}
        isReadOnly={false}
        value={nombreEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa: value,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.nombreEmpresa ?? value;
          }
          if (errors.nombreEmpresa?.hasError) {
            runValidationTasks("nombreEmpresa", value);
          }
          setNombreEmpresa(value);
        }}
        onBlur={() => runValidationTasks("nombreEmpresa", nombreEmpresa)}
        errorMessage={errors.nombreEmpresa?.errorMessage}
        hasError={errors.nombreEmpresa?.hasError}
        {...getOverrideProps(overrides, "nombreEmpresa")}
      ></TextField>
      <TextField
        label="Email empresa"
        isRequired={false}
        isReadOnly={false}
        value={emailEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa: value,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.emailEmpresa ?? value;
          }
          if (errors.emailEmpresa?.hasError) {
            runValidationTasks("emailEmpresa", value);
          }
          setEmailEmpresa(value);
        }}
        onBlur={() => runValidationTasks("emailEmpresa", emailEmpresa)}
        errorMessage={errors.emailEmpresa?.errorMessage}
        hasError={errors.emailEmpresa?.hasError}
        {...getOverrideProps(overrides, "emailEmpresa")}
      ></TextField>
      <TextField
        label="Calle empresa"
        isRequired={false}
        isReadOnly={false}
        value={calleEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa: value,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.calleEmpresa ?? value;
          }
          if (errors.calleEmpresa?.hasError) {
            runValidationTasks("calleEmpresa", value);
          }
          setCalleEmpresa(value);
        }}
        onBlur={() => runValidationTasks("calleEmpresa", calleEmpresa)}
        errorMessage={errors.calleEmpresa?.errorMessage}
        hasError={errors.calleEmpresa?.hasError}
        {...getOverrideProps(overrides, "calleEmpresa")}
      ></TextField>
      <TextField
        label="Numero empresa"
        isRequired={false}
        isReadOnly={false}
        value={numeroEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa: value,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.numeroEmpresa ?? value;
          }
          if (errors.numeroEmpresa?.hasError) {
            runValidationTasks("numeroEmpresa", value);
          }
          setNumeroEmpresa(value);
        }}
        onBlur={() => runValidationTasks("numeroEmpresa", numeroEmpresa)}
        errorMessage={errors.numeroEmpresa?.errorMessage}
        hasError={errors.numeroEmpresa?.hasError}
        {...getOverrideProps(overrides, "numeroEmpresa")}
      ></TextField>
      <TextField
        label="Ciudad empresa"
        isRequired={false}
        isReadOnly={false}
        value={ciudadEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa: value,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.ciudadEmpresa ?? value;
          }
          if (errors.ciudadEmpresa?.hasError) {
            runValidationTasks("ciudadEmpresa", value);
          }
          setCiudadEmpresa(value);
        }}
        onBlur={() => runValidationTasks("ciudadEmpresa", ciudadEmpresa)}
        errorMessage={errors.ciudadEmpresa?.errorMessage}
        hasError={errors.ciudadEmpresa?.hasError}
        {...getOverrideProps(overrides, "ciudadEmpresa")}
      ></TextField>
      <TextField
        label="Codigo postal empresa"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={codigoPostalEmpresa}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa: value,
              estadoEmpresa,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostalEmpresa ?? value;
          }
          if (errors.codigoPostalEmpresa?.hasError) {
            runValidationTasks("codigoPostalEmpresa", value);
          }
          setCodigoPostalEmpresa(value);
        }}
        onBlur={() =>
          runValidationTasks("codigoPostalEmpresa", codigoPostalEmpresa)
        }
        errorMessage={errors.codigoPostalEmpresa?.errorMessage}
        hasError={errors.codigoPostalEmpresa?.hasError}
        {...getOverrideProps(overrides, "codigoPostalEmpresa")}
      ></TextField>
      <TextField
        label="Estado empresa"
        isRequired={false}
        isReadOnly={false}
        value={estadoEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa: value,
              paisEmpresa,
            };
            const result = onChange(modelFields);
            value = result?.estadoEmpresa ?? value;
          }
          if (errors.estadoEmpresa?.hasError) {
            runValidationTasks("estadoEmpresa", value);
          }
          setEstadoEmpresa(value);
        }}
        onBlur={() => runValidationTasks("estadoEmpresa", estadoEmpresa)}
        errorMessage={errors.estadoEmpresa?.errorMessage}
        hasError={errors.estadoEmpresa?.hasError}
        {...getOverrideProps(overrides, "estadoEmpresa")}
      ></TextField>
      <TextField
        label="Pais empresa"
        isRequired={false}
        isReadOnly={false}
        value={paisEmpresa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreEmpresa,
              emailEmpresa,
              calleEmpresa,
              numeroEmpresa,
              ciudadEmpresa,
              codigoPostalEmpresa,
              estadoEmpresa,
              paisEmpresa: value,
            };
            const result = onChange(modelFields);
            value = result?.paisEmpresa ?? value;
          }
          if (errors.paisEmpresa?.hasError) {
            runValidationTasks("paisEmpresa", value);
          }
          setPaisEmpresa(value);
        }}
        onBlur={() => runValidationTasks("paisEmpresa", paisEmpresa)}
        errorMessage={errors.paisEmpresa?.errorMessage}
        hasError={errors.paisEmpresa?.hasError}
        {...getOverrideProps(overrides, "paisEmpresa")}
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
