import { useState } from "react";
import { SinCoincidencias } from "./SinCoincidencias";

function ListaProductos() {
    const [productos, setProductos] = useState([]);

    return(
        <div className='col-12 pb-5 w-100 mx-0' style={{ paddingLeft: '2rem', paddingRight: '-2rem' }}>
              {productos.length > 0 ? (
                <div className='row p-1'>
                  {/* Indicador de resultados */}
                  <div className='col-lg-5'>
                    <div style={{ color: '#797D7F', fontSize: '14px', float: 'left' }}>
                      {productos.length} resultados
                    </div>
                  </div>
                </div>
              ) : (
                <SinCoincidencias />
              )}
            </div>
    )
    
} 

export default ListaProductos;