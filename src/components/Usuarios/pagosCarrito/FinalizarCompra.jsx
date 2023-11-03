import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box} from '@mui/material';

import { ProductoCarrito, Repartidor, RepartirProducto, Usuarios } from '../../../models';
import { Auth, DataStore } from 'aws-amplify';
import Loader from '../../componentesRecicables/Loader';
import CreditCardForm from './FormTarjetas';
import { notificacionCompra } from '../../../hook/senEmail';

const CheckoutComponent = () => {
const [userData, setUserData] = useState(null);
const [productosCarrito, setProductosCarrito] = useState([]);
const [isLoading, setIsLoading] = useState(false); // Estado para controlar el loader
const [isFormValid, setIsFormValid] = useState(false);
const [timeoutId, setTimeoutId] = useState(null); // Guardamos el ID del timeout para limpiarlo después

useEffect(() => {
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Limpieza del timeout al desmontar
    }
  };
}, [timeoutId]); // Dependencias que incluyen timeoutId

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

const handlePayClick = async () => {
  try {
    setIsLoading(true);
    
    if (!isFormValid) {
      alert('Introduce tu método de pago.');
      setIsLoading(false);
      return;
    }
    
    // Asignar un repartidor y guardar la información en las tablas
    const assignedDelivererId = await assignDeliverer(); 
    await saveDeliveryInfo(assignedDelivererId, productosCarrito);
    
    const totalPrecio = productosCarrito.reduce((total, producto) => total + parseInt(producto.precio), 0);
    const nombresProductos = productosCarrito.map(producto => producto.nombreProducto);
    const nombresProductosSeparadosPorComas = nombresProductos.join(', ');
    
    const newTimeoutId = setTimeout(() => {
      notificacionCompra(userData, productosCarrito, totalPrecio, nombresProductosSeparadosPorComas)
      vaciarCarrito();
    }, 4000);

    setTimeoutId(newTimeoutId);
    alert('La compra se realizó con éxito.');
  } catch (error) {
    setIsLoading(false);
    alert('Ocurrió un error al procesar la compra.');
    console.error(error);
  }
};

// Función para elegir y asignar un repartidor (esto es solo un ejemplo básico)
async function assignDeliverer() {
  const deliverers = await DataStore.query(Repartidor);
  const randomIndex = Math.floor(Math.random() * deliverers.length);
  return deliverers[randomIndex].id;
}

// Función para guardar información de la entrega en la tabla "RepartirProducto"
async function saveDeliveryInfo(delivererId, products) {
  for (const product of products) {
    await DataStore.save(
      new RepartirProducto({
        repartidorID: delivererId,
        productosParaEntregar: product.nombreProducto,
        correoCliente: `${userData.correo}`,
        direccionDeEntrega: `${userData.calleUsuario} ${userData.numeroUsuario}, ${userData.colonia}`,
        informacionDeCliente: `${userData.nombreUsuario} ${userData.apellidoUsuario}, ${userData.telefono}`
      })
    );
  }
}
  const onCardDetailsChange = (isValid) => {
    setIsFormValid(isValid);
  };

  const vaciarCarrito = async () => {
    await DataStore.delete(ProductoCarrito, c => c.usuariosID.eq(userData.id));
    setProductosCarrito([]); 
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Datos de envios
      </Typography>
      <Typography variant="h6" gutterBottom>
        Nombre y dirección:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">Direcion de envio</Typography>
                {userData ? (
                <>
                    <h5>{userData.nombreUsuario} {userData.apellidoUsuario}</h5>
                    <div>{userData.calleUsuario} {userData.numeroUsuario}, {userData.colonia}</div>
                    <div>{userData.correo} {userData.telefono}</div>
                </>
                ) : (
                <div><Loader/></div>
                )}
            </CardContent>
            </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{mt: 2}}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Resumen del pedido</Typography>
              {productosCarrito.map((producto) => (
              <CardContent key={producto.id}>
                <Typography variant="h5">{producto.nombreProducto}</Typography>
                <Box display="flex" alignItems="center">
                  <img src={producto.imagenURL} alt={producto.nombreProducto} style={{ width: 66, height: 66 }} />
                  <Typography variant="body3">
                    Cantidad: {producto.cantidad}, Precio: {producto.precio}
                  </Typography>
                </Box>
              </CardContent>
          ))}
            </CardContent>
          </Card>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: '50px', }} onClick={handlePayClick} >
        Pagar
      </Button>
        </Grid>
        {isLoading && <Loader />}
          <Grid item xs={10} md={7} >
            <CreditCardForm onCardDetailsChange={onCardDetailsChange} isFormValid={isFormValid} />
          </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutComponent;