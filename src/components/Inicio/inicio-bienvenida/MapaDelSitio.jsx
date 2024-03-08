import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import Logo from "../../../landing/assets/img/WorkLinkerRecortada.png";
import NavegacionLegal from './NavegacionLegal';
import { useColorModeValue } from '@chakra-ui/react';
import DynamicBreadcrumbs from '../../componentesRecicables/MigasDePan';

function MapaDelSitio() {
  const linkStyle = useColorModeValue({ color: '#000' }, { color: '#fff' });

  return (
    <>
    <NavegacionLegal/>
    <DynamicBreadcrumbs/>
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Box sx={{ display: 'inline-block' }}>
         <img src={Logo} alt="Logo" style={{ maxWidth: '250px', marginBottom: '40px' }} />
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          <Link to="/mapa-del-sitio" aria-label="Mapa del Sitio" style={linkStyle}>
          Mapa del Sitio
          </Link>
        </Typography>
      </Box>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <section aria-labelledby="usuarios-heading" style={{ flexBasis: '30%', maxWidth: '400px', margin: '10px' }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography id="usuarios-heading" variant="h5" component="h2">Usuarios</Typography>
            <nav>
              <List sx={{ padding: '0 20px' }}>
                <ListItem>
                  <Link to="/login-users" aria-label="Login de Usuarios" style={{ textDecoration: 'none', color: '#5d4fc6' }}>
                    Login Usuarios
                  </Link>
                </ListItem>
                <ListItem><Link to="/usuario-compras" aria-label="Detalles de Compras" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Detalles de Compras</Link></ListItem>
              	<ListItem><Link to="/pago-tarjeta" aria-label="Pago con Tarjeta de Crédito" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Pago con Tarjeta de Crédito</Link></ListItem>
                <ListItem><Link to="/carrito" aria-label="Carrito de Compras" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Carrito de Compras</Link></ListItem>
                <ListItem><Link to="/perfil-usuario" aria-label="Perfil de Usuario" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Perfil de Usuario</Link></ListItem>
                <ListItem><Link to="/registro-Usuario" aria-label="Registro de Usuario" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Registro de Usuario</Link></ListItem>
                <ListItem> <Link to="/inicio-usuarios" aria-label="Inicio Usuarios" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Inicio Usuarios</Link></ListItem>
              </List>
            </nav>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="empresa-heading" style={{ flexBasis: '30%', maxWidth: '400px', margin: '10px' }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography id="empresa-heading" variant="h5" component="h2">Vender</Typography>
            <nav>
              <List sx={{ padding: '0 20px' }}>
              <ListItem><Link to="/login-empresa" aria-label="Login Empresa" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Login Empresa</Link></ListItem>
                <ListItem><Link to="/registro-empresa" aria-label="Registro de Empresa" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Registro de Empresa</Link></ListItem>
                <ListItem><Link to="/agregar-producto" aria-label="Registro de Producto" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Registro de Producto</Link></ListItem>
                <ListItem><Link to="/perfil-proveedor" aria-label="Perfil de Proveedor" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Perfil de Proveedor</Link></ListItem>
                <ListItem><Link to="/inicio-empresa" aria-label="Inicio Empresa Proveedor" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Inicio Empresa Proveedor</Link></ListItem>
              </List>
            </nav>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="repartidores-heading" style={{ flexBasis: '30%', maxWidth: '400px', margin: '10px' }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography id="repartidores-heading" variant="h5" component="h2">Repartidores</Typography>
            <nav>
              <List sx={{ padding: '0 20px' }}>
                <ListItem><Link to="/login-repartidores" aria-label="Login Repartidores" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Login Repartidores</Link></ListItem>
                <ListItem><Link to="/inicio-repartidores" aria-label="Inicio Repartidores" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Inicio Repartidores</Link></ListItem>
                <ListItem><Link to="/registro-repartidor" aria-label="Registro Repartidor" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Registro Repartidor</Link></ListItem>
                <ListItem><Link to="/perfil-repartidor" aria-label="Perfil Repartidor" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Perfil Repartidor</Link></ListItem>
              </List>
            </nav>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="general-heading" style={{ flexBasis: '30%', maxWidth: '400px', margin: '10px' }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography id="general-heading" variant="h5" component="h2">General</Typography>
            <nav>
              <List sx={{ padding: '0 20px' }}>
                <ListItem><Link to="/privacy-policy" aria-label="Política de Privacidad" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Política de Privacidad</Link></ListItem>
                 <ListItem><Link to="/terms-conditions" aria-label="Términos y Condiciones" style={{ textDecoration: 'none', color: '#5d4fc6' }}>Términos y Condiciones</Link></ListItem>
              </List>
            </nav>
          </CardContent>
        </Card>
      </section>
    </div>
    </Box>
    </>
  );
}

export default MapaDelSitio;
