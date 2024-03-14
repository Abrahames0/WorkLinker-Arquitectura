// ProductosCoincidencias.jsx
import { useEffect, useState } from "react";
import { Producto } from "../../models";
import { DataStore, SortDirection } from "aws-amplify";
import { SinCoincidencias } from "../Empresas/SinCoincidencias";
import CarruselProductos from "./CarriselProductos";
import DynamicBreadcrumbs from "../componentesRecicables/MigasDePan";
import ProductoCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function ProductosCoincidencias() {
    const { coincidencias } = useParams();
    console.log(coincidencias);
  
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      async function getData() {
        try {
          const data = await DataStore.query(
            Producto,
            (c) => c.and((c) => [c.statusVisible.eq(true)]),
            { sort: (s) => s.createdAt(SortDirection.DESCENDING) }
          );
          setProductos(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getData();
    }, []);
  
    // Dividir la cadena de coincidencias en palabras
    const palabrasCoincidencias = coincidencias.toLowerCase().split(" ");
  
    // Filtrar productos que coincidan con al menos una palabra
    const productosFiltrados = productos.filter((prod) =>
      palabrasCoincidencias.some(
        (palabra) => prod.nombreProducto.toLowerCase().includes(palabra)
      )
    );
  
    return (
      <div className="container mt-4">
        <DynamicBreadcrumbs />
  
        <div className="row">
          {productosFiltrados.length > 0 ? (
            <div className="col">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {productosFiltrados.map((prod) => (
                  <div key={prod.id} className="col mb-4">
                    <ProductoCard producto={prod} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <SinCoincidencias />
          )}
        </div>
      </div>
    );
  }