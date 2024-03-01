import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { RepartirProducto } from '../../models';
import { Card, CardContent, Button, Typography, Container, Grid } from '@mui/material';
import { notificacionEnvio } from '../../hook/sen2Email';
import { notificacionLLegada } from '../../hook/sen3Email';

function RepartidorView({ repartidorID, repartidorCorreo }) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const packagesToDeliver = await DataStore.query(RepartirProducto, c => c.repartidorID.eq(repartidorID));
      setPackages(packagesToDeliver);
    }

    fetchPackages();
  }, [repartidorID]);

  const handleInDelivery = async (pkg) => {
    notificacionEnvio(pkg, repartidorCorreo)
    console.log('Paquete en reparto:');
    // Luego podrías actualizar el paquete para reflejar que está en reparto
  };

  const handleEntregado = async (pkg) => {
    try {
      // Notificar la llegada del paquete
      notificacionLLegada(pkg, repartidorCorreo);
      
      // Borrar el paquete de la base de datos
      await DataStore.delete(RepartirProducto, pkg.id);      
      setPackages(currentPackages => 
        currentPackages.filter(p => p.id !== pkg.id)
      );
      
      console.log('Paquete entregado y borrado:');
    } catch (error) {
      console.error('Error al borrar el paquete:', error);
    }
  };  

  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Paquetes para entregar
      </Typography>
      <Grid container spacing={4}>
        {packages.map(pkg => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Producto: {pkg.productosParaEntregar}
                </Typography>
                <Typography variant="body1">
                  Dirección de entrega: {pkg.direccionDeEntrega}
                </Typography>
                <Typography variant="body1">
                  Información de cliente: {pkg.informacionDeCliente} {pkg.correoCliente}
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth 
                  style={{ marginTop: '20px' }}
                  onClick={() => handleInDelivery(pkg)}
                >
                  El paquete está en reparto
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  style={{ marginTop: '20px' }}
                  onClick={() => handleEntregado(pkg)}
                >
                  Marcar como entregado
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default RepartidorView;
