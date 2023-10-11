//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/login-users",
    element: <LoginUsers />,
  },
  {
    path: "/login-empresa",
    element: <LoginEmpresa />,
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