//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from "@mui/material";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
//Importaciones AWS
import awsconfig from './aws-exports';
import { translations } from '@aws-amplify/ui-react';
import { Amplify, Auth, AuthModeStrategyType, I18n } from 'aws-amplify';
//Importaciones Paginas
import LoginUsers from "./pages/pages-users/LoginUsers";
import LoginEmpresa from "./pages/pages-empresa/LoginEmpresa";
import Bienvenida from "./pages/Inicio/Bienvenida";
import InicioUsuario from "./pages/pages-users/InicioUser";
import PerfilUsuario from "./pages/pages-users/PerfilUsuario";
import PerfilEmpresa from "./pages/pages-empresa/PerfilEmpresa";
import RegistroUsuario from "./pages/pages-users/RegistroUsuario";
import RegistroEmpresa from "./pages/pages-empresa/RegistroEmpresa";
import Carrito from "./pages/pages-users/carrito/Carrito";
import RegistroProducto from "./pages/pages-empresa/AgregarProducto";
import ProductosPausados from "./pages/pages-empresa/ProductosPausados";
import DetallesdeProducto from "./pages/pages-users/DetallesProducto";
import InicioEmpresaProvee from "./pages/pages-empresa/InicioProvee";
import PagoTarjetaCredito from "./pages/pages-users/carrito/PagoTarjetaCredito";
import LoginRepartidor from "./pages/pages-repartidor/LoginRepartidor";
import InicioRepartidor from "./pages/pages-repartidor/InicioRepartidor";
import PerfilRepartidor from "./pages/pages-repartidor/PerfilRepartidor";
import RegistroRepartidor from "./pages/pages-repartidor/ResgistroRepartidor";
import DetallesCompras from "./pages/pages-users/DetallesCompras";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MyReCaptchaComponent from "./components/componentesRecicables/reCaptchat";

I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabularies({
  es: {
    'Enter your Email': 'Ingresa tu correo electrónico',
    'Enter your Password': 'Ingresa tu contraseña',
    'Please confirm your Password': 'Confirma tu contraseña',
    'Password must have at least 8 characters': 'La contraseña debe tener al menos 8 caracteres',
    'Password must have numbers': 'La contraseña debe tener números',
    'Password must have lower case letters': 'La contraseña debe tener letras minúsculas',
    'Password must have special characters': 'La contraseña debe tener caracteres especiales',
    'Password must have upper case letters': 'La contraseña debe tener letras mayúsculas',
    'User does not exist.': 'El usuario no existe',
    'Network error': 'Error de red'
  }
});

Amplify.configure({ ...awsconfig, DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH } });
Auth.configure(awsconfig);

const theme = createTheme({
  palette: {
    primary: {
      main: '#5d4fc6',
    },
  },

  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const router = createBrowserRouter([
  
  {
    path: "/login-users",
    element: <LoginUsers />,
  },
  {
    path: "/login-repartidores",
    element: <LoginRepartidor />,
  },
  {
    path: "/inicio-repartidores",
    element: <InicioRepartidor />,
  },
  {
    path: "/usuario-compras",
    element: <DetallesCompras/>,
  },
  {
    path: "/pago-tarjeta",
    element: <PagoTarjetaCredito />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/perfil-usuario",
    element: <PerfilUsuario />,
  },
  {
    path: "/registro-Usuario",
    element: <RegistroUsuario />,
  },
  {
    path: "/registro-empresa",
    element: <RegistroEmpresa />,
  },
  {
    path: "/agregar-producto",
    element: <RegistroProducto />,
  },
  {
    path: "/perfil-proveedor",
    element: <PerfilEmpresa />,
  },
  {
    path: "/login-empresa",
    element: <LoginEmpresa />,
  },
  {
    path: "/inicio-empresa",
    element: <InicioEmpresaProvee />,
  },
  {
    path: "/inicio-usuarios",
    element: < InicioUsuario/>,
  },
  {
    path: "/login-repartidor",
    element: <LoginEmpresa />,
  },
  {
    path: "/registro-repartidor",
    element: <RegistroRepartidor />,
  },
  {
    path: "/productos-pausados",
    element: <ProductosPausados />,
  },
  {
    path: "/producto/:id",
    element: <DetallesdeProducto />,
  },
  {
    path: "/perfil-repartidor",
    element: <PerfilRepartidor />,
  },
  {
    path: "/",
    element: <Bienvenida />,
  },
]);

const config = {
  initialColorMode: 'dark', // o 'light' para el modo claro por defecto
  useSystemColorMode: false, // true si quieres que use la preferencia del sistema
}

const themes = extendTheme({ config })

function App() {
  return (
    <ChakraProvider theme={themes}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
   </ChakraProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}>
    <MyReCaptchaComponent />
    <App />
  </GoogleReCaptchaProvider>
);