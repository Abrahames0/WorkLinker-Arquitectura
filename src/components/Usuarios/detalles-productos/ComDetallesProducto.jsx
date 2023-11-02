import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Paper, IconButton, TextField, Box, Snackbar, Alert } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import { Producto, Carrito, ProductoCarrito, Usuarios } from '../../../models';
import Loader from '../../componentesRecicables/Loader';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ComDetallesProducto = ({ email }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await DataStore.query(Producto, id);
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const checkStock = (qty) => {
    return qty <= product.stock;
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      if (checkStock(newQuantity)) {
        return newQuantity;
      } else {
        setAlert(true); 
        return prevQuantity;
      }
    });
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (checkStock(newQuantity)) {
      setQuantity(newQuantity > 0 ? newQuantity : 1);
    } else {
      setAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  if (!product) {
    return <Loader />;
  }

  /* const obtenerCarritoUsuario = async (userID) => {
    try {
        // Crear un nuevo carrito
        const nuevoCarrito = await DataStore.save(
            new Carrito({
                "TotalCarrito": 0, // inicializar con 0 o el valor que prefieras
                // Asegúrate de que todos los campos necesarios estén aquí
            })
        );

        // Aquí podrías asociar el carrito al usuario si es necesario
        // ...

        return nuevoCarrito.id;
    } catch (error) {
        console.error('Error al obtener o crear el carrito del usuario:', error);
    }

    return null;
}; */
const obtenerCarritoUsuario = async (email) => {
  try {
    const todosLosUsuarios = await DataStore.query(Usuarios);
    console.log('Todos los usuarios:', todosLosUsuarios); // Imprime todos los usuarios para depuración

    // Encuentra un usuario que coincida con el correo electrónico proporcionado
    const usuario = todosLosUsuarios.find(u => u.correo === email);

    if (usuario) {
        if (usuario.Carrito) {
            return usuario.Carrito.id;
        } else {
            // Si el usuario no tiene un carrito, crear uno nuevo
            const nuevoCarrito = await DataStore.save(
                new Carrito({
                    "TotalCarrito": 0, 
                })
            );
            // Asociar el nuevo carrito al usuario y guardar el usuario
            await DataStore.save(
                Usuarios.copyOf(usuario, updated => {
                    updated.Carrito = nuevoCarrito;
                })
            );

            return nuevoCarrito.id;
        }
    } else {
        console.error('Usuario no encontrado.');
        return null;
    }
  } catch (error) {
      console.error('Error al obtener o crear el carrito del usuario:', error);
      return null;
  }
};

  const agregarAlCarrito = async (userID) => {
    try {
      const carritoID = await obtenerCarritoUsuario(userID);

      if (carritoID) {
        const nuevoProductoCarrito = await DataStore.save(
          new ProductoCarrito({
              "carritoID": carritoID,
              "precio": product.precio.toString(), 
              "cantidad": quantity,
              "subTotal": quantity * parseFloat(product.precio),
              "nombreProducto": product.nombreProducto,
          })
        );
        console.log('Producto agregado al carrito:', nuevoProductoCarrito);
      } else {
        console.error('No se pudo obtener el carrito del usuario.');
      }
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };

  return (
    <Paper className="p-2 row d-flex align-items-center justify-content-center" elevation={3} style={{ padding: '16px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div style={{ maxWidth: '100%', maxHeight: '450px' }}>
            <img src={product.imagenURL} alt={product.nombreProducto} style={{ width: 'auto', maxHeight: '450px', borderRadius: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {product.nombreProducto}
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            {product.descripcion}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Precio: ${product.precio}
          </Typography>
          <Box display="flex" alignItems="center" marginTop="16px">
            <IconButton onClick={handleDecrease} color="primary">
              <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              variant="outlined"
              size="small"
              style={{ maxWidth: '80px', margin: '0 8px' }}
            />
            <IconButton onClick={handleIncrease} color="primary">
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
          <Snackbar open={alert} autoHideDuration={2000}  onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleCloseAlert} severity="error"
              sx={{ width: '100%',
                '& .MuiAlert-message': { 
                  fontSize: '1.00rem', fontWeight: 'bold',
                },
                backgroundColor: '#5d4fc6', color: 'white', 
              }} >
              ¡Atención! No puedes agregar más productos de los que hay en stock.
            </Alert>
          </Snackbar>
          <Button variant="contained" color="primary" onClick={() => agregarAlCarrito('tu_userID')} style={{ marginTop: '16px' }} size="large">
            Agregar {quantity} al carrito
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComDetallesProducto;