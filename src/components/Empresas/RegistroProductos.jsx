import { useEffect, useLayoutEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { Auth, DataStore } from "aws-amplify";
import { Producto, Proveedor } from "../../models";

import Swal from "sweetalert2";

import { Button, TextField, Card, CardHeader } from "@mui/material";



function RegistroProductos( emailOwner ) {

  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [provedor, setProvedor] = useState({})

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

    // Verificar si existe un error antes de actualizar el estado
    setinfProducto((past) => ({
      ...past,
      [name]: event.target.value,
      error: { ...past.error, [name]: error },
      help: { ...past.help, [name]: help },
    }));
  };

  const [infProducto, setinfProducto] = useState({
    nombreProducto: '',
    descripcion: '',
    precio: '',
    imagenURL: '',
    categoria: '',
    stock: {},
    help: {}
  });

  const inputs = [
    {
      id: 1,
      label: "Nombre del producto",
      name: "nombreProducto",
      validations: { maxLength: 250 },
      error: infProducto.error?.nombreProducto,
      helperText: infProducto.help?.nombreProducto,
      value: infProducto.nombreProducto,
    },
    {
      id: 2,
      label: "Descripcion del producto",
      name: "descripcionProducto",
      error: infProducto.error?.descripcion,
      helperText: infProducto.help?.descripcion,
      value: infProducto.descripcion,
    },

    {
      id: 3,
      label: "Precio del producto",
      name: "precioProducto",
      error: infProducto.error?.precio,
      helperText: infProducto.help?.precio,
      value: infProducto.precio,
    },
  ];

  const guardarProducto = async () => {
    try {
      const proveedores = new Producto({
        nombreProducto: infProducto.nombreProducto,
        descripcion: infProducto.descripcion,
        precio: infProducto.precio,
        stock: infProducto.stock,
        imagenURL: infProducto.imagenURL,
        categoria: infProducto.categoria,

        proveedorID: provedor.proveedorID
      })
      await DataStore.save(proveedores);
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /* const validateField = (field, message) => {
    if (!field || typeof field !== 'string' || field.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: message,
        confirmButtonText: 'Aceptar',
      })
      return false
    }
    return true
  } */

  /* const validateFieldsForStepZero = () => {
    const { nombreProducto, descripcion, error } = infProducto;
  
    if (!validateField(nombreProducto, 'El campo Nombre del producto es requerido')) return false;
    if (!validateField(descripcion, 'El campo descripcion es requerido')) return false;
    if (error.nombreProducto) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>nombre del producto</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.descripcion) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>descripcion del producto</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    return true;
  }; */
  
  
 /*  const handleNext = async () => {
    console.log("¿Entra a handleNext?");

    console.log("Valor de activeStep:", activeStep);
    switch (activeStep) {
      case 0:
        if (validateFieldsForStepZero()) {
          localStorage.setItem('infProducto', JSON.stringify(infProducto));
          setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
        break;
  
      case 2:
        const guardadoCorrectamente = await guardarProducto();
        console.log(guardadoCorrectamente);

        if (guardadoCorrectamente) {
          Swal.fire({
            title: '¡Registro completado!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            navigate('/inicio-empresa');
          });
        }  else {
          Swal.fire({
            icon: 'error',
            title: 'Ocurrió un error al guardar el registro',
            confirmButtonText: 'Aceptar',
          });
        }
        break;
      default:
        break;
    }
} */

useLayoutEffect(() => {
    async function getEmpresa() {
      const proveedor = await DataStore.query(Proveedor, (c) => c.email.eq(emailOwner));
      setProvedor(proveedor[0]);
    }
    getEmpresa();
  }, [emailOwner]);

  return (
    <div>
      <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1 }} variant="outlined">
        <CardHeader className="text-center" title="Registro productos"> </CardHeader>
        <Form noValidate /* onSubmit={handleSubmit} */>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
              <h6>Datos</h6>
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
              <div
                style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
                <div className="col-sm-12 col-md-6 p-2">
                  <Button variant="contained" onClick={"hola"} >Guardar</Button> 
                </div>
                <div>
                  <Button style={{ backgroundColor: "red" }} href="/inicio-usuarios" variant="contained">
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
}
export default RegistroProductos;