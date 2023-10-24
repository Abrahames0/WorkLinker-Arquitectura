import { FormControl, InputLabel, TextField } from "@mui/material";

const Direciones = () => {

    
  const validaciones = {
    municipio: {
      regex: /[^0-9a-zA-ZñÑáéíóúÁÉÍÓÚ,.´\s&-]/g,
      regex2: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s-]+$/g,
      help: "Ingrese un Municipio",
      error: "",
    },
    colonia: {
      regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
      regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,100}$/,
      help: "",
      error:
        "El campo Colonia tiene un máximo 100 caracteres y no son válidos caracteres especiales",
    },
    calle: {
      regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]/g,
      regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]{0,50}$/,
      help: "",
      error:
        "El campo Calle tiene un máximo 50 caracteres y no son válidos caracteres especiales",
    },
    numero: {
      regex: /[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]?$/g,
      regex2: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]/g,
      help: "",
      error:
        "El campo Número exterior o interior de máximo 10 dígitos y no son válidos caracteres especiales",
    },
    codigoPostal: {
      regex: /[^0-9]/g,
      regex2: /^[0-9]{5}$/,
      help: "",
      error: "Ingresa un código postal válido de 5 dígitos númericos",
    },
  };

  return (
    <div className="row p-2">
      <div className="col-sm-12 col-md-6 p-2">
        <FormControl fullWidth>
          <InputLabel>Municipio</InputLabel>
        </FormControl>
      </div>
      <div className="col-sm-12 col-md-6 p-2">
        <TextField fullWidth label="Colonia / Localidad" name="colonia" />
      </div>
      <div className="col-sm-12 col-md-6 p-2">
        <TextField fullWidth label="Calle" name="calle" />
      </div>
      <div className="col-sm-12 col-md-6 p-2 pb-0">
        <TextField fullWidth label="Número exterior o interior" name="numero" />
      </div>
      <div className="col-sm-12 col-md-6 p-2">
        <TextField fullWidth label="Código postal" name="codigoPostal" />
      </div>
      <div></div>
    </div>
  );
};

export default Direciones;
