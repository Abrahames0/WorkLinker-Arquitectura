import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

import WorkLinkerRecortada from "../../../landing/assets/img/WorkLinkerRecortada.png";
import { ToggleDarkMode } from "./ColorPagina";

function NavegacionLegal() {
  const { colorMode } = useColorMode();

  const navbarStyle = useColorModeValue({ backgroundColor: '#f8f9fa' }, { backgroundColor: '#343a40' });
  const linkStyle = useColorModeValue({ color: '#000' }, { color: '#fff' });

  return (
    <Navbar expand="lg" style={navbarStyle} variant={colorMode}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={WorkLinkerRecortada} alt="Logo de Web Linker Store" style={{ width: "10rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={linkStyle}>
              Inicio
            </Nav.Link>
          </Nav>
          <ToggleDarkMode />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavegacionLegal;
