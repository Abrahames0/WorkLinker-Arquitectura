import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Paper } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { Producto } from '../../models'; // Importa tu modelo de producto
import { useParams } from 'react-router-dom';

const ComDetallesProducto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await DataStore.query(Producto, id);
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [id]);

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

export default ComDetallesProducto;
