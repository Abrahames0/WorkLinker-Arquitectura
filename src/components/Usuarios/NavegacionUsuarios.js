import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { Usuarios } from "../../models";
import {BsCart2, BsSearch } from 'react-icons/bs'

function NavegacionUsuarios({ setSession }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState("Usuario");


  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Usuarios, c => c.correo.eq(auth.attributes.email)).then((e) => {
          if (e[0]?.nombre) {
            setUser(e[0].nombre);
            localStorage.setItem("nombreNav", e[0].nombre);
            return
          }
          localStorage.setItem("nombreNav", "usuario");
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/Bienvenida">
              <img src={WorkLinkerRecortada} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electrodomésticos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hogar y Muebles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Moda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deportes Y finess</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Herraminetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Construcción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Industria y oficinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios para Vehículos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Juegos y jugetes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebés</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salud Y Equipamineto Médico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Belleza y Cuidado Personal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Inmuebles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Compra Internacional</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Productos Sustentables</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Más vendidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ver más categorias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Mapa">Ofertas</Nav.Link>
            <Nav.Link href="/Mapa">Moda</Nav.Link>
            <Nav.Link href="/Mapa">Ayuda</Nav.Link>
            <Form className="d-flex search-form">
                <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2 search-input"
                    aria-label="Search"
                />
                <Button className="search-button"> <BsSearch/> </Button>
            </Form>
          </Nav>
            <Nav>
            <NavDropdown
                title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                  <Nav.Link href='/perfil-usuario'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                  <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                </div>
              </NavDropdown>
              <Nav.Link> <BsCart2 size={20}/> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionUsuarios;