import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import Logo from "../../../landing/assets/img/WorkLinkerRecortada.png";
import NavegacionLegal from './NavegacionLegal';
import { useColorModeValue } from '@chakra-ui/react';
import DynamicBreadcrumbs from '../../componentesRecicables/MigasDePan';

const MapaDelSitio = () => {
  const linkStyle = useColorModeValue({ textDecoration: 'none', color: '#5d4fc6' }, { textDecoration: 'none', color: '#5d4fc6' });

  return (
    <>
      <NavegacionLegal />
      <DynamicBreadcrumbs />
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Box sx={{ display: 'inline-block' }}>
          <img src={Logo} alt="WorkLinker Logo" style={{ maxWidth: '250px', marginBottom: '40px' }} />
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            <Link to="/mapa-del-sitio" aria-label="Mapa del Sitio">
              Mapa del Sitio
            </Link>
          </Typography>
        </Box>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Sección para Usuarios */}
          <CardSection title="Usuarios" items={[
            { to: "/login-users", label: "Login Usuarios" },
            { to: "/usuario-compras", label: "Detalles de Compras" },
            { to: "/pago-tarjeta", label: "Pago con Tarjeta de Crédito" },
            { to: "/inicio-usuarios/carrito", label: "Carrito de Compras" },
            { to: "/perfil-usuario", label: "Perfil de Usuario" },
            { to: "/registro-Usuario", label: "Registro de Usuario" },
            { to: "/inicio-usuarios", label: "Inicio Usuarios" }
          ]} linkStyle={linkStyle} />

          {/* Sección para Vender */}
          <CardSection title="Vender" items={[
            { to: "/login-empresa", label: "Login Empresa" },
            { to: "/registro-empresa", label: "Registro de Empresa" },
            { to: "/agregar-producto", label: "Registro de Producto" },
            { to: "/perfil-proveedor", label: "Perfil de Proveedor" },
            { to: "/inicio-empresa", label: "Inicio Empresa Proveedor" }
          ]} linkStyle={linkStyle} />

          {/* Sección para Repartidores */}
          <CardSection title="Repartidores" items={[
            { to: "/login-repartidores", label: "Login Repartidores" },
            { to: "/inicio-repartidores", label: "Inicio Repartidores" },
            { to: "/registro-repartidor", label: "Registro Repartidor" },
            { to: "/perfil-repartidor", label: "Perfil Repartidor" }
          ]} linkStyle={linkStyle} />

          {/* Sección General */}
          <CardSection title="General" items={[
            { to: "/privacy-policy", label: "Política de Privacidad" },
            { to: "/terms-conditions", label: "Términos y Condiciones" }
          ]} linkStyle={linkStyle} />
        </div>
      </Box>
    </>
  );
};

// Componente para secciones de tarjetas
const CardSection = ({ title, items, linkStyle }) => (
  <section style={{ flexBasis: '30%', maxWidth: '400px', margin: '10px' }}>
    <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h5" component="h2">{title}</Typography>
        <nav>
          <List sx={{ padding: '0 20px'}}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <Link to={item.to} aria-label={item.label} style={linkStyle}>
                  {item.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </nav>
      </CardContent>
    </Card>
  </section>
);

export default MapaDelSitio;