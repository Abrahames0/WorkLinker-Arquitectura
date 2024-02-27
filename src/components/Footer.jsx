import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import logo from '../landing/assets/img/WorkLinkerRecortada.png';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useColorMode } from '@chakra-ui/react';

export default function Footer() {
  const { colorMode } = useColorMode();
  
  // Establece colores predeterminados o cambia esto para coincidir con tu paleta de colores
  const bgColor = colorMode === 'dark' ? 'grey.900' : 'background.paper';
  const textColor = colorMode === 'dark' ? 'grey.300' : 'text.secondary';

  return (
    <Box component="footer" sx={{ bgcolor: bgColor, py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box component="img" src={logo} alt="Logo de mi compañía" sx={{ height: 70 }} />
            <Typography variant="subtitle1" color={textColor}>
              © {new Date().getFullYear()} Todos los derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Recursos
            </Typography>
            <Nav.Link href="/mapa-del-sitio" color={textColor}>Mapa del Sitio</Nav.Link><br/> 
            <Nav.Link href="/login-repartidores" color={textColor}>Repartidor</Nav.Link><br/>
            <Nav.Link href="/login-empresa" color={textColor}>Vender</Nav.Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Contactos
            </Typography>
            <Link href="mailto:info@micompañia.com" color={textColor}>
              info@worklinker.com.mx
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
