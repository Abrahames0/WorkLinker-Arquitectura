import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { ProductoCarrito } from '../../models';
import { Button, List, ListItem, ListItemText, Divider, FormControl, Select, MenuItem, } from '@mui/material';

const Carrito = ({ userID }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [formaPago, setFormaPago] = useState('');

  useEffect(() => {
    const obtenerProductosCarrito = async () => {
      try {
        const productos = await DataStore.query(ProductoCarrito, (p) => p.carritoID("eq", userID));
        setProductosCarrito(productos);
      } catch (error) {
        console.error('Error al obtener productos del carrito:', error);
      }
    };

    obtenerProductosCarrito();
}, [userID]);

  const manejarCambioPago = (event) => {
    setFormaPago(event.target.value);
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      <List>
        {productosCarrito.map(producto => (
          <>
            <ListItem key={producto.id}>
              <ListItemText primary={producto.nombreProducto} secondary={`Cantidad: ${producto.cantidad}, Precio: ${producto.precio}`} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>

      <FormControl fullWidth>
        <Select
          value={formaPago}
          onChange={manejarCambioPago}
        >
          <MenuItem value={'tarjeta'}>Tarjeta de crédito/débito</MenuItem>
          <MenuItem value={'paypal'}>PayPal</MenuItem>
          <MenuItem value={'efectivo'}>Efectivo</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary">
        Proceder al pago
      </Button>
    </div>
  );
};

export default Carrito;
