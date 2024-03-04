import React, { useEffect, useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { useColorMode } from '@chakra-ui/react';
import { Producto } from '../../models';
import { DataStore } from 'aws-amplify';

const DynamicBreadcrumbs = () => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const [productos, setProductos] = useState([]);

  const darkModeStyle = {
    color: 'white',
  };

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosQueryResult = await DataStore.query(Producto);
        const productosData = productosQueryResult.map(producto => ({
          id: producto.id,
          nombreProducto: producto.nombreProducto,
          categoria: producto.categoria,
        }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    cargarProductos();
  }, []);

  const getProductName = (id) => {
    const product = productos.find(producto => producto.id === id);
    return product ? product.nombreProducto : 'Unknown Product';
  };

  const getCategoryName = (categoria) => {
    const decodedCategoria = decodeURIComponent(categoria);
    return decodedCategoria;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/inicio-usuarios" underline="hover" style={colorMode === 'dark' ? darkModeStyle : {}} sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Inicio
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ display: 'flex', alignItems: 'center' }} color="text.primary" style={colorMode === 'dark' ? darkModeStyle : {}}>
            {to.startsWith('/producto/') ? getProductName(value) : getCategoryName(value)}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to} underline="hover" style={colorMode === 'dark' ? darkModeStyle : {}} sx={{ display: 'flex', alignItems: 'center' }}>
            {to.startsWith('/producto/') ? (index === pathnames.length - 2 ? getCategoryName(value) : getProductName(value)) : getCategoryName(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;