import { Button, TextField, Box, Card, CardHeader } from "@mui/material";
import Form from "react-bootstrap/Form";

import Direciones from "../../componentesRecicables/Direcciones";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function RegistroUsuarioInformacion() {

  const [userEmail] = useState('');

  const [empContacto, setEmpContacto] = useState({
    nombreComercial: '', email: userEmail, telefono: '', logo: null, nombreLogo: ''
  })

  useEffect(() => {
    // Obtener el correo del usuario y guardarlo en el estado
    async function getCurrentUserEmail() {
      const userInfo = await Auth.currentUserInfo()
      const userEmail = userInfo.attributes.email
      setEmpContacto(prevState => ({ ...prevState, email: userEmail }))
    }
    getCurrentUserEmail()
  }, [])

  return (
    <Box>
      <div>
        <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1,}} variant="outlined">
          <CardHeader className="text-center" title="Registro de Usuario"></CardHeader>
          <Form noValidate /* onSubmit={handleSubmit} */>
            <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
                <h6>Datos personales</h6>
                <div className="row p-2">
                  <div className="col-sm-12 col-md-6 p-2">
                    <TextField fullWidth label="Nombres" name="nombres" />
                  </div>
                  <div className="col-sm-12 col-md-6 p-2">
                    <TextField fullWidth label="Apellidos" name="apellido" />
                  </div>
                  <div className="col-sm-12 col-md-6 p-2">
                    <TextField fullWidth label="Correo" name="correo" value={empContacto.email} />
                  </div>
                  <div className="col-sm-12 col-md-6 p-2">
                    <TextField fullWidth label="Telefono" name="telefono" />
                  </div>
                </div>
                <h6>Direccion</h6>
                <div>
                  <Direciones />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="col-sm-12 col-md-6 p-2">
                        <Button variant="contained">Guardar</Button>
                    </div>
                    <div>
                        <Button style={{backgroundColor: "red"}} href="/inicio-usuarios" variant="contained"> Cancelar </Button>
                    </div>
                </div>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </Box>
  );
}

export default RegistroUsuarioInformacion;
