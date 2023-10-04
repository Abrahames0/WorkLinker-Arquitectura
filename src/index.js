//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
//Importaciones AWS
//import { translations } from '@aws-amplify/ui-react';
//import { Amplify, Auth, AuthModeStrategyType, I18n } from 'aws-amplify';
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from "@mui/material";

//Importaciones Paginas
import Inicio from "./pages/Inicio";


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
    path: "/",
    element: <Navigate to="/Inicio" replace />,
  },
  {
    path: "/Inicio",
    element: <Inicio />,
  }
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