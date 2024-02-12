import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { Repartidor } from "../../models";


import { useColorModeValue } from '@chakra-ui/react';
import { ToggleDarkMode } from "../Inicio/inicio-bienvenida/ColorPagina";
import Badge from '@mui/material/Badge';


import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function NavegacionRepartidores({ setSession }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState("repartidores");

  const navLightStyle = { backgroundColor: '#f8f9fa' };
  const navDarkStyle = { backgroundColor: '#343a40' };

  const navStyle = useColorModeValue(navLightStyle, navDarkStyle);

  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Repartidor, c => c.correo.eq(auth.attributes.email)).then((e) => {
          if (e[0]?.nombreRepartidor) {
            setUser(e[0].nombreRepartidor);
            localStorage.setItem("nombreNav", e[0].nombreRepartidor);
            return
          }
          localStorage.setItem("nombreNav", "repartidores");
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
            <Link to="/inicio-repartidores">
              <img src={WorkLinkerRecortada} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          </Nav>
            <Nav className="mx-1">
              <NavDropdown
                  title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                  <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                    <Nav.Link href='/perfil-repartidor'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                    <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                  </div>
                </NavDropdown>
            </Nav>
            <Nav className="mx-4">
            </Nav>
          </Navbar.Collapse>
          <Nav className="mx-3">
           <ToggleDarkMode/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionRepartidores;