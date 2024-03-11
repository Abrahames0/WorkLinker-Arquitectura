import React, { useState, useEffect } from 'react';

import { DataStore, Auth } from 'aws-amplify';
import { ProductoCarrito, Usuarios } from '../../models';

import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton, TextField, Box, Alert, Snackbar, Typography, Card, Grid, CardContent, Container,} from '@mui/material';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalButton } from './pagosCarrito/pagoPaypal';

const Carrito = () => {

  const [productosCarrito, setProductosCarrito] = useState([]);
  const [userData, setUserData] = useState(null);
  const [alerta, setAlerta] = useState(false);

  const calcularTotal = () => {
    return productosCarrito.reduce((acc, producto) => {
      return acc + (producto.cantidad * producto.precio);
    }, 0);
  };

  const total = calcularTotal();

  // Consigue el usuario autenticado y guarda su información
  useEffect(() => {
    let sub;
    async function getAuthenticatedUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        sub = DataStore.observeQuery(Usuarios, c => c.correo.eq(user.attributes.email), { limit: 1 })
          .subscribe(({ items }) => {
            if (items.length > 0) {
              setUserData(items[0]);
            }
          });
      } catch (error) {
        console.error('Error al obtener el usuario autenticado:', error);
      }
    }
    getAuthenticatedUser();

    return () => {
      if (sub) sub.unsubscribe();
    };
  }, []);

useEffect(() => {
  let subscription;

  async function obtenerProductosCarrito() {
    if (userData) {
      const productos = await DataStore.query(ProductoCarrito, c => c.usuariosID.eq(userData.id));
      setProductosCarrito(productos);
    }
  }
  if (userData) {
    obtenerProductosCarrito();

    // Suscribirse a cambios
    subscription = DataStore.observe(ProductoCarrito, c => c.usuariosID.eq(userData.id)).subscribe(() => {
      obtenerProductosCarrito();
    });
  }
  return () => {
    if (subscription) subscription.unsubscribe();
  };
}, [userData]);

  const eliminarProductoDelCarrito = async (productoId) => {
    try {
      const productoAEliminar = await DataStore.query(ProductoCarrito, productoId);
      if (productoAEliminar) {
        await DataStore.delete(productoAEliminar);
      }
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  // Función para cerrar la alerta
  const handleCloseAlert = () => {
    setAlerta(false);
  };

  const handleDecrease = (productoId) => {
    actualizarCantidadProducto(productoId, -1);
  };

  const handleIncrease = (productoId) => {
    const producto = productosCarrito.find(p => p.id === productoId);
    
    if ((producto.cantidad + 1) <= 5) { // Verificar si la nueva cantidad sería 5 o menos
      actualizarCantidadProducto(productoId, 1);
    } else {
      setAlerta(true); // Mostrar alerta si se intenta agregar más de 5 productos
    }
  };

  const handleQuantityChange = (productoId, event) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    
    if (nuevaCantidad <= 5 && nuevaCantidad >= 0) { // Verificar si la nueva cantidad es 5 o menos y no negativa
      actualizarCantidadProducto(productoId, nuevaCantidad - productosCarrito.find(p => p.id === productoId).cantidad);
    } else if (nuevaCantidad > 5) {
      setAlerta(true); // Mostrar alerta si se intenta establecer una cantidad mayor que 5
    }
  };

  const actualizarCantidadProducto = async (productoId, change) => {
    try {
      const producto = productosCarrito.find(p => p.id === productoId);
      if (!producto) {
        console.error('Producto no encontrado en el carrito.');
        return;
      }
      
      const nuevaCantidad = producto.cantidad + change;
      
      if (nuevaCantidad < 1 || nuevaCantidad > producto.stock) {
        setAlerta(true);
        return;
      }

      const original = await DataStore.query(ProductoCarrito, productoId);
      await DataStore.save(
        ProductoCarrito.copyOf(original, updated => {
          updated.cantidad = nuevaCantidad;
        })
      );
      
      setProductosCarrito(currentProductos => {
        return currentProductos.map(p => {
          if (p.id === productoId) {
            return { ...p, cantidad: nuevaCantidad };
          }
          return p;
        });
      });
    } catch (error) {
      console.error('Error al actualizar la cantidad del producto:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
    <Container  style={{ flex: 1 }}>
      <Typography variant="h4" gutterBottom align="center">
        Bolsa de compra
      </Typography>

      <Grid container spacing={3}>
        {/* Productos */}
        <Grid item xs={12} md={8}>
          {productosCarrito.map((producto) => (
            <Card variant="outlined" key={producto.id}>
              <CardContent>
                <Typography variant="h5">{producto.nombreProducto}</Typography>
                <Box display="flex" alignItems="center">
                  <img src={producto.imagenURL} alt={producto.nombreProducto} style={{ width: 66, height: 66 }} />
                  <Typography variant="body3">
                    Cantidad: {producto.cantidad}, Precio: {producto.precio}
                  </Typography>
                  <IconButton edge="end" aria-label="delete" onClick={() => eliminarProductoDelCarrito(producto.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" marginTop="16px">
                  <IconButton onClick={() => handleDecrease(producto.id)} color="primary">
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <TextField
                    id={`quantity_${producto.id}`}
                    value={producto.cantidad}
                    onChange={(e) => handleQuantityChange(producto.id, e)}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: producto.stock } }}
                    variant="outlined"
                    size="small"
                    style={{ maxWidth: '80px', margin: '0 8px' }}
                  />
                  <IconButton onClick={() => handleIncrease(producto.id)} color="primary">
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
        {/* Resumen del pedido */}
        <Grid item xs={12} md={4} className='pb-3'>
          <Card variant="outlined">
            <CardContent>
              <Typography  variant="h5">Resumen</Typography>
              <Typography sx={{mt:2}} variant="h6">Subtotal: ${calcularTotal()}</Typography>
            </CardContent>
          </Card>
          {/* Formas de pago */}
          <Button className='mb-3' variant="contained"  color="primary" fullWidth href='/inicio-usuarios/carrito/pago-tarjeta' sx={{ mt: 2, borderRadius: '50px'}}>
            Pago con tarjeta de Débito/Crédito
          </Button>
          {total > 0 && (
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, "currency": "MXN" }}>
            <PayPalButton total={total.toString()} />
          </PayPalScriptProvider>          
          )}
        </Grid>
        <Snackbar open={alerta} autoHideDuration={2000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          ¡Atención! Solo puedes agregar 5 prodcutos maximo.
        </Alert>
      </Snackbar>
      </Grid>
    </Container>
    </div>
  );
};

export default Carrito;