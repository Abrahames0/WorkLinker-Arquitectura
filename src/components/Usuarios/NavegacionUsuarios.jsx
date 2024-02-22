// React
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// AWS
import { Auth, DataStore } from 'aws-amplify';
// Chakra UI
import { useColorMode, useColorModeValue, Select } from '@chakra-ui/react';
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
import { Categorias } from '../../files/Catalogos';
import { BiSearch } from 'react-icons/bi';




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
  const [tipoCategoria, setTipoCategoria] = useState("null");

  // Estados y funciones relacionadas con el usuario y el carrito
  const [user, setUser] = useState("Usuario");
  const [productosCarrito, setProductosCarrito] = useState([]);

  // Estados y funciones relacionadas con el estilo y el modo de color
  const { colorMode } = useColorMode();
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

  const handleTipoCategoriaChange = (e) => {
    const categoria = e.target.value;
    setTipoCategoria(categoria);
    navigate(`/lista-productos/${categoria}`);
  };


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

            <div className="mx-3" style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Buscar..."
                style={{
                  color: colorMode === 'dark' ? 'white' : 'black',
                  backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa',
                  border: '1px solid #e0e0e0',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  width: '200px',
                }}
              />
              <button
                style={{
                  position: 'absolute',right: '8px',top: '50%',transform: 'translateY(-50%)',backgroundColor: 'transparent', borderLeft: '1px solid #ccc',  cursor: 'pointer',padding: '4px', 
                }}
              >
                <BiSearch />
              </button>
            </div>
            <select
              className={`mx-3`}
              style={{
                color: colorMode === 'dark' ? 'white' : 'black',
                backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa',
              }}
              value={tipoCategoria}
              onChange={handleTipoCategoriaChange}
            >
              <option value="null">Selecciona una categoría</option>
              {Categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <Nav className="mx-1 align-items-center">
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
                {colorMode === 'light' ? <BsCartFill size={23} style={{ color: 'black' }} /> : <BsCart2 size={23} style={{ color: 'white' }} />}
              </StyledBadge>
            </IconButton>


          </Navbar.Collapse>
          {/* Boton modo obscuro */}
          <Nav className="mx-3">

            <ToggleDarkMode />
          </Nav>

        </Container>
      </Navbar>

    </div>
  );
}

export default NavegacionUsuarios;