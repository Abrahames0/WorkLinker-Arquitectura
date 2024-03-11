// En ListaProductosPorCategoria
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";
import { Pagination, Stack } from "@mui/material";
import ListaProductosUsuarios from "./ListaProductosUsuarios";
import { SinCoincidencias } from "../Empresas/SinCoincidencias";
import Loader from "../componentesRecicables/Loader";
import DynamicBreadcrumbs from "../componentesRecicables/MigasDePan";
import FiltroMenuLateral from "./FiltroMenuLateral";

function ListaProductosPorCategoria({email}) {
  
  const { categoria } = useParams();
  console.log(categoria);

  const [producto, setProducto] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [precioFiltro, setPrecioFiltro] = useState([0, 1]); // Rango de precios para el filtro
  const resultsPerPage = 10;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = producto.slice(indexOfFirstResult, indexOfLastResult);
  const [, setStatusVisible] = useState(true);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  async function getData() {
    try {
      setLoading(true); // Show loader
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
      setLoading(false); // Hide loader
    } catch (error) {
      console.error('Error al obtener datos:', error);
      setStatusVisible(false); // Set statusVisible to false in case of an error
      setLoading(false); // Hide loader
    }
  }

  getData();
}, [categoria]);

  return (
    <div className="container-fluid">
      <div className="row">
          <DynamicBreadcrumbs />
        <div className="col-md-2">
          <FiltroMenuLateral precioFiltro={precioFiltro} setPrecioFiltro={setPrecioFiltro} />
        </div>
        <div className="col-md-8">
          {loading ? (
      <Loader />
    ) : (
      <>
        {producto.length > 0 ? (
          <div className="row p-1">
            <div style={{ color: "#797D7F", fontSize: "14px", float: "left" }}>
              {producto.length} resultados
            </div>
            <div className="col-lg-11 d-flex flex-row flex-wrap">
              {currentResults.map((producto) => (
                <ListaProductosUsuarios precioFiltro={precioFiltro} setPrecioFiltro={setPrecioFiltro} producto={producto} selectedProducto={selectedProducto} setSelectedProducto={setSelectedProducto}/>
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
      </>
    )}
        </div>
      </div>
    </div>
    
  );
}

export default ListaProductosPorCategoria;
