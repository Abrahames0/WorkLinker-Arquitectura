import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { Producto } from '../../../models'; // Import your product model

const ComDetallesproductoo = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const productId = match.params.id; // Get the product ID from the route parameters
      try {
        const productData = await DataStore.query(Producto, productId);
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [match.params.id]);

  console.log(product);
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={product.imagenURL} alt={product.nombreProducto} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">{product.nombreProducto}</Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6">Precio: {product.precio}</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComDetallesproductoo;
