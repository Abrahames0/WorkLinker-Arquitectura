// FiltroMenuLateral.js
import React from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@emotion/react";

const FiltroMenuLateral = ({ precioFiltro, setPrecioFiltro, onApplyFilters }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handler para actualizar el rango de precios del filtro
  const handlePrecioChange = (event, newValue) => {
    setPrecioFiltro(newValue);
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        background: 'transparent', // Asegúrate de que el fondo sea transparente
        boxShadow: 'none', // Elimina cualquier sombra para la transparencia
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filtros
      </Typography>
      <Box mt={2} mb={4}>
        <Typography gutterBottom>Precio</Typography>
        <Slider
          value={precioFiltro}
          onChange={handlePrecioChange}
          valueLabelDisplay="auto"
          min={0}
          max={10000} // Ajusta según tus necesidades
        />
      </Box>
      <Button size="large" variant="contained" color="primary"  onClick={onApplyFilters} fullWidth={!isMobile}>
        Aplicar Filtros
      </Button>
    </Box>
  );
};

export default FiltroMenuLateral;
