import { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { IoPerson } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown, Form,  ListGroup,Dropdown } from "react-bootstrap";
import WorkLinkerRecortada from "../../landing/assets/img/WorkLinkerRecortada.png";
import { Link, useNavigate } from "react-router-dom";
import { ProductoCarrito, Usuarios } from "../../models";
import { IconButton } from "@mui/material";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Nuevo estado para controlar la visibilidad del Dropdown

  const availableRoutes = [
    { path: "/pago-tarjeta", name: "Pago con Tarjeta" },
    { path: "/carrito", name: "Carrito" },
    { path: "/perfil-usuario", name: "Perfil de Usuario" },
    { path: "/inicio-usuarios", name: "Inicio" },
  ];

  const filterRoutes = (term) => {
    const filtered = availableRoutes.filter(route =>
      route.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRoutes(filtered);
    setShowDropdown(filtered.length > 0); // Muestra el Dropdown si hay rutas filtradas
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 1) { // Para empezar a filtrar después de 1 caracter
      filterRoutes(term);
    } else {
      setFilteredRoutes([]);
      setShowDropdown(false); // Oculta el Dropdown si no hay término de búsqueda
    }
  };

  const handleRouteSelection = (path) => {
    navigate(path);
    setSearchTerm("");
    setFilteredRoutes([]);
    setShowDropdown(false); // Oculta el Dropdown después de seleccionar una ruta
  };
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
       
            <Nav className="mx-1 align-items-center">
            <Form>
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Buscar"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowDropdown(filteredRoutes.length > 0)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Retraso para permitir la selección de elementos
              />
              <Dropdown show={showDropdown} onToggle={() => {}}>
                <Dropdown.Menu>
                  {filteredRoutes.map((route) => (
                    <Dropdown.Item key={route.path} onClick={() => handleRouteSelection(route.path)}>
                      {route.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form>

              <NavDropdown
                  title={<span><IoPerson /> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav} </span>} >
                  <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                    <Nav.Link href='/perfil-usuario'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                    <Nav.Link onClick={() => logOut()}><p className="p-7">Cerrar Sesión</p></Nav.Link>
                  </div>
                </NavDropdown>
            </Nav>
            <Nav className="mx-1">
{/*             <Nav.Link href='/usuario-compras'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Tus compras</p></Nav.Link>
 */}            </Nav>
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