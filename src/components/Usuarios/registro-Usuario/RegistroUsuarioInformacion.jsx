import { Button, TextField } from "@mui/material";
import Direciones from "../../componentesRecicables/Direcciones";

function RegistroUsuarioInformacion() {
  return (
    <div>
      <h6>Datos personales</h6>
      <div className="row p-2">
        <div className="col-sm-12 col-md-6 p-2">
          <TextField fullWidth label="Nombres" name="nombres" />
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <TextField fullWidth label="Apellidos" name="apellido" />
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <TextField fullWidth label="Correo" name="correo" />
        </div>
        <div className="col-sm-12 col-md-6 p-2">
          <TextField fullWidth label="Telefono" name="telefono" />
        </div>
      </div>
      <h6>Direccion</h6>
      <div>
        <Direciones />
      </div>
      <div className="text-al">
        <Button variant="contained">Guardar</Button>
        <Button variant="contained">Cancelar</Button>
      </div>
    </div>
  );
}

export default RegistroUsuarioInformacion;
