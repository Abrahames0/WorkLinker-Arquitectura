import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { Proveedor } from "../../models";
import { ToggleDarkMode } from "../Inicio/inicio-bienvenida/ColorPagina";
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import { useColorModeValue } from '@chakra-ui/react';

function NavegacionEmpresas({ setSession }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState("Proveedor");

  const navLightStyle = { backgroundColor: '#f8f9fa' };
  const navDarkStyle = { backgroundColor: '#343a40' };

  const navStyle = useColorModeValue(navLightStyle, navDarkStyle);


  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Proveedor, c => c.correo.eq(auth.attributes.email)).then((e) => {
          if (e[0]?.correo) {
            setUser(e[0].correo);
            localStorage.setItem("nombreNav", e[0].correo);
            return
          }
          localStorage.setItem("nombreNav", "Proveedor");
        })
      }, 950);
    }
    cargar()
  }, []);

  async function logOut() {
    try {
      await Auth.signOut({ global: true });
      await DataStore.clear();
      localStorage.clear();
      sessionStorage.clear();
      setSession(false);
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <div>
      <Navbar style={navStyle} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/inicio-empresa">
              <img src={WorkLinkerRecortada} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/agregar-producto">Agregar</Nav.Link>
            <Nav.Link href="/Mapa">Catalogar</Nav.Link>
            <Nav.Link href="/productos-pausados">Productos pausados</Nav.Link>
          </Nav>
              <Nav className="pb-">
                  <NavDropdown title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                      <div className="p-1" style={{ maxHeight: '4rem' }}>
                          <Nav.Link href='/perfil-proveedor' className="dropdown-item">
                              <span className="me-2"><CgProfile /></span> Perfil
                          </Nav.Link>
                          <Nav.Link onClick={() => logOut()} className="dropdown-item">
                              <span className="me-2"><FiLogOut /></span> Cerrar Sesión
                          </Nav.Link>
                      </div>
                  </NavDropdown>
              </Nav>
              <Nav>
                <ToggleDarkMode/>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionEmpresas;