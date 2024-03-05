import Footer from "../../components/Footer";
import Mapaa from "../../components/Inicio/inicio-bienvenida/MapaDelSitio";
import NavegacionLegal from "../../components/Inicio/inicio-bienvenida/NavegacionLegal";
import DynamicBreadcrumbs from "../../components/componentesRecicables/MigasDePan";

function Bienvenida() {
  return (
    <div>
      <NavegacionLegal />
      <DynamicBreadcrumbs/>
      <Mapaa/>
      <Footer />
    </div>
  );
}

export default Bienvenida;
