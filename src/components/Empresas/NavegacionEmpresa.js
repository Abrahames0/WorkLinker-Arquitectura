import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { Proveedor } from "../../models";

function NavegacionEmpresas({ setSession }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState("Proveedor");


  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Proveedor, c => c.correo.eq(auth.attributes.email)).then((e) => {
          if (e[0]?.nombre) {
            setUser(e[0].nombre);
            localStorage.setItem("nombreNav", e[0].nombre);
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/inicio-empresa">
              <img src={WorkLinkerRecortada} alt="logo" style={{ width: "10rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/Mapa">Agregar</Nav.Link>
            <Nav.Link href="/Mapa">Catalogar</Nav.Link>
            <Nav.Link href="/Mapa">Productos pausados</Nav.Link>
          </Nav>
            <Nav>
            <NavDropdown
                title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                  <Nav.Link href='/perfil-proveedor'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                  <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionEmpresas;