import { useLayoutEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { DataStore, Storage } from "aws-amplify";
import { Producto, Proveedor } from "../../models";

import Swal from "sweetalert2";

import { Button, TextField, CardHeader, InputAdornment, Card, Snackbar, Alert } from "@mui/material";
import { VisuallyHiddenInput } from "@chakra-ui/react";

import { TbCloudUpload } from "react-icons/tb";
import { VistaPreviaProducto } from "./VistaPreviaProductos";
import AutocompleteNout from "../componentesRecicables/AutocompleteNout";
import { Categorias } from "../../files/Catalogos";

function RegistroProductos({ emailOwner } ) {

  const navigate = useNavigate()
  const [provedor, setProvedor] = useState(null);
  const [imagenURL, setImagenURL] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');  

const PROHIBITED_CHARS = /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g;
const ALPHA_NUMERIC_EXTENDED = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,1500}$/;
const NUMERIC = /^[0-9]+$/;

const validaciones = {
    nombreProducto: {
        maxLength: 150,
        regex: ALPHA_NUMERIC_EXTENDED,
        help: "El campo nombreProducto tiene un máximo de 150 caracteres"
    },
    descripcion: {
        regex: ALPHA_NUMERIC_EXTENDED,
        help: "El campo descripcion tiene un máximo de 900 caracteres"
    },
    stock: {
        regex: NUMERIC,
        maxLength: 4,
        help: "Ingrese un número de stock (hasta 4 dígitos)"
    },
    precio: {
        regex: NUMERIC,
        maxLength: 5,
        help: "Ingresa un precio válido de hasta 5 dígitos numéricos"
    },
};

const handleChange = (event) => {
    const { name, value } = event.target;
    let help = null;
    let error = false;

    if (validaciones[name]) {
        event.target.value = value.replace(PROHIBITED_CHARS, "").replace(/\s{2,}/g, " ");

        const validation = validaciones[name];
        if (!validation.regex.test(value) || value.length > validation.maxLength) {
            help = validation.help;
            error = true;
        }
    }

    if (error) {
        console.log(help);
    }

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
    stock: '',
    imagenURL: imagenURL,
    categoria: '',
    statusVisible: true,
    error: {},
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
      name: "descripcion",
      error: infProducto.error?.descripcion,
      helperText: infProducto.help?.descripcion,
      value: infProducto.descripcion,
    },
    {
      id: 3,
      label: "Precio del producto",
      name: "precio",
      error: infProducto.error?.precio,
      helperText: infProducto.help?.precio,
      value: infProducto.precio,
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
    {
      id: 4,
      label: "Stock del producto",
      name: "stock",
      error: infProducto.error?.stock,
      helperText: infProducto.help?.stock,
      value: infProducto.stock,
    },
  ];

  const guardarProducto = async () => {
    try {
      const productos = new Producto({
        nombreProducto: infProducto.nombreProducto,
        descripcion: infProducto.descripcion,
        precio: parseInt(infProducto.precio),
        imagenURL: imagenURL,
        stock: parseInt(infProducto.stock, 10),
        categoria: infProducto.categoria,
        statusVisible: infProducto.statusVisible,

        proveedorID: provedor.id,
      })
      await DataStore.save(productos);
      return true
    } catch (error) {
      console.error(error);
      throw error;
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
    const { nombreProducto, descripcion, precio, categoria, stock, error } = infProducto;
  
    if (!validateField(nombreProducto, 'El campo Nombre del producto es requerido')) return false;
    if (!validateField(descripcion, 'El campo descripcion es requerido')) return false;
    if (!validateField(precio, 'El campo precio es requerido')) return false;
    if (!validateField(categoria, 'El campo categoria es requerido')) return false;
    if (!validateField(stock, 'El campo stock es requerido')) return false;

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
    if (error.precio) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>precio</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.categoria) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>categoria</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.categoria) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>stock</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.imagenURL) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>Imagen</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    return true;
  };
  
    const handleNext = async () => {
      console.log("Entrando a handleNext");

      try {
          if (validateFieldsForStepZero()) {
              await guardarProducto();
              Swal.fire({
                  title: '¡Registro completado!',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
              }).then(() => {
                  navigate('/inicio-empresa');
              });
          }
      } catch (error) {
          console.error("Error al guardar el producto:", error);
          Swal.fire({
              icon: 'error',
              title: 'Ocurrió un error al guardar el registro',
              confirmButtonText: 'Aceptar',
          });
      }
  };  

useLayoutEffect(() => {
    async function getEmpresa() {
      const proveedor = await DataStore.query(Proveedor, (c) => c.correo.eq(emailOwner));
      setProvedor(proveedor[0]);
    }
    getEmpresa();
  }, [emailOwner]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
  
    try {
      const fileName = 'img/' + file.name; 
      await Storage.put(fileName, file, { level: 'public', type: file.type });
  
      const imageUrl = `https://worklinkerd500aa700a28476bb7438a0dbef726b3222139-prod.s3.amazonaws.com/public/${fileName}`;
      setImagenURL(imageUrl);
  
      // La carga del archivo se realizó con éxito
      console.log('Archivo cargado exitosamente:');
  
      // Muestra una alerta de éxito
      setSnackbarMessage('Imagen guardada exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
  
      // Muestra una alerta de error
      setSnackbarMessage('Error al guardar la imagen');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
  
  
  return (
    <div>
      <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1 }} variant="outlined">
        <CardHeader className="text-center" title="Registro productos"></CardHeader>
        <h5>Datos</h5>
        <Form noValidate>
          <div className="row justify-content-center">
            <Card className="col-xs-12 col-sm-12 col-md-6">
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
                      multiline={input.name === "descripcion"}
                      onChange={handleChange}
                      helperText={input.helperText}
                      error={input.error}
                      InputProps={{
                        startAdornment: input.startAdornment,
                      }}
                    />
                  </div>
                ))}
                <div className="col-sm-12 col-md-6 p-2">
                <AutocompleteNout idInput={"categoria"} nombreInput={"Categoria del producto *"} autoInfo={infProducto} setAutoInfo={setinfProducto} arreglo={Categorias}/>
                </div>
              </div>
              <TextField
                label="Imagen del producto"
                size="normal"
                margin="normal"
                placeholder="Carga imágenes del producto"
                value={imagenURL ? imagenURL : ""}
                InputProps={{
                  endAdornment: (
                    <label htmlFor="icon-button-file">
                      <Button component="span" variant="contained" startIcon={<TbCloudUpload />}
                        sx={{ backgroundColor: '#5c6bc0','&:hover': {backgroundColor: '#3949ab'}}}>
                        Cargar
                      </Button>
                      <VisuallyHiddenInput
                        accept="image/*" id="icon-button-file" type="file" onChange={handleImageUpload} />
                    </label>
                  ),
                }}
                fullWidth
                InputLabelProps={{ shrink: true }}
                disabled
              />
              <div className="d-flex justify-content-between">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="col-sm-12 col-md-6 p-2">
                    <Button variant="contained" onClick={handleNext}>
                      Guardar
                    </Button>
                  </div>
                  <div>
                    <Button style={{ backgroundColor: "red" }} href="/inicio-empresa" variant="contained">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            {/* Vista previa */}
            <div className="col-xs-12 col-sm-12 col-md-6">
              <VistaPreviaProducto data={infProducto} imagenURL={imagenURL} />
            </div>
          </div>
        </Form>
      </Card>
      <Snackbar
        open={openSnackbar} autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         sx={{ '& .MuiSnackbarContent-root': { fontSize: '1.25rem' } }}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}
          sx={{ width: '100%', fontSize: '1rem' }} 
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default RegistroProductos;