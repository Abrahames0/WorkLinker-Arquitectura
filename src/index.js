//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
//Importaciones AWS
/* import { translations } from '@aws-amplify/ui-react';
import { Amplify, Auth, AuthModeStrategyType, I18n } from 'aws-amplify';
import awsconfig from './aws-exports'; */
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from "@mui/material";

//Importaciones Paginas
//import Inicio from "./pages/Inicio";
import LoginUsers from "./pages/pages-users/LoginUsers";
import LoginEmpresa from "./pages/pages-empresa/LoginEmpresa";
import Bienvenida from "./pages/Inicio/Bienvenida";


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

/* I18n.putVocabularies(translations);
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
Auth.configure(awsconfig); */

const router = createBrowserRouter([
 /*  {
    path: "/",
    element: <Navigate to="/" replace />,
  }, */
  /* {
    path: "/login-users",
    element: <LoginUsers />,
  },
  {
    path: "/login-empresa",
    element: <LoginEmpresa />,
  }, */
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