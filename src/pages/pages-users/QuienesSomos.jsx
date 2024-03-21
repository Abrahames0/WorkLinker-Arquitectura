import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const QuienesSomos = () => {
  return (
    <Box id="quienes-somos" component="section" py={10} my={5} style={{ backgroundColor: '#5d4fc6' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          Quiénes Somos.
        </Typography>
        <Typography className='text-justify' variant="body1" paragraph>
        En Web Linker Store, somos más que un e-commerce; somos un puente entre las necesidades cotidianas y la tecnología. Fundada en 2024, nuestra visión ha sido clara desde el principio: simplificar la compra en línea, ofreciendo una experiencia de usuario inigualable y una selección de productos que enriquecen la vida diaria de nuestros clientes.
        </Typography>
        <Typography className='text-justify' variant="body1">
        Nuestra misión es ofrecer una plataforma segura, intuitiva y dinámica donde nuestros usuarios puedan encontrar todo lo que necesitan, desde los gadgets tecnológicos más avanzados hasta artículos esenciales para el hogar, todo bajo un mismo techo. Creemos firmemente en la calidad, la accesibilidad y la innovación continua, adaptándonos siempre a las tendencias del mercado y a las necesidades de nuestros clientes.
        </Typography>
      </Container>
    </Box>
  );
};

export default QuienesSomos;
