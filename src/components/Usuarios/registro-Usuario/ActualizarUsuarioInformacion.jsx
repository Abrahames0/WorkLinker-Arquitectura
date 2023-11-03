import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Navigate, } from "react-router-dom";

import { DataStore } from "aws-amplify";

import Swal from "sweetalert2";

import { Button, TextField, Card, CardHeader, DialogActions, Dialog } from "@mui/material";

import Direcciones from "../../componentesRecicables/Direcciones";
import { Usuarios } from "../../../models";



function ActualizarUsuarioInformacion({open, handleClose, usuario, usuarioId}) {

    const [infProducto, setinfProducto] = useState({
        ...usuario,
        error: {},
        help: {}
     });

     const [empUbicacion, setEmpUbicacion] = useState({
        calle: "", numero: "", colonia: "", codigoPostal: "", municipio: "", estado: "", pais:"",
      })

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
    
        setinfProducto((past) => ({
          ...past,
          [name]: event.target.value,
          error: { ...past.error, [name]: error },
          help: { ...past.help, [name]: help },
        }));
      };

    const inputs = [
        {
          id: 1,
          label: "Nombres",
          name: "nombreUsuario",
          validations: { maxLength: 250 },
          error: infProducto?.error?.nombreUsuario,
          helperText: infProducto.help?.nombreUsuario,
          value: infProducto.nombreUsuario,
        },
        {
          id: 2,
          label: "Apellidos",
          name: "apellidoUsuario",
          validations: { maxLength: 250 },
          error: infProducto?.error?.apellidoUsuario,
          helperText: infProducto.help?.apellidoUsuario,
          value: infProducto.apellidoUsuario,
        },
        {
          id: 3,
          label: "Correo electrónico",
          name: "email",
          value: infProducto.email,
        },
        {
          id: 4,
          label: "Número de teléfono",
          name: "telefono",
          validations: { maxLength: 10 },
          error: infProducto.error?.telefono,
          helperText: infProducto.help?.telefono,
          value: infProducto.telefono,
        },
      ];

    const ActualizarUsuario = async () => {
        try {
          const originalUsuario = await DataStore.query(Usuarios, usuario.id);
      
          await DataStore.save(
            Usuarios.copyOf(originalUsuario, updated => {
              updated.nombreUsuario = infProducto.nombreUsuario;
              updated.apellidoUsuario = infProducto.apellidoUsuario;
              updated.telefono = infProducto.telefono;
              updated.calleUsuario = infProducto.calleUsuario;
              updated.numeroUsuario = infProducto.numeroUsuario;
              updated.colonia = infProducto.colonia;
              updated.codigoPostalUsuario = infProducto.codigoPostalUsuario;
              updated.municipioUsuario = infProducto.municipioUsuario
              updated.estadoUsuario = infProducto.estadoUsuario;
              updated.paisUsuario = infProducto.paisUsuario;              
            })
          );
      
          return true;
        } catch (error) {
          console.error(error);
          throw error;
        }
    };

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
        const { nombreUsuario, apellidoUsuario, telefono, error } = setinfProducto;
      
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

      const handleNext = async () => {
        console.log("Entrando a handleNext");
        try {
            if (validateFieldsForStepZero() && validateFieldsForStepTwo()) {
                const updated = await ActualizarUsuario();
                if (updated) {
                    handleClose();
                    Swal.fire({
                        title: '¡Producto actualizado!',
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                    }).then(() => {
                        Navigate('/inicio-empresa');
                        window.location.reload();
                    });
                }
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizar el registro',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    useEffect(() => {
        const fetchProducto = async () => {
            if (usuarioId) {
                try {
                    const usuarios = await DataStore.query(Usuarios, usuarioId);
                    if (usuarios) {
                        setinfProducto({
                            nombreUsuario: usuarios.nombreUsuario,
                            apellidoUsuario: usuarios.apellidoUsuario,
                            correo: usuarios.correo,
                            telefono: usuarios.telefono,
                            calleUsuario: usuarios.calleUsuario,
                            numeroUsuario: usuarios.numeroUsuario,
                            colonia: usuarios.colonia,
                            codigoPostalUsuario: usuarios.codigoPostal,
                            municipioUsuario: usuarios.municipioUsuario,
                            estadoUsuario: usuarios.estadoUsuario,
                            paisUsuario: usuarios.paisUsuario,
                            error: {},
                            help: {}
                        });
                    }
                } catch (error) {
                    console.error("Error al obtener el producto:", error);
                }
            }
        };
        
        fetchProducto();
    }, [usuarioId]);

    return(
    <Dialog open={open} onClose={handleClose}>
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
            </div>
          </div>
        </Form>
      </Card>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleNext} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
    ) 
}

export default ActualizarUsuarioInformacion;