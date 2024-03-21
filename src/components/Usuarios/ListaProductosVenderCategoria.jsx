import { useEffect, useState } from "react";

import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";

import { SinCoincidencias } from "../Empresas/SinCoincidencias";
import CarruselProductosCategoria from "./CarruselProductosCategoria";
import { Typography } from "@mui/material";

function ListaProductosVenderCategoria() {
  const [producto, setProducto] = useState([]);
 
  useEffect(() => {
    async function getData() {
      let producto = [];
      producto = await DataStore.query( Producto, (c) => c.and((c) => [c.statusVisible.eq(true)]),
        { sort: (s) => s.createdAt(SortDirection.DESCENDING),}
      );
      setProducto(producto);
    }
    getData();
  }, []);

  return (
    <div alignItems="center" justifyContent="center" className=" p-4 col-10 pb-3 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}>
      {producto.length > 0 ? (
        <div className="row p-1 justify-content-center" sx={{ width: '100%', position: 'relative' }}>
          <div className=" mb-4 col-lg-11 d-flex flex-row flex-wrap align-items-center justify-content-center">
          <div className="mb-4 col-lg-11 flex-row flex-wrap">
          <Typography variant="h4" component="h3" gutterBottom>
          Deportes y Fitness
          </Typography>
            <CarruselProductosCategoria productos={producto} categoria="Deportes y Fitness" />
          </div>
          <div className="mb-4 col-lg-11 flex-row flex-wrap">
            <Typography variant="h4" component="h3" gutterBottom>
              Juegos y Juguetes
            </Typography>
            <CarruselProductosCategoria productos={producto} categoria="Juegos y Juguetes" />
          </div>
          </div>
        </div>      
      ) : (
        <SinCoincidencias />
      )}
    </div>
  );
}

export default ListaProductosVenderCategoria;