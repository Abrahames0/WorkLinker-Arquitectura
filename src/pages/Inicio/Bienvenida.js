import Footer from "../../components/Footer";
import CarouselInicio from "../../components/Inicio/inicio-bienvenida/Carrusel";
import NavegacionInicio from "../../components/Inicio/inicio-bienvenida/Navegacion";
import Features from "../../components/Usuarios/Feature";
import ListaProductosVender from "../../components/Usuarios/ListaProductosVender";
import ListaProductosVenderCategoria from "../../components/Usuarios/ListaProductosVenderCategoria";
import DynamicBreadcrumbs from "../../components/componentesRecicables/MigasDePan";
import QuienesSomos from "../pages-users/QuienesSomos";

function Bienvenida() {
  return (
    <div>
      <NavegacionInicio />
      <CarouselInicio />
      <div alignItems="center" justifyContent="center" className=" p-3 col-10 pb-4 w-100 mx-0">
        <DynamicBreadcrumbs />
      </div>
      <Features />
      <ListaProductosVender />
      <QuienesSomos/>
      <ListaProductosVenderCategoria/>
      <Footer />
    </div>
  );
}

export default Bienvenida;
