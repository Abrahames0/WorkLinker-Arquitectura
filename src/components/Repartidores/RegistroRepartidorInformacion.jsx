import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";

import { Auth, DataStore } from "aws-amplify";

import Swal from "sweetalert2";

import { Button, TextField, Card, CardHeader } from "@mui/material";

import { Repartidor } from "../../models";


function RegistroRepartidorInformacion() {
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = false;
    let help = null;

    const validaciones = {
      nombreComercial: {
        regex: /[^0-9()a-zA-ZñÑáéíóúÜüÁÉÍÓÚ@&':,%#¡.&+\s-]+/g,
        regex2: /^[0-9()a-zA-ZñÑáéíóúÜüÁÉÍÓÚ@&':,%#¡.&+\s-]{0,250}$/,
        error: true,
        help: "Ingresa un Nombre comercial de máximo 250 caracteres válido (No son validos caracteres númericos y especiales).",
      },
      telefono: {
        regex: /[^0-9]/g,
        regex2: /^[0-9]{10}$/,
        error: true,
        help: "Ingrese un número de teléfono válido (10 dígitos).",
      },
    };

    if (validaciones[name]) {
      event.target.value = event.target.value
        .replace(validaciones[name].regex, "")
        .replace(/\s{1,}/g, " ");
      if (!validaciones[name].regex2.test(value)) {
        help = validaciones[name].help;
        error = validaciones[name].error;
      }
    }

    setEmpContacto((past) => ({
      ...past,
      [name]: event.target.value,
      error: { ...past.error, [name]: error },
      help: { ...past.help, [name]: help },
    }));
  };

  const [userEmail] = useState("");

  const [empContacto, setEmpContacto] = useState({
    nombreRepartidor: '',
    descripcionRepartidor: '',
    email: userEmail,
    error: {},
    help: {}
  });
  

  const inputs = [
    {
      id: 1,
      label: "Nombre Repartidor",
      name: "nombreRepartidor",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombreUsuario,
      helperText: empContacto.help?.nombreUsuario,
      value: empContacto.nombreUsuario,
    },
    {
      id: 2,
      label: "Descripcion del pepartidor",
      name: "descripcionRepartidor",
      error: empContacto?.error?.apellidoUsuario,
      helperText: empContacto.help?.apellidoUsuario,
      value: empContacto.apellidoUsuario,
    },
    {
      id: 3,
      label: "Correo electrónico",
      name: "email",
      value: empContacto.email,
    },
  ];

  const guardarRepartidores = async () => {
    try {
      const repartidores = new Repartidor({
        nombreRepartidor: empContacto.nombreRepartidor,
        descripcionRepartidor: empContacto.descripcionRepartidor,
        correo: empContacto.email,
      })
      await DataStore.save(repartidores);
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  }
    
  const handleSave = async () => {
    
    const guardadoCorrectamente = await guardarRepartidores();
    if (guardadoCorrectamente) {
      Swal.fire({
        title: '¡Registro completado!',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        Navigate('/inicio-repartidores');
        window.location.reload();
    });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error al guardar el registro',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  useEffect(() => {
    async function getCurrentUserEmail() {
      const userInfo = await Auth.currentUserInfo();
      const userEmail = userInfo.attributes.email;
      setEmpContacto((prevState) => ({ ...prevState, email: userEmail }));
    }
    getCurrentUserEmail();
  }, []);

  return (
    <div>
      <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1 }} variant="outlined">
        <CardHeader className="text-center" title="Registro de Usuario"> </CardHeader>
        <Form noValidate >
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
              <h6>Datos personales</h6>
              <div className="row p-2">
                {inputs.map((input) => (
                  <div className="col-sm-12 col-md-6 p-2" key={input.id}>
                    <TextField
                      key={input.id}
                      style={{ width: "100%" }}
                      required
                      size="normal"
                      margin="normal"
                      name={input.name}
                      label={input.label}
                      inputProps={input.validations}
                      value={input.value}
                      multiline={false}
                      onPaste={(e) => e.preventDefault()}
                      onChange={handleChange}
                      helperText={input.helperText}
                      error={input.error}
                      disabled={input.name === "email"} 
                    />
                  </div>
                ))}
              </div>
              <div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
                  <div>
                  <Button style={{ backgroundColor: "red" }} href="/inicio-usuarios" variant="contained">
                    Cancelar
                  </Button>
                </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <Button variant="contained" onClick={handleSave} >Guardar</Button> 
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
}
export default RegistroRepartidorInformacion;