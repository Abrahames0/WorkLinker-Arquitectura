import { TextField } from "@mui/material";
import { paisesHablaEspanola } from "../../files/Catalogos";

import AutocompleteReusable from "./Autocomplete";

const validaciones = {
  codigoPostal: {
    regex: /[^0-9]/g,
    regex2: /^(?:[0-9]{5}|[0-9]{0})$/,
    regexToBlock:
      /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~°¬|.,a-zA-ZÑñ@'%#¡,.&+\sáéíóúÁÉÍÓÚ-\s]+/g,
    error: "Ingresa un código postal válido de 5 dígitos númericos",
    help: "Ingresa un código postal válido de 5 dígitos númericos",
  },
  colonia: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,100}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo colonia tiene un máximo 100 caracteres y no son válidos caracteres especiales",
  },
  calle: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]{0,50}$/,
    regexToBlock: /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~@%#¡!°¬|+]+/g,
    error: "",
    help: "El campo Calle tiene un máximo 50 caracteres y no son válidos caracteres especiales",
  },
  numero: {
    regex: /[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]+/g,
    regex2: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]{0,10}$/,
    regexToBlock: /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "a",
    help: "El campo Número exterior o interior de máximo 10 dígitos y no son válidos caracteres especiales",
  },
  municipio: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,100}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo colonia tiene un máximo 100 caracteres y no son válidos caracteres especiales",
  },
  estado: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,150}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo estado tiene un máximo 150 caracteres",
  },
};

const Direcciones = ({ empUbicacion, setEmpUbicacion }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value
      .replace(validaciones[name]?.regexToBlock || /()/g, "")
      .replace(/\s{1,}/g, " ");

    const error = !validaciones[name]?.regex2.test(value)
      ? validaciones[name]?.error
      : null;
    const help = error ? validaciones[name]?.help : null;

    setEmpUbicacion((past) => ({
      ...past,
      [name]: newValue,
      error: { ...past.error, [name]: error },
      help: { ...past.help, [name]: help },
    }));
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (validaciones[name] && value === '') {
      const error = validaciones[name].error;
      setEmpUbicacion(past => ({
        ...past, 
        error: {
          ...past.error, 
          [name]: error
        }
      }));
    }
  };

  const inputs = [
    {
      id: 1,
      label: "Calle",
      name: "calle",
      validations: { maxLength: 50 },
      error: empUbicacion.error?.calle,
      helperText: empUbicacion.help?.calle,
      value: empUbicacion.calle,
    },
    {
      id: 2,
      label: "Número",
      name: "numero",
      validations: { maxLength: 10 },
      error: empUbicacion.error?.numero,
      helperText: empUbicacion.help?.numero,
      value: empUbicacion.numero,
    },
    {
      id: 3,
      label: "Colonia / Localidad",
      name: "colonia",
      validations: { maxLength: 100 },
      error: empUbicacion.error?.colonia,
      helperText: empUbicacion.help?.colonia,
      value: empUbicacion.colonia,
    },
    {
      id: 4,
      label: "Codigo Postal",
      name: "codigoPostal",
      validations: { maxLength: 5 },
      error: empUbicacion.error?.codigoPostal,
      helperText: empUbicacion.help?.codigoPostal,
      value: empUbicacion.codigoPostal,
    },
    {
      id: 5,
      label:"Municipio",
      name: "municipio",
      validations: {maxLength: 150 },
      error: empUbicacion.error?.municipio,
      helperText: empUbicacion.help?.municipio,
      value: empUbicacion.municipio,
    },
    {
      id: 6,
      label:"Estado",
      name: "estado",
      validations: {maxLength: 150 },
      error: empUbicacion.error?.estado,
      helperText: empUbicacion.help?.estado,
      value: empUbicacion.estado,
    }
  ];

  return (
    <div className="row p-2">
      <h6>Direccion</h6>
      <div className="row p-2">
        {inputs.map((input) => (
          <div className="col-sm-12 col-md-6 p-2" key={input.id}>
            <TextField
                  value={empUbicacion[input.name] || ""}
                  label={input.label}
                  multiline={false}
                  size="normal"
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={input.name}
                  fullWidth
                  required
                  inputProps={input.validations}
                  error={!!input.error}
                  helperText={input.helperText}
                  onPaste={(e) => e.preventDefault()}
                />
          </div>
        ))}
        <div className='col-sm-12 col-md-6 p-2 col-12'>
          <AutocompleteReusable idInput={"pais"} nombreInput={"Pais *"} autoInfo={empUbicacion} setAutoInfo={setEmpUbicacion} arreglo={paisesHablaEspanola} />
        </div>
      </div>
    </div>
  );
};

export default Direcciones;