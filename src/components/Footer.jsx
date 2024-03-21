import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import logo from '../landing/assets/img/WorkLinkerRecortada.png';

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const styles = {
    footer: {
      bgcolor: isDarkMode ? 'grey.900' : 'background.paper',
      py: 6,
    },
    logo: {
      height: '70px',
    },
    link: {
      display: 'block',
      color: isDarkMode ? 'grey.300' : 'text.secondary',
    },
    iconLink: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    },
    text: {
      color: isDarkMode ? 'grey.300' : 'text.secondary',
    },
  };

  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img src={logo} alt="Logo de Web Linker Store" style={styles.logo} />
              <Typography variant="subtitle1" sx={styles.text}>
                © {new Date().getFullYear()} Todos los derechos reservados, Página con fines educativos.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={styles.text} gutterBottom>
              Recursos
            </Typography>
            <Link href="/mapa-del-sitio" sx={styles.link}>Mapa del Sitio</Link>
            <Link href="/login-repartidores" sx={styles.link}>Repartidor</Link>
            <Link href="/login-empresa" sx={styles.link}>Vender</Link>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={styles.text} gutterBottom>
              Legal
            </Typography>
            <Link href="/privacy-policy" sx={styles.link} target="_blank">Políticas de Privacidad</Link>
            <Link href="/terms-conditions" sx={styles.link} target="_blank">Términos & Condiciones</Link>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={styles.text} gutterBottom>
              Contacto
            </Typography>
            <Link href="mailto:noreplyworklinker@gmail.com" sx={styles.link}>
              noreplyworklinker@gmail.com
            </Link>
            <Box sx={styles.iconLink}>
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
};

export default Footer;
