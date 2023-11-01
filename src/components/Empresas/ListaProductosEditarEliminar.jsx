import { useEffect, useState } from "react";
import { SinCoincidencias } from "./SinCoincidencias";
import ListaProductos from "./ListaProductos";
import { DataStore, SortDirection } from "aws-amplify";
import { Producto } from "../../models";
import { Pagination, Stack } from "@mui/material";

function ListaProductosEditarEliminar() {
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
      // Si no hay filtros, traer todos los resultados
      producto = await DataStore.query(
        Producto,
        (c) => c.and((c) => [c.statusVisible.eq(true)]),
        {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
        }
      );
      setProducto(producto);
    }
    getData();
  }, []);

  return (
    <div className="col-12 pb-5 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}
    >
      {producto.length > 0 ? (
        <div className="row p-1">
          {/* Indicador de resultados */}
          <div className="col-lg-5">
            <div style={{ color: "#797D7F", fontSize: "14px", float: "left" }}>
              {producto.length} resultados
            </div>
          </div>
          <div className="col-lg-10">
            {/* Listado de producto */}
            {currentResults.map((producto) => (
              <ListaProductos producto={producto} key={producto.id} selectedProducto={selectedProducto} setSelectedProducto={setSelectedProducto}/>
            ))}
          </div>
          <div className="row">
            {/* Paginación productos */}
            <div className="col-lg-5">
              <div className="d-flex flex-column" style={{ paddingTop: "2rem" }}>
                <Stack spacing={2} className="justify-content-center align-items-center">
                  <Pagination count={Math.ceil(producto.length / resultsPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)}/>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SinCoincidencias />
      )}
    </div>
  );
}

export default ListaProductosEditarEliminar;
