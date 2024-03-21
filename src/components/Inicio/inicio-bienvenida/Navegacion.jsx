import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import WorkLinkerRecortada from "../../../landing/assets/img/WorkLinkerRecortada.png";
import { Link } from "react-router-dom";
import { BsCart, BsCartFill } from 'react-icons/bs';
import { ToggleDarkMode } from "./ColorPagina";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function NavegacionInicio() {
  const { colorMode } = useColorMode();

  const navStyle = useColorModeValue({ backgroundColor: '#f8f9fa' }, { backgroundColor: '#343a40' });
  const buttonStyle = useColorModeValue({ color: '#000', borderColor: '#000' }, { color: '#fff', borderColor: '#fff' });

  // Función para manejar el desplazamiento suave
  const scrollToQuienesSomos = () => {
    const quienesSomosSection = document.getElementById('quienes-somos');
    quienesSomosSection && quienesSomosSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar style={navStyle} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={WorkLinkerRecortada} alt="Logo de Web Linker Store" style={{ width: "10rem" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* Agregar un Nav.Link para "Quiénes somos" */}
            <Nav.Link onClick={scrollToQuienesSomos} style={{ cursor: 'pointer', ...buttonStyle }}>
              Quiénes somos
            </Nav.Link>
            <Link to="/login-users" style={buttonStyle} className="nav-link me-3">
              Inicio de sesión
            </Link>
            <Link to="/inicio-usuarios/carrito" className="nav-link me-3">
              {colorMode === 'light' ? <BsCartFill size={20} style={{ color: 'black' }}/> : <BsCart size={20} style={{ color: 'white' }}/>}
            </Link>
          </Nav>
          <ToggleDarkMode />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavegacionInicio;
