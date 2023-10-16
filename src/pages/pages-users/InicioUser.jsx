import CarouselInicio from "../../components/Inicio/inicio-bienvenida/Carrusel";
import NavegacionUsuarios from "../../components/Usuarios/NavegacionUsuarios";

function InicioUsuario() {
   return(
       <div>
           <NavegacionUsuarios/>
           <CarouselInicio/> 
       </div>
   )
}

export default InicioUsuario;