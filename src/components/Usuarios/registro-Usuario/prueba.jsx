import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const Cart = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Bolsa de compra
      </Typography>

      <Grid container spacing={3}>
        {/* Productos */}
        <Grid item xs={12} md={8}>
          {/* Producto 1 */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Air Jordan 1 Retro High OG</Typography>
              {/* Agregar más detalles del producto como la imagen, precio, etc. */}
              <Button variant="contained" color="secondary">
                Eliminar
              </Button>
            </CardContent>
          </Card>

          {/* Puedes duplicar el <Card> ... </Card> para agregar más productos */}
        </Grid>

        {/* Resumen */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Resumen</Typography>
              <Typography>Subtotal: $x,xxx.xx</Typography>
              {/* Agregar más detalles del resumen como el total, botón de pagar, etc. */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
