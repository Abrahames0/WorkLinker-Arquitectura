import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import Footer from '../Footer';
import NavegacionLegal from './inicio-bienvenida/NavegacionLegal';

const PrivacyPolicy = () => {
  return (
    <div>
    <NavegacionLegal/>
    <Container component="main" maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Política de Privacidad
        </Typography>
        <Paper style={{ padding: '20px', marginTop: '20px' }} elevation={3}>
          <Typography variant="body1" paragraph>
            El sitio web <strong>Web Linker Store</strong> es propiedad de <strong>Xonix Technology</strong>, que es un controlador de datos de tus datos personales.
          </Typography>

          <Typography variant="body1" paragraph>
            Hemos adoptado esta Política de Privacidad, que determina cómo procesamos la información recopilada por Web Linker Store, que también proporciona las razones por las que debemos recopilar ciertos datos personales sobre ti. Por lo tanto, debes leer esta Política de Privacidad antes de usar el sitio web de Web Linker Store.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Información personal que recopilamos:
          </Typography>
          <Typography variant="body1" paragraph>
            Cuando visitas Web Linker Store, recopilamos automáticamente cierta información sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a medida que navegas por el sitio, recopilamos información sobre las páginas web individuales o los productos que ves, qué sitios web o términos de búsqueda te remitieron al sitio y cómo interactúas con él. Nos referimos a esta información recopilada automáticamente como "Información del dispositivo".
          </Typography>

          <Typography variant="h6" gutterBottom>
            ¿Por qué procesamos tus datos?
          </Typography>
          <Typography variant="body1" paragraph>
            Nuestra máxima prioridad es la seguridad de los datos del cliente y, como tal, podemos procesar solo los datos mínimos del usuario, solo en la medida en que sea absolutamente necesario para mantener el sitio web. La información recopilada automáticamente se utiliza solo para identificar casos potenciales de abuso y establecer información estadística sobre el uso del sitio web. Esta información estadística no se agrega de tal manera que identifique a ningún usuario en particular del sistema.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Tus derechos:
          </Typography>
          <Typography variant="body1" paragraph>
            Si eres residente europeo, tienes los siguientes derechos relacionados con tus datos personales:
          </Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>El derecho a ser informado.</li>
              <li>El derecho de acceso.</li>
              <li>El derecho a la rectificación.</li>
              <li>El derecho a borrar.</li>
              <li>El derecho a restringir el procesamiento.</li>
              <li>El derecho a la portabilidad de datos.</li>
              <li>El derecho a oponerte.</li>
              <li>Derechos en relación con la toma de decisiones automatizada y la elaboración de perfiles.</li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            Si deseas ejercer este derecho, comunícate con nosotros a través de la información de contacto a continuación.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Enlaces a otros sitios web:
          </Typography>
          <Typography variant="body1" paragraph>
            Nuestro sitio puede contener enlaces a otros sitios web que no son de nuestra propiedad ni están controlados por nosotros. Ten en cuenta que no somos responsables de dichos sitios web ni de las prácticas de privacidad de terceros. Te recomendamos que estés atento cuando abandones nuestro sitio web y leas las declaraciones de privacidad de cada sitio que pueda recopilar información personal.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Seguridad de la información:
          </Typography>
          <Typography variant="body1" paragraph>
            Aseguramos la información que proporcionas en servidores informáticos en un entorno controlado y seguro, protegido del acceso, uso o divulgación no autorizados. Mantenemos medidas de seguridad administrativas, técnicas y físicas razonables para proteger contra el acceso no autorizado, el uso, la modificación y la divulgación de datos personales bajo su control y custodia. Sin embargo, no se puede garantizar la transmisión de datos a través de Internet o redes inalámbricas.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Divulgación legal:
          </Typography>
          <Typography variant="body1" paragraph>
            Divulgaremos cualquier información que recopilemos, usemos o recibamos si así lo requiere o lo permite la ley, como para cumplir con una citación o un proceso legal similar, y cuando creemos de buena fe que la divulgación es necesaria para proteger nuestros derechos, proteger tu seguridad o la seguridad de los demás, investigar el fraude o responder a una solicitud del gobierno.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Información de contacto:
          </Typography>
          <Typography variant="body1" paragraph>
            Si deseas comunicarte con nosotros para comprender más sobre esta Política o deseas comunicarte con nosotros en relación con cualquier asunto sobre los derechos individuales y tu información personal, puedes enviarnos un correo electrónico a <Link href="mailto:noreplyworklinker@gmail.com">noreplyworklinker@gmail.com</Link>.
          </Typography>
        </Paper>
      </Box>
    </Container>
    <Footer/>
    </div>

  );
};

export default PrivacyPolicy;