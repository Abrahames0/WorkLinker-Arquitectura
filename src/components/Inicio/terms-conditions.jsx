import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import Footer from '../Footer';
import NavegacionLegal from './inicio-bienvenida/NavegacionLegal';

const TermsConditions = () => {
    return (
        <div>
            <NavegacionLegal/>
            <Container component="main" maxWidth="lg">
          <Box my={4}>
            <Typography variant="h3" component="h1" gutterBottom>
              Términos y Condiciones
            </Typography>
            <Paper style={{ padding: '20px', marginTop: '20px' }} elevation={3}>
              <Typography variant="body1" paragraph>
                ¡Bienvenido a Web Linker Store!
              </Typography>
    
              <Typography variant="body1" paragraph>
                Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Xonix Techology, ubicado en <Link href="https://prod.d20njex5crjgev.amplifyapp.com/">https://prod.d20njex5crjgev.amplifyapp.com/</Link>.
              </Typography>
    
              <Typography variant="body1" paragraph>
                Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Web Linker Store si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
              </Typography>
    
              <Typography variant="h6" gutterBottom>
                Cookies:
              </Typography>
              <Typography variant="body1" paragraph>
                El sitio web utiliza cookies para ayudar a personalizar tu experiencia en línea. Al acceder a Web Linker Store, aceptaste utilizar las cookies necesarias.
              </Typography>
    
              <Typography variant="h6" gutterBottom>
                Licencia:
              </Typography>
              <Typography variant="body1" paragraph>
                A menos que se indique lo contrario, Xonix Techology y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Web Linker Store. Todos los derechos de propiedad intelectual son reservados.
              </Typography>
    
              <Typography variant="body1" paragraph>
                No debes:
              </Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li>Copiar o volver a publicar material de Web Linker Store</li>
                  <li>Vender, alquilar o sublicenciar material de Web Linker Store</li>
                  <li>Reproducir, duplicar o copiar material de Web Linker Store</li>
                  <li>Redistribuir contenido de Web Linker Store</li>
                </ul>
              </Typography>
    
              <Typography variant="body1" paragraph>
                Este acuerdo comenzará en la fecha presente.
              </Typography>

              <Typography variant="body1" paragraph>
              Partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en determinadas áreas. Xonix Techology no filtra, edita, publica ni revisa los comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de vista ni las opiniones de Xonix Techology, sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica. En la medida en que lo permitan las leyes aplicables, Xonix Techology no será responsable de los comentarios ni de ninguna responsabilidad, daños o gastos causados o sufridos como resultado de cualquier uso o publicación o apariencia de comentarios en este sitio web.
              </Typography>

              <Typography variant='body1' paragraph>
              Xonix Techology se reserva el derecho de monitorear todos los comentarios y eliminar los que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.
              </Typography>

              <Typography variant='body1' paragraph>
              Garantizas y declaras que:
              </Typography>

              <Typography variant="body1" component="div">
                <ul>
                  <li>Tienes derecho a publicar comentarios en nuestro sitio web y tienes todas las licencias y consentimientos necesarios para hacerlo;</li>
                  <li>Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o marcas comerciales de terceros;</li>
                  <li>Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal de otro modo, que sea una invasión de la privacidad.</li>
                  <li>Los comentarios no se utilizarán para solicitar o promover negocios o actividades comerciales personalizadas o presentes o actividades ilegales.</li>
                </ul>
              </Typography>
    
              <Typography variant="body1" paragraph>
                Si deseas comunicarte con nosotros para entender más sobre estos Términos y Condiciones o deseas comunicarte con nosotros en relación con cualquier asunto relacionado con los mismos, puedes enviarnos un correo electrónico a <Link href="mailto:noreplyworklinker@gmail.com">noreplyworklinker@gmail.com</Link>.
              </Typography>
    
            </Paper>
          </Box>
        </Container>
            <Footer/>
        </div>
        
      );
};

export default TermsConditions;