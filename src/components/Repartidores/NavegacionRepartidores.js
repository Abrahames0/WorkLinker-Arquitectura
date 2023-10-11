import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Repartidores } from "../models";
import logoconeecta from "../landing/assets/img/logo-coneecta.webp";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function NavegacionRepartidores({ setSession }) {
  const [ bde, setBde ] = useState("Usuario");
  const [ loadingLogout, setLoadingLogout ] = useState(false);

  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Repartidores, (c) => c.correo.eq(auth.attributes.email)).then(
          (e) => {
            if (e[ 0 ]?.nombre) {
              setBde(e[ 0 ].nombre);
              localStorage.setItem("nombreNav", e[ 0 ].nombre);
              return;
            }
            localStorage.setItem("nombreNav", "Usuario");
          }
        );
      }, 950);
    }
    cargar();
  }, []);

  async function logOut() {
    setLoadingLogout(true);

    try {
      await Auth.signOut({ global: true });
      await DataStore.clear();
      localStorage.clear();
      sessionStorage.clear();
      setSession(false);
      window.location.reload();
      setLoadingLogout(false);
    } catch (error) {
      console.error(error);
      localStorage.clear();
      sessionStorage.clear();
      setSession(false);
      window.location.reload();
      setLoadingLogout(false);
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/Bienvenida">
              <img src={logoconeecta} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/Bienvenida">Inicio</Nav.Link>
              <Nav.Link href="/Mapa">Mapa</Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <IoPerson />{localStorage.nombreNav === undefined ? bde : localStorage.nombreNav}
                  </span>}>
                {
                  (!loadingLogout) ?
                    <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                      <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                    </div>
                    : <div className="mx-5 my-2">
                      <CircularProgress color="primary" />
                    </div>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionRepartidores;
