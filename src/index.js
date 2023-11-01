//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from "@mui/material";
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
import InicioProveedor from "./pages/pages-empresa/InicioProvee";
import PerfilEmpresa from "./pages/pages-empresa/PerfilEmpresa";
import Carrito from "./pages/pages-users/Carrito";
import RegistroUsuario from "./pages/pages-users/RegistroUsuario";
import RegistroEmpresa from "./pages/pages-empresa/RegistroEmpresa";
import RegistroProducto from "./pages/pages-empresa/AgregarProducto";
import ProductosPausados from "./pages/pages-empresa/ProductosPausados";
import Loader from "./components/componentesRecicables/Loader";

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
    path: "/pruebitas",
    element: <Loader />,
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
    element: <InicioProveedor />,
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
    path: "/productos-pausados",
    element: <ProductosPausados />,
  },
  {
    path: "/",
    element: <Bienvenida />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);