import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { useColorMode } from '@chakra-ui/react';

const DynamicBreadcrumbs = () => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const darkModeStyle = {
    color: 'white',
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/" underline="hover" style={colorMode === 'dark' ? darkModeStyle : {}} sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Inicio
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ display: 'flex', alignItems: 'center' }} color="text.primary" style={colorMode === 'dark' ? darkModeStyle : {}}>
            {value}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to} underline="hover" style={colorMode === 'dark' ? darkModeStyle : {}} sx={{ display: 'flex', alignItems: 'center' }}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
