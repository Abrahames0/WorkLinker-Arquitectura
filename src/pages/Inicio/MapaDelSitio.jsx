import Footer from "../../components/Footer";
import Mapaa from "../../components/Inicio/inicio-bienvenida/MapaDelSitio";
import NavegacionLegal from "../../components/Inicio/inicio-bienvenida/NavegacionLegal";

function Bienvenida() {
  return (
    <div>
      <NavegacionLegal />
      <Mapaa/>
      <Footer />
    </div>
  );
}

export default Bienvenida;
