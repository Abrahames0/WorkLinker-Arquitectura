import { useEffect, useState } from "react";

import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";


import { SinCoincidencias } from "../Empresas/SinCoincidencias";
import CarruselProductos from "./CarriselProductos";
import DynamicBreadcrumbs from "../componentesRecicables/MigasDePan";

function ListaProductosVender() {
  const [producto, setProducto] = useState([]);


  useEffect(() => {
    async function getData() {
      let producto = [];
      producto = await DataStore.query(
        Producto, (c) => c.and((c) => [c.statusVisible.eq(true)]),
        { sort: (s) => s.createdAt(SortDirection.DESCENDING),}
      );
      setProducto(producto);
    }
    getData();
  }, []);

  return (
    <div alignItems="center" justifyContent="center" className=" p-4 col-10 pb-5 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}>
      <DynamicBreadcrumbs/>
      {producto.length > 0 ? (
        <div className="row p-1 justify-content-center" sx={{ width: '100%', position: 'relative' }}>
          <div className=" mb-4 col-lg-11 d-flex flex-row flex-wrap align-items-center justify-content-center">
            <CarruselProductos producto={producto} />
          </div>
          <div className=" mb-3 col-lg-11 d-flex flex-row flex-wrap align-items-center justify-content-center">
            <CarruselProductos producto={producto} />
          </div>
        </div>      
      ) : (
        <SinCoincidencias />
      )}
    </div>
  );
}

export default ListaProductosVender;