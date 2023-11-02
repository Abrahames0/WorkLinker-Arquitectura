import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

export function VistaPreviaProducto({ data, imagenURL }) {
  return (
    <Card sx={{ m: 3 }}>
      <CardHeader title="Vista previa del producto" titleTypographyProps={{ align: 'center', variant: 'h5' }} />
      <CardContent>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3} align="center">
            {imagenURL
              ? <img src={imagenURL} alt="Imagen del producto" style={{ width: '100%', maxWidth: '200px' }} />
              : <Typography>No hay imagen cargada.</Typography>}
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Typography variant="h6">Datos del Producto</Typography>
            <Typography><strong>Nombre del producto:</strong> {data.nombreProducto}</Typography>
            <Typography><strong>Descripcion:</strong> {data.descripcion}</Typography>
            <Typography><strong>Precio:</strong> ${data.precio}</Typography>
            <Typography><strong>Stock:</strong> {data.stock}</Typography>
            <Typography><strong>Categoria:</strong> {data.categoria}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}