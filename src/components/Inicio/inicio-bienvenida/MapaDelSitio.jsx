import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5d4fc6',
    },
    secondary: {
      main: '#0795f5',
    }, 
  },
});

// Componente para cada categoría y sus subcategorías
const Category = ({ category }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {category.title}
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          {category.subcategories && category.subcategories.map((subcat, index) => (
            <Paper key={index} elevation={0} sx={{ padding: 1, backgroundColor: theme.palette.secondary.main, color: '#fff', marginBottom: 1 }}>
              <Typography variant="body1">{subcat}</Typography>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Grid>
  );
};

const SiteMap = ({ categories }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Grid container spacing={3}>
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

// Datos
const categoriesData = [
    {
        title: "Inicio",
    },
    {
        title: "Categorias",
        subcategories: ["Accesorios para Vehículos", "Bebés", "Belleza y Cuidado Personal",
        "Compra Internacional", "Construcción", "Deportes y Fitness", "Electrodomésticos","Herramientas",
        "Hogar y Muebles", "Industrial y Oficinas", "Inmuebles", "Juegos y Juguetes", "Moda",
        "Productos Sustentables", "Salud y Equipamiento Médico", "Tecnología",]
    }
];

const Mapaa = () => {
  return (
    <div className="App">
      <SiteMap categories={categoriesData} />
    </div>
  );
};

export default Mapaa;
