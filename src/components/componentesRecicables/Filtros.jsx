import AutocompleteNout from "./AutocompleteNout";
import { Categorias } from "../../files/Catalogos";

function Filtros({filtros, setFiltros}) {

  return(
    <div>
        <AutocompleteNout idInput={"categoria"} nombreInput={"Filtrar por categoria"} autoInfo={filtros} setAutoInfo={setFiltros} arreglo={Categorias}/>
    </div>
  )

}
export default Filtros;