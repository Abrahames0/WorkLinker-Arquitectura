import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { ProductoCarrito, Usuarios } from '../../models';
import { Button, List, ListItem, ListItemText, Divider, FormControl, Select, MenuItem, } from '@mui/material';

const Carrito = ({email}) => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [formaPago, setFormaPago] = useState('');
  const [userID, setUserID] = useState('');

  const obtenerUserIDPorEmail = async (email) => {
    try {
        // Obtener todos los usuarios
        const usuarios = await DataStore.query(Usuarios);
        
        // Encontrar un usuario que coincida con el correo electrónico proporcionado
        const usuario = usuarios.find(u => u.correo === email);
        
        if (usuario) {
            return usuario.id; // Retorna el ID del usuario encontrado
        } else {
            console.error('Usuario no encontrado.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el userID:', error);
        return null;
    }
};

  const manejarCambioPago = (event) => {
    setFormaPago(event.target.value);
  };

  useEffect(() => {
    const obtenerUserID = async () => {
      const userID = await obtenerUserIDPorEmail(email);
      setUserID(userID);
    };

    obtenerUserID();
  }, [email]);

  useEffect(() => {
    if (userID) {
      const obtenerProductosCarrito = async () => {
        try {
          const productos = await DataStore.query(ProductoCarrito, p => p.usuariosID("eq", userID));
          setProductosCarrito(productos);
        } catch (error) {
          console.error('Error al obtener productos del carrito:', error);
        }
      };

      obtenerProductosCarrito();
    }
  }, [userID]);

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
