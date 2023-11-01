import { useEffect, useState } from "react";

import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";

import { Pagination, Stack } from "@mui/material";

import ListaProductosUsuarios from "./ListaProductosUsuarios";
import { SinCoincidencias } from "../Empresas/SinCoincidencias";

function ListaProductosVender() {
  const [producto, setProducto] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = producto.slice(indexOfFirstResult, indexOfLastResult);

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
    <div className="col-12 pb-5 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}>
      {/* <Filtros filtros={filtros} setFiltros={setFiltros} /> */}
      {producto.length > 0 ? (
        <div className="row p-1">
            <div style={{ color: "#797D7F", fontSize: "14px", float: "left" }}>
              {producto.length} resultados
            </div>
          <div className="col-lg-11 d-flex flex-row flex-wrap">
            {currentResults.map((producto) => (
              <ListaProductosUsuarios producto={producto} key={producto.id} productoId={producto.id} selectedProducto={selectedProducto} setSelectedProducto={setSelectedProducto}/>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center" style={{ paddingTop: "2rem" }}>
                <Stack spacing={2} className="justify-content-center align-items-center">
                    <Pagination count={Math.ceil(producto.length / resultsPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)}/>
                </Stack>
            </div>
          </div>
        </div>
      ) : (
        <SinCoincidencias />
      )}
    </div>
  );
}

export default ListaProductosVender;
