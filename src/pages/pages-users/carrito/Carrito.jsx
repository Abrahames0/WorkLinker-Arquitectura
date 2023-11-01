import { Button } from "@mui/material";
import NavegacionUsuarios from "../../../components/Usuarios/NavegacionUsuarios";

function Carrito(params) {
    return(
        <div>
        <NavegacionUsuarios/>
            No hay productos agregados 
            <Button href="/inicio-usuarios" >Agregar productos </Button>
        </div>
    )
}

export default Carrito;