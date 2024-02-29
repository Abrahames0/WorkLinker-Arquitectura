// React
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// AWS
import { Auth, DataStore } from 'aws-amplify';
// Chakra UI
import { useColorMode, useColorModeValue, Select, Input } from '@chakra-ui/react';
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
import { ProductoCarrito, Usuarios, Producto } from '../../models';
// Componentes locales
import { ToggleDarkMode } from '../Inicio/inicio-bienvenida/ColorPagina';
import { Categorias, Rutas } from '../../files/Catalogos';
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
  const [productos, setProductos] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    // Limpiar selección de producto al ir a la página de inicio
    if (location.pathname === '/inicio-usuarios') {
      localStorage.removeItem('selectedProduct');
      setSelectedProduct(null);
      setSearchTerm('');
    }
  }, [location.pathname]);

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const auth = await Auth.currentAuthenticatedUser();
        const userData = await DataStore.query(Usuarios, c => c.correo.eq(auth.attributes.email));
        
        if (userData[0]?.nombreUsuario) {
          setUser(userData[0].nombreUsuario);
          localStorage.setItem("nombreNav", userData[0].nombreUsuario);
        } else {
          localStorage.setItem("nombreNav", "Usuario");
        }
      } catch (error) {
        console.error('Error al cargar usuario:', error);
      }
    };

    cargarUsuario();
  }, []);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosQueryResult = await DataStore.query(Producto);
        const productosData = productosQueryResult.map(producto => ({ id: producto.id, nombreProducto: producto.nombreProducto, categoria: producto.categoria }));
        setProductos(productosData);
        console.log(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    cargarProductos();
  }, []);

  useEffect(() => {
    let subscription;

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

    subscription = DataStore.observe(ProductoCarrito).subscribe(msg => {
      if (msg.model === ProductoCarrito) {
        cargarProductosCarrito();
      }
    });

    return () => subscription && subscription.unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await Auth.signOut({ global: true });
      await DataStore.clear();
      localStorage.clear();
      sessionStorage.clear();
      setSession(false);
      navigate("/");
    } catch (error) {
      console.log("error al cerrar sesión: ", error);
    }
  };

  const handleTipoCategoriaChange = (e) => {
    const categoria = e.target.value;
    setTipoCategoria(categoria);
    navigate(`/lista-productos/${categoria}`);
  };

  const handleSearchTermChange = (e) => {
    const valorEntrada = e.target.value;
    setSearchTerm(valorEntrada);

    const filteredProducts = productos.filter((producto) =>
      producto.nombreProducto.toLowerCase().includes(valorEntrada.toLowerCase())
    );

    const filteredCategories = Categorias.filter((categoria) =>
      categoria.toLowerCase().includes(valorEntrada.toLowerCase())
    );

    const filteredRoutes = Rutas.filter((ruta) =>
      ruta.name.toLowerCase().includes(valorEntrada.toLowerCase())
    );

    const combinedResults = [
      ...filteredProducts,
      ...filteredCategories.map((categoria) => ({ id: categoria, nombreProducto: categoria, categoria: "Categorias" })),
      ...filteredRoutes.map((ruta) => ({ id: ruta.path, nombreProducto: ruta.name, categoria: "Rutas" })),
    ];

    setSuggestions(combinedResults);
  };

  const redirectToProduct = (productId) => {
    navigate(`/producto/${productId}`);
  };

  const redirectToCategory = (categoria) => {
    navigate(`/lista-productos/${categoria}`);
  };

  const redirectToPath = (path) => {
    console.log(typeof path);
    navigate(path);
  };

  const handleSelectProduct = (producto) => {
    setSelectedProduct(producto);
    setSearchTerm(producto.nombreProducto);
    setSuggestions([]);
  
    if (producto.categoria === 'Categorias') {
      redirectToCategory(producto.id);
      localStorage.setItem('selectedProduct', JSON.stringify(producto));
    } else if (producto.categoria === 'Rutas') {
      redirectToPath(producto.id);
      localStorage.setItem('selectedProduct', JSON.stringify(producto));
    } else {
      redirectToProduct(producto.id);
      localStorage.setItem('selectedProduct', JSON.stringify(producto));
    }
  };

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      setSelectedProduct(parsedProduct);
      setSearchTerm(parsedProduct.nombreProducto);
    }
  }, []);

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
              <Input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={handleSearchTermChange}
                style={{
                  color: colorMode === 'dark' ? 'white' : 'black',
                  backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa',
                  border: '1px solid #e0e0e0',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  width: '200px',
                }}
              />
              {searchTerm && suggestions.length > 0 && (
                <ul style={{ color: colorMode === 'dark' ? 'white' : 'black', backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa', border: '1px solid #e0e0e0', padding: '0.5rem', borderRadius: '4px', width: '200px', position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
                  {suggestions.map((producto) => (
                    <li
                      key={producto.id}
                      onClick={() => handleSelectProduct(producto)}
                      style={{
                        color: colorMode === 'dark' ? 'white' : 'black',
                        backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa',
                        padding: '0.5rem',
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0,
                        cursor: 'pointer',
                      }}
                    >
                      {producto.nombreProducto}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => {
                  if (suggestions.length === 1) {
                    handleSelectProduct(suggestions[0]);
                  }
                }}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  borderLeft: '1px solid #ccc',
                  cursor: 'pointer',
                  padding: '4px',
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





