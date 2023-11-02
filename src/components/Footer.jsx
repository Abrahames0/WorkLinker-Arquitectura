import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logo from '../landing/assets/img/WorkLinkerRecortada.png';

import { useColorMode } from '@chakra-ui/react';

export default function Footer() {
  const { colorMode } = useColorMode();
  
  // Establece colores predeterminados o cambia esto para coincidir con tu paleta de colores
  const bgColor = colorMode === 'dark' ? 'grey.900' : 'background.paper';
  const textColor = colorMode === 'dark' ? 'grey.300' : 'text.secondary';

  return (
    <Box component="footer" sx={{ bgcolor: bgColor, py: 6, }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={4}>
                <Box component="img" src={logo} alt="Logo de mi compañía" sx={{ height: 50 }} />
            </Grid>
            <Typography variant="subtitle1" color="text.secondary">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Recursos
            </Typography>
            <Link href="#" color="text.secondary">Repartidor</Link><br/>
            <Link href="#" color="text.secondary">Vender</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contactos
            </Typography>
            <Link href="mailto:info@micompañia.com" color="text.secondary">
              info@worklinker.com.mx
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
