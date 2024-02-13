import { Navbar, Container, Nav, Button } from "react-bootstrap";
import WorkLinkerRecortada from "../../../landing/assets/img/WorkLinkerRecortada.png";
import { Link } from "react-router-dom";
import { BsCart2, BsCartFill } from 'react-icons/bs';
import { ToggleDarkMode } from "./ColorPagina";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

function NavegacionInicio() {
  const { colorMode } = useColorMode();

  const navLightStyle = { backgroundColor: '#f8f9fa' };
  const navDarkStyle = { backgroundColor: '#343a40' };
  const buttonLightStyle = { color: '#000', borderColor: '#000' }; // Estilos para el modo claro
  const buttonDarkStyle = { color: '#fff', borderColor: '#fff' }; // Estilos para el modo oscuro

  const navStyle = useColorModeValue(navLightStyle, navDarkStyle);
  const buttonStyle = colorMode === 'dark' ? buttonDarkStyle : buttonLightStyle; // Estilo condicional basado en el modo

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
              <Button variant="outline-secondary" href="/login-users" className="me-3" style={buttonStyle}>Inicio de sesión</Button>
              <Nav.Link href="/carrito" className="me-3">
                {colorMode === 'light' ? <BsCartFill size={20} style={{ color: 'black' }}/> : <BsCart2 size={20} style={{ color: 'white' }}/>}
              </Nav.Link>
            </Nav>
            <ToggleDarkMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionInicio;
