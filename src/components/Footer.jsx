import * as React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import logo from '../landing/assets/img/WorkLinkerRecortada.png';

export default function Footer() {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'grey.900' : 'background.paper';
  const textColor = colorMode === 'dark' ? 'grey.300' : 'text.secondary';

  return (
    <Box component="footer" sx={{ bgcolor: bgColor, py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img src={logo} alt="Logo de Web Linker Store" style={{ height: '70px' }} />
              <Typography variant="subtitle1" color={textColor}>
                © {new Date().getFullYear()} Todos los derechos reservados, Página con fines educativos.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Recursos
            </Typography>
            <Link href="/mapa-del-sitio" color={textColor} sx={{ display: 'block' }}>Mapa del Sitio</Link>
            <Link href="/login-repartidores" color={textColor} sx={{ display: 'block' }}>Repartidor</Link>
            <Link href="/login-empresa" color={textColor} sx={{ display: 'block' }}>Vender</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Legal
            </Typography>
            <Link href="/privacy-policy" color={textColor} sx={{ display: 'block' }} target="_blank">Políticas de Privacidad</Link>
            <Link href="/terms-conditions" color={textColor} sx={{ display: 'block' }} target="_blank">Términos & Condiciones</Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color={textColor} gutterBottom>
              Contacto
            </Typography>
            <Link href="mailto:noreplyworklinker@gmail.com" color={textColor} sx={{ display: 'block' }}>
              noreplyworklinker@gmail.com
            </Link>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link href="https://www.facebook.com/profile.php?id=61557008636040&mibextid=LQQJ4d" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <FaFacebook size={25} />
              </Link>
              <Link href="https://www.instagram.com/xonixtechnology?igsh=NWR4ZnZuaTl1bnVv&utm_source=qr" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <FaInstagram size={25} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
