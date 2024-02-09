import { Navbar, Container, Nav, Button } from "react-bootstrap";
import WorkLinkerRecortada from "../../../landing/assets/img/WorkLinkerRecortada.png";
import { Link } from "react-router-dom";
import {BsCart2 } from 'react-icons/bs'
import { ToggleDarkMode } from "./ColorPagina";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function NavegacionInicio() {
  const { colorMode, toggleColorMode } = useColorMode()

  const navLightStyle = { backgroundColor: '#f8f9fa' };
  const navDarkStyle = { backgroundColor: '#343a40' };

  const navStyle = useColorModeValue(navLightStyle, navDarkStyle);
  const textColor = colorMode === 'dark' ? 'grey.300' : 'text.secondary';

  return (
    <div>
      <Navbar style={navStyle} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/Bienvenida">
              <img src={WorkLinkerRecortada} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          </Nav>
            <Nav>
            <Button variant="outlined" href="/login-users" colorScheme='teal' onClick={toggleColorMode} >Inicio de sesion</Button>
              <Nav.Link href="/login-users"> <BsCart2 size={20}/> </Nav.Link>
            </Nav>
            <ToggleDarkMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionInicio;