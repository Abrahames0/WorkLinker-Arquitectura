import * as React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import logo from '../landing/assets/img/WorkLinkerRecortada.png';

export default function Footer() {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'grey.900' : 'background.paper';
  const textColor = colorMode === 'dark' ? 'grey.300' : 'text.secondary';

  // Estilos específicos para los iconos de redes sociales
  const iconStyle = {
    color: textColor,
    cursor: 'pointer',
    '&:hover': {
      color: colorMode === 'dark' ? 'grey.100' : 'grey.600',
    },
  };

  return (
    <Box component="footer" sx={{ bgcolor: bgColor, py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img src={logo} alt="Logo de WorkLinker" style={{ height: '70px' }} />
              <Typography variant="subtitle1" color={textColor}>
                © {new Date().getFullYear()} Todos los derechos reservados.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Recursos
            </Typography>
            <Link href="/mapa-sitio" color={textColor} sx={{ display: 'block' }}>Mapa del Sitio</Link>
            <Link href="/repartidor" color={textColor} sx={{ display: 'block' }}>Repartidor</Link>
            <Link href="/vender" color={textColor} sx={{ display: 'block' }}>Vender</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Legal
            </Typography>
            <Link href="/privacy-policy" color={textColor} sx={{ display: 'block' }}>Políticas de Privacidad</Link>
            <Link href="/terms-conditions" color={textColor} sx={{ display: 'block' }}>Términos & Condiciones</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Contacto
            </Typography>
            <Link href="mailto:noreplyworklinker@gmail.com" color={textColor} sx={{ display: 'block' }}>
              noreplyworklinker@gmail.com
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link href="https://www.facebook.com" >
                <FaFacebook size={25} />
              </Link>
              <Link href="https://www.instagram.com/xonixtechnology?igshid=NWR4ZnZuaTl1bnVv" >
                <FaInstagram size={25} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
