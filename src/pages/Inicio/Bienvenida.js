 import CarouselInicio from "../../components/Inicio/inicio-bienvenida/Carrusel";
 import NavegacionInicio from "../../components/Inicio/inicio-bienvenida/Navegacion";
import ListaProductosVender from "../../components/Usuarios/ListaProductosVender";

function Bienvenida() {
    return(
        <div>
            <NavegacionInicio/>
            <CarouselInicio/> 
            <ListaProductosVender/>
        </div>
    )
}

export default Bienvenida;