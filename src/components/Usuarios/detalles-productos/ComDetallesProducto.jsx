import React from 'react';
import { Button, Typography, Grid, Paper } from "@mui/material";

const ComDetallesproductoo = ({producto}) => {

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src="" alt={producto.nombreProducto} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">{producto.nombreProducto}</Typography>
          <Typography variant="body2" color="textSecondary">{producto.description}</Typography>
          <Typography variant="h6">Precio: {producto.precio}</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ComDetallesproductoo;
