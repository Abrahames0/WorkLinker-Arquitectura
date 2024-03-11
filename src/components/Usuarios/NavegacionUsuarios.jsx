// React
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// AWS
import { Auth, DataStore } from 'aws-amplify';
// Chakra UI
import { useColorMode, useColorModeValue, Input } from '@chakra-ui/react';
import { Box, List, ListItem } from '@chakra-ui/react';
// React Bootstrap
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// MUI
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
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
  const [, setSelectedProduct] = useState(null);
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
    navigate(`/producto/${categoria}`);
  };

 const handleSearchTermChange = (e) => {
  const valorEntrada = e.target.value;
  setSearchTerm(valorEntrada);



  const filteredCategories = Categorias.filter((categoria) =>
    categoria.toLowerCase().includes(valorEntrada.toLowerCase())
  );

  const filteredRoutes = Rutas.filter((ruta) =>
    ruta.name.toLowerCase().includes(valorEntrada.toLowerCase())
  );

  const combinedResults = [
    ...filteredCategories.map((categoria) => ({
      id: categoria,
      nombreProducto: categoria,
      categoria: "Categorias",
    })),
    ...filteredRoutes.map((ruta) => ({
      id: ruta.path,
      nombreProducto: ruta.name,
      categoria: "Rutas",
    })),
  ];

  setSuggestions(combinedResults);
};




  const redirectToCategory = (categoria) => {
    navigate(`/producto/${categoria}`);
  };

  const redirectToCoincidencia = (coincidencias) => {
    navigate(`/productos/${coincidencias}`);
  };

  const redirectToPath = (path) => {
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
    }
  }

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
          {/* Buscador */}
        <Box className="mx-3" position="relative">
          <Input type="text" placeholder="Buscar producto..." value={searchTerm} onChange={handleSearchTermChange}
            bg={colorMode === 'dark' ? 'gray.700' : 'white'} color={colorMode === 'dark' ? 'white' : 'black'}
            border="1px" borderColor="gray.200" padding="0.5rem" borderRadius="md" width="370px"
          />
          {searchTerm && suggestions.length > 0 && (
            <List
              bg={colorMode === 'dark' ? 'gray.700' : 'white'} color={colorMode === 'dark' ? 'white' : 'black'} border="1px" 
              borderColor="gray.200" padding="0.5rem" borderRadius="md" width="370px" position="absolute" top="100%" left={0}
              zIndex="10" mt="2"
            >
              {suggestions.map((producto) => (
                <ListItem key={producto.id} onClick={() => handleSelectProduct(producto)} padding="0.5rem" listStyleType="none" cursor="pointer" _hover={{ bg: colorMode === 'dark' ? 'gray.600' : 'gray.100' }}>
                  {producto.nombreProducto}
                </ListItem>
              ))}
            </List>
          )}
          <IconButton
            aria-label="Buscar"
            onClick={() => { if (suggestions.length === 1) { handleSelectProduct(suggestions[0]); }else{   redirectToCoincidencia(searchTerm);} }}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              borderLeft: '1px solid',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {colorMode === 'light' ? <BiSearch  style={{ color: 'black' }} /> : <BiSearch style={{ color: 'white' }} />}
          </IconButton>
        </Box>
        {/* Categorias */}
         <div className=" d-flex justify-content-center my-2">
        <select 
          className={'mx-1 align-items-center'}
          alignItems="center"
          style={{ color: colorMode === 'dark' ? 'white' : 'black', backgroundColor: colorMode === 'dark' ? '#343a40' : '#f8f9fa',
            padding: '5px 10px', fontSize: '0.875rem', width: 'auto', height: 'auto' 
          }} 
          value={tipoCategoria} 
          onChange={handleTipoCategoriaChange}
        >
          <option value="null">Categoría</option>
          {Categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        </div>
          <Nav className="mx-1 align-items-center">
            <NavDropdown className="me-3" title={<span style={{ color: colorMode === 'dark' ? 'white' : 'black' }}> {localStorage.nombreNav === undefined ? user : localStorage.nombreNav}</span>}>
              <div className="p-1" style={{ maxHeight: '4rem', marginBottom: '-1rem' }}>
                <Nav.Link href='/perfil-usuario'><p className="p-7 " style={{ marginBottom: '-1rem', marginTop: '-1rem' }}>Perfil</p></Nav.Link>
                <Nav.Link onClick={() => logOut()}><p className="p-7" >Cerrar Sesión</p></Nav.Link>
              </div>
            </NavDropdown>
          </Nav>
          {/* Carrito */}
          <div className=" d-flex justify-content-center my-2">
            <IconButton aria-label="cart" href="/carrito" className="align-items-center">
              <StyledBadge badgeContent={productosCarrito.length} color="secondary">
                {colorMode === 'light' ? <BsCartFill size={23} style={{ color: 'black' }} /> : <BsCart2 size={23} style={{ color: 'white' }} />}
              </StyledBadge>
            </IconButton>
          </div>
        </Navbar.Collapse>
        {/* Boton modo obscuro */}
        <Nav className="mx-3 mx-1 align-items-center">
          <ToggleDarkMode />
        </Nav>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavegacionUsuarios;





