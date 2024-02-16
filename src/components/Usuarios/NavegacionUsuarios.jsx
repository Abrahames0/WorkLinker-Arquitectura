// React
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// AWS
import { Auth, DataStore } from 'aws-amplify';
// Chakra UI
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
// React Bootstrap
import { Navbar, Container, Nav, NavDropdown, Form, Dropdown } from 'react-bootstrap';
// MUI
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
// Iconos
import { BsCart2, BsCartFill } from 'react-icons/bs';
// Imágenes
import WorkLinkerRecortada from '../../landing/assets/img/WorkLinkerRecortada.png';
// Modelos de DataStore
import { ProductoCarrito, Usuarios } from '../../models';
// Componentes locales
import { ToggleDarkMode } from '../Inicio/inicio-bienvenida/ColorPagina';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function NavegacionUsuarios({ setSession }) {
  
// Estados y funciones relacionadas con el routing y la navegación
const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState("");
const [filteredRoutes, setFilteredRoutes] = useState([]);
const [showDropdown, setShowDropdown] = useState(false);

// Estados y funciones relacionadas con el usuario y el carrito
const [user, setUser] = useState("Usuario");
const [productosCarrito, setProductosCarrito] = useState([]);

// Estados y funciones relacionadas con el estilo y el modo de color
const { colorMode } = useColorMode();
const navLightStyle = { backgroundColor: '#f8f9fa' };
const navDarkStyle = { backgroundColor: '#343a40' };
const navStyle = useColorModeValue(navLightStyle, navDarkStyle);

// Datos y funciones relacionadas con las rutas disponibles y su filtrado
const availableRoutes = [
  { path: "/carrito", name: "Carrito" },
  { path: "/perfil-usuario", name: "Perfil de Usuario" },
  { path: "/inicio-usuarios", name: "Inicio" },
];

const filterRoutes = (term) => {
  const filtered = availableRoutes.filter(route =>
    route.name.toLowerCase().includes(term.toLowerCase())
  );
  setFilteredRoutes(filtered);
  setShowDropdown(filtered.length > 0);
};

const handleSearchChange = (e) => {
  const term = e.target.value;
  setSearchTerm(term);
  if (term.length > 1) {
    filterRoutes(term);
  } else {
    setFilteredRoutes([]);
    setShowDropdown(false);
  }
};

const handleRouteSelection = (path) => {
  navigate(path);
  setSearchTerm("");
  setFilteredRoutes([]);
  setShowDropdown(false);
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
            <Form className="me-4">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-5"
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

            <NavDropdown className="me-3" title={<span style={{ color: colorMode === 'dark' ? 'white' : 'black' }}> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav}</span>}>
              <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                <Nav.Link href='/perfil-usuario'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                <Nav.Link onClick={() => logOut()}><p className="p-7" >Cerrar Sesión</p></Nav.Link>
              </div>
            </NavDropdown>
            </Nav>
            {/* Carrito */}
            <IconButton aria-label="cart" href="/carrito" className="me-1">
              <StyledBadge badgeContent={productosCarrito.length} color="secondary">
              {colorMode === 'light' ? <BsCartFill size={23} style={{ color: 'black' }}/> : <BsCart2 size={23} style={{ color: 'white' }}/>}
              </StyledBadge>
            </IconButton>

          </Navbar.Collapse>
          {/* Boton modo obscuro */}
          <Nav className="mx-3">
           <ToggleDarkMode/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavegacionUsuarios;