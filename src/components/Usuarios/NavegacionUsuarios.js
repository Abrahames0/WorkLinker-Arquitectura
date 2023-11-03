import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { ProductoCarrito, Usuarios } from "../../models";
import { BsSearch } from 'react-icons/bs'
import { Button, IconButton } from "@mui/material";

import { useColorModeValue } from '@chakra-ui/react';
import { ToggleDarkMode } from "../Inicio/inicio-bienvenida/ColorPagina";
import Badge from '@mui/material/Badge';


import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function NavegacionUsuarios({ setSession }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState("Usuario");
  const [productosCarrito, setProductosCarrito] = useState([]);

  const navLightStyle = { backgroundColor: '#f8f9fa' };
  const navDarkStyle = { backgroundColor: '#343a40' };

  const navStyle = useColorModeValue(navLightStyle, navDarkStyle);

  useEffect(() => {
    async function cargar() {
      const auth = await Auth.currentAuthenticatedUser();
      setTimeout(() => {
        DataStore.query(Usuarios, c => c.correo.eq(auth.attributes.email)).then((e) => {
          if (e[0]?.nombreUsuario) {
            setUser(e[0].nombreUsuario);
            localStorage.setItem("nombreNav", e[0].nombreUsuario);
            return
          }
          localStorage.setItem("nombreNav", "Usuario");
        })
      }, 950);
    }
    cargar()
  }, []);

  useEffect(() => {
    let subscription;
  
    // Función para obtener los productos del carrito del usuario actual
    const cargarProductosCarrito = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const usuarios = await DataStore.query(Usuarios, c => c.correo.eq(authUser.attributes.email));
        if (usuarios.length > 0) {
          const usuario = usuarios[0];
          const productosDelCarrito = await DataStore.query(ProductoCarrito, pc => pc.usuariosID.eq(usuario.id));
          setProductosCarrito(productosDelCarrito);
        }
      } catch (error) {
        console.error('Error al cargar los productos del carrito:', error);
      }
    };
  
    cargarProductosCarrito();
  
    // Suscribirse a cambios en ProductoCarrito
    subscription = DataStore.observe(ProductoCarrito).subscribe(msg => {
      if (msg.model === ProductoCarrito) {
        cargarProductosCarrito();
      }
    });
  
    // Limpieza de la suscripción al desmontar el componente
    return () => subscription && subscription.unsubscribe();
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
            <Link to="/inicio-usuarios">
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
                <Button variant="contained"> <BsSearch size={15}/> </Button>
            </Form>
          </Nav>
            <Nav className="mx-1">
              <NavDropdown
                  title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                  <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                    <Nav.Link href='/perfil-usuario'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                    <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                  </div>
                </NavDropdown>
            </Nav>
            <Nav className="mx-1">
            <Nav.Link href='/usuario-compras'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Tus compras</p></Nav.Link>
            </Nav>
            <IconButton aria-label="cart" href="/carrito">
              <StyledBadge badgeContent={productosCarrito.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Navbar.Collapse>
          <Nav className="mx-3">
           <ToggleDarkMode/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionUsuarios;