import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import { Producto } from "../../models";
import { DataStore, Storage } from "aws-amplify";

import { Categorias } from "../../files/Catalogos";
import AutocompleteNout from "../componentesRecicables/AutocompleteNout";
import './Editar.css';

import Swal from "sweetalert2";
import { VisuallyHiddenInput } from "@chakra-ui/react";
import { TextField, CardHeader, InputAdornment, } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormLabel, Switch } from "@mui/material";

import { VistaPreviaProducto } from './VistaPreviaProductos';
import { TbCloudUpload } from "react-icons/tb";


function EditarProducto({ open, handleClose, productoId, producto }) {
    const navigate = useNavigate()
    const [imagenURL, setImagenURL] = useState(null);
    const [statusVisible, setStatusVisible] = useState(true); // o true, dependiendo del valor inicial que quieras.

  const PROHIBITED_CHARS = /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g;
  const ALPHA_NUMERIC_EXTENDED = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,150}$/;
  const NUMERIC = /^[0-9]+$/;
  
  const validaciones = {
      nombreProducto: {
          maxLength: 150,
          regex: ALPHA_NUMERIC_EXTENDED,
          help: "El campo nombreProducto tiene un máximo de 150 caracteres"
      },
      descripcion: {
          maxLength: 1500,
          regex: ALPHA_NUMERIC_EXTENDED,
          help: "El campo descripcion tiene un máximo de 1500 caracteres"
      },
      stock: {
          regex: NUMERIC,
          maxLength: 10,
          help: "Ingrese un número de stock (hasta 10 dígitos)"
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
        ...producto,
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
        validations: { maxLength: 1500 },
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
  
    const ActualizarProducto = async () => {
        try {
          const originalProducto = await DataStore.query(Producto, producto.id);
      
          await DataStore.save(
            Producto.copyOf(originalProducto, updated => {
              updated.nombreProducto = infProducto.nombreProducto;
              updated.descripcion = infProducto.descripcion;
              updated.precio = parseInt(infProducto.precio);
              updated.imagenURL = imagenURL;
              updated.stock = parseInt(infProducto.stock, 10);
              updated.categoria = infProducto.categoria;
            })
          );
      
          return true;
        } catch (error) {
          console.error(error);
          throw error;
        }
    }

    const handleSwitchChange = async (event) => {
      try {
          const newValue = event.target.checked; // Esta es la nueva valor del interruptor, ya sea true o false.
          setStatusVisible(newValue); // Actualizas el estado local con el nuevo valor.
  
          // Obtienes el producto original de la base de datos.
          const originalProducto = await DataStore.query(Producto, producto.id);
          if (originalProducto) {
              await DataStore.save(
                  Producto.copyOf(originalProducto, updated => {
                      updated.statusVisible = newValue; // Aquí es donde necesitas pasar el nuevo valor.
                  })
              );
          }
      } catch (error) {
          console.error(error);
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
      const { nombreProducto, descripcion, precio, categoria, stock, error } = infProducto;
    
      if (!validateField(nombreProducto, 'El campo Nombre del producto es requerido')) return false;
      if (!validateField(descripcion, 'El campo descripcion es requerido')) return false;
      /* if (!validateField(precio, 'El campo precio es requerido')) return false; */
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
      return true;
    };
    
    const handleNext = async () => {
        console.log("Entrando a handleNext");
        try {
            if (validateFieldsForStepZero()) {
                await ActualizarProducto();
                handleClose();
    
                Swal.fire({
                    title: '¡Producto actualizado!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(() => {
                    navigate('/inicio-empresa');
    
                    window.location.reload();
                });
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
    
    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
    
      try {
        const fileName = 'img/' + file.name; 
        await Storage.put(fileName, file, { level: 'public', type: file.type });
    
       const imageUrl = `https://worklinkerd500aa700a28476bb7438a0dbef726b3222139-prod.s3.amazonaws.com/public/${fileName}`;
        setImagenURL(imageUrl);
    
        // La carga del archivo se realizó con éxito
        console.log('Archivo cargado exitosamente:', imageUrl);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
        // Maneja el error aquí
      }
    };

    useEffect(() => {
        const fetchProducto = async () => {
            if (productoId) {
                try {
                    const producto = await DataStore.query(Producto, productoId);
                    if (producto) {
                        setinfProducto({
                            nombreProducto: producto.nombreProducto,
                            descripcion: producto.descripcion,
                            precio: parseInt(producto.precio),
                            stock: producto.stock.toString(),
                            imagenURL: producto.imagenURL,
                            categoria: producto.categoria,
                            statusVisible: producto.statusVisible,
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
    }, [productoId]);    

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar producto</DialogTitle>
      <DialogContent>
        <CardHeader className="text-center" title="Registro productos"></CardHeader>
        <Form noValidate>
          <div className="row justify-content-center">
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
                <div className="col-sm-12 col-md-6 p-2">
                    <FormLabel component="legend">Dar de baja logica</FormLabel>
                    
                    <span>Sí</span>
                    <Switch checked={statusVisible} onChange={handleSwitchChange} />
                    <span>No</span>
                </div>
              </div>
              <TextField
                label="Imagen del producto"
                size="normal"
                margin="normal"
                placeholder="Carga imagenes del producto "
                value={infProducto?.imagenURL ? infProducto.imagenURL : ""}
                InputProps={{
                  endAdornment: (
                    <Button component="label" variant="contained" startIcon={<TbCloudUpload />}>
                      Cargar
                      <VisuallyHiddenInput type="file" onChange={handleImageUpload} accept="image/*"/>
                    </Button>
                  ),
                }}
                fullWidth
                InputLabelProps={{ shrink: true }}
                disabled
              />
            <div >
              <VistaPreviaProducto data={infProducto} imagenURL={producto.imagenURL} />
            </div>
          </div>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleNext} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditarProducto;