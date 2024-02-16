import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Paper, IconButton, TextField, Box, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material';
import { DataStore,Auth } from 'aws-amplify';
import { useNavigate, useParams } from 'react-router-dom';
import { Producto, Carrito, ProductoCarrito, Usuarios } from '../../../models';
import Loader from '../../componentesRecicables/Loader';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ListaProductosVender from '../ListaProductosVender';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContinueShoppingIcon from '@mui/icons-material/AddShoppingCart'; // Un ícono que podría representar continuar comprando

const ComDetallesProducto = ({ email }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);
  const [userData , setUserData]= useState([]);
  const [productos , setProductos]= useState([]);
  const [alertaCarrito, setAlertaCarrito] = useState(false);
  const navigate = useNavigate();

  const irAlCarrito = () => {
    navigate('/carrito'); 
  };

  const seguirComprando = () => {
    navigate('/inicio-usuarios'); 
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            const sub = DataStore.observeQuery(Usuarios, c => c.correo.eq(user.attributes.email), { limit: 1 })
              .subscribe(({ items }) => { setUserData(items[0]); });
            return () => {
              sub.unsubscribe();
            };
          })
      } catch (error) {
        console.log(error)
      }
    }
    saves()
  }, []);

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

const obtenerCarritoUsuario = async (email) => {
  try {
    const todosLosUsuarios = await DataStore.query(Usuarios);
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

const agregarAlCarrito = async () => {
  try {
    const carritoID = await obtenerCarritoUsuario(email);

    if (carritoID) {
      // Crear un objeto que representa el producto a agregar al carrito
      const productoAgregado = {
        nombreProducto: product.nombreProducto,
        cantidad: quantity,
        precio: product.precio,
      };

      // Crear una copia del array de productos en el carrito y agregar el nuevo producto
      const nuevosProductos = [...productos, productoAgregado];

      // Actualizar el estado con la nueva lista de productos en el carrito
      setProductos(nuevosProductos);
      setAlertaCarrito(true);
      const nuevoProductoCarrito = await DataStore.save(
        new ProductoCarrito({
          "carritoID": carritoID,
          "precio": product.precio.toString(),
          "cantidad": quantity,
          "subTotal": quantity * parseFloat(product.precio),
          "nombreProducto": product.nombreProducto,
          "usuariosID": userData.id,
          "imagenURL": product.imagenURL,
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
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
  <Paper className="p-2 row d-flex align-items-center justify-content-center">
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
        <Snackbar open={alert} autoHideDuration={2000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleCloseAlert} severity="error"
            sx={{
              width: '100%',
              '& .MuiAlert-message': {
                fontSize: '1.00rem',
                fontWeight: 'bold',
              },
              backgroundColor: '#5d4fc6',
              color: 'white',
            }} >
            ¡Atención! No puedes agregar más productos de los que hay en stock.
          </Alert>
        </Snackbar>
        <Button variant="contained" color="primary" onClick={agregarAlCarrito} style={{ marginTop: '16px' }} size="large">
          Agregar {quantity} al carrito
        </Button>
        <Dialog
          open={alertaCarrito}
          TransitionComponent={Transition} // Efecto de transición
          keepMounted
          onClose={() => setAlertaCarrito(false)}
          aria-describedby="alerta-carrito-descripcion"
        >
          <DialogTitle>{"Producto agregado al carrito"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alerta-carrito-descripcion">
              ¿Te gustaría ir a tu carrito o prefieres seguir comprando?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={irAlCarrito}
              color="primary"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
            >
              Ir al carrito
            </Button>
            <Button
              onClick={seguirComprando}
              color="secondary"
              variant="outlined"
              startIcon={<ContinueShoppingIcon />}
              autoFocus
            >
              Seguir comprando
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  </Paper>
  <h4 className="p-2 row d-flex align-items-center justify-content-center" >Te podria interesar</h4>
  <ListaProductosVender/>
  </div>
);
};

export default ComDetallesProducto;