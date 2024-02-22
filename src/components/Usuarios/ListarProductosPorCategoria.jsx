// En ListaProductosPorCategoria
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";
import { Pagination, Stack } from "@mui/material";
import ListaProductosUsuarios from "./ListaProductosUsuarios";
import { SinCoincidencias } from "../Empresas/SinCoincidencias";

function ListaProductosPorCategoria({email}) {
  const { categoria } = useParams();

  const [producto, setProducto] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = producto.slice(indexOfFirstResult, indexOfLastResult);
  const [statusVisible, setStatusVisible] = useState(true);  // Add this line

useEffect(() => {
  async function getData() {
    try {
      let productos = [];
      if (categoria) {
        productos = await DataStore.query(
          Producto,
          (c) =>
            c.and(
              (c) => [
                c.categoria.eq(categoria),
                c.statusVisible.eq(true) 
              ]
            ),
          { sort: (s) => s.createdAt(SortDirection.DESCENDING) }
        );
      }

      setProducto(productos);
    } catch (error) {
      console.error('Error al obtener datos:', error);
      setStatusVisible(false); // Set statusVisible to false in case of an error
    }
  }

  getData();
}, [categoria]);




  console.log(producto);
  return (
    <div className="col-12 pb-5 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}>
      {producto.length > 0 ? (
        <div className="row p-1">
          <div style={{ color: "#797D7F", fontSize: "14px", float: "left" }}>
            {producto.length} resultados
          </div>
          <div className="col-lg-11 d-flex flex-row flex-wrap">
            {currentResults.map((producto) => (
              <ListaProductosUsuarios
                producto={producto}
                key={producto.id}
                productoId={producto.id}
                selectedProducto={selectedProducto}
                setSelectedProducto={setSelectedProducto}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center" style={{ paddingTop: "2rem" }}>
              <Stack spacing={2} className="justify-content-center align-items-center">
                <Pagination count={Math.ceil(producto.length / resultsPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
              </Stack>
            </div>
          </div>
        </div>
      ) : (
        <SinCoincidencias mensaje={`No hay artículos disponibles para la categoría ${categoria}.`} />
      )}
    </div>
  );
}

export default ListaProductosPorCategoria;
