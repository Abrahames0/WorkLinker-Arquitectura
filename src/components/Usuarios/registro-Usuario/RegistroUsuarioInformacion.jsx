import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { Auth, DataStore } from "aws-amplify";

import Swal from "sweetalert2";

import { Button, TextField, Card, CardHeader } from "@mui/material";

import Direcciones from "../../componentesRecicables/Direcciones";
import { Usuarios } from "../../../models";


function RegistroUsuarioInformacion() {
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
    nombreUsuario: '',
    apellidoUsuario: '',
    email: userEmail,
    telefono: '',
    error: {},
    help: {}
  });
  
  const [empUbicacion, setEmpUbicacion] = useState({
    calle: "", numero: "", colonia: "", codigoPostal: "", municipio: "", estado: "", pais:"",
  })

  const inputs = [
    {
      id: 1,
      label: "Nombres",
      name: "nombreUsuario",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombreUsuario,
      helperText: empContacto.help?.nombreUsuario,
      value: empContacto.nombreUsuario,
    },
    {
      id: 2,
      label: "Apellidos",
      name: "apellidoUsuario",
      validations: { maxLength: 250 },
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
    {
      id: 4,
      label: "Número de teléfono",
      name: "telefono",
      validations: { maxLength: 10 },
      error: empContacto.error?.telefono,
      helperText: empContacto.help?.telefono,
      value: empContacto.telefono,
    },
  ];

  const guardarUsuarios = async () => {
    try {
      const usuarios = new Usuarios({
        nombreUsuario: empContacto.nombreUsuario,
        apellidoUsuario: empContacto.apellidoUsuario,
        correo: empContacto.email,
        telefono: empContacto.telefono,
        calleUsuario: empUbicacion.calle,
        numeroUsuario: empUbicacion.numero,
        colonia: empUbicacion.colonia,
        codigoPostalUsuario: parseInt(empUbicacion.codigoPostal, 5),
        municipioUsuario: empUbicacion.municipio,
        estadoUsuario: empUbicacion.estado,
        paisUsuario: empUbicacion.pais,
      })
      await DataStore.save(usuarios);
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const validateField = (field, message) => {
    if (!field || typeof field !== 'string' || field.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: message,
        confirmButtonText: 'Aceptar',
      })
      return false
    }
    return true
  }

  const validateFieldsForStepZero = () => {
    const { nombreUsuario, apellidoUsuario, telefono, error } = empContacto;
  
    if (!validateField(nombreUsuario, 'El campo Nombre es requerido')) return false;
    if (!validateField(apellidoUsuario, 'El campo Apellido es requerido')) return false;
    if (!validateField(telefono, 'El campo Número de télefono es requerido')) return false;
    if (error.nombreUsuario) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>nombre</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.apellidoUsuario) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>apellido</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.telefono) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>número de teléfono</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    return true;
  };
  
  const validateFieldsForStepTwo = () => {
    const fields = ['municipio', 'codigoPostal', 'colonia', 'calle', 'numero', 'estado', 'pais'];
    for (let field of fields) {
      if (!validateField(empUbicacion[field], `El campo ${field} es requerido`)) return false;
    }
    return true;
  };
  
  const handleSave = async () => {
    if (!validateFieldsForStepZero() || !validateFieldsForStepTwo()) {
      return;
    }
    
    const guardadoCorrectamente = await guardarUsuarios();
    if (guardadoCorrectamente) {
      Swal.fire({
        title: '¡Registro completado!',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        navigate('/inicio-usuarios');
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
        <Form noValidate /* onSubmit={handleSubmit} */>
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
                <Direcciones empUbicacion={empUbicacion} setEmpUbicacion={setEmpUbicacion}/>
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
export default RegistroUsuarioInformacion;