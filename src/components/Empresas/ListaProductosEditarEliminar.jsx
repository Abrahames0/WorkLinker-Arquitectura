import { useEffect, useState } from "react";
import { Proveedor, Producto } from "../../models";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { NombreGrupo } from "../../hook/NombreGrupo";
import { Pagination, Stack } from "@mui/material";
import { SinCoincidencias } from "./SinCoincidencias";
import ListaProductos from "./ListaProductos";

function ListaProductosEditarEliminar() {
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [producto, setProducto] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [provedorData, setProvedorData] = useState({});
  const [Productos, setProductos] = useState([]);
  const [session, setSession] = useState("");
  const [user, setUser] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = producto.slice(indexOfFirstResult, indexOfLastResult);

  useEffect(() => {
    // Your first useEffect logic here
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser().then(async (user) => {
          await setSession(true);
          await NombreGrupo(user.username, "proveedores", setNombreGrupo);
          const sub = DataStore.observeQuery(Proveedor, (c) => c.correo.eq(user.attributes.email), { limit: 1 })
            .subscribe(({ items }) => {
              setProvedorData(items[0]);
            });
          return () => {
            sub.unsubscribe();
          };
        });
      } catch (error) {
        console.log(error);
      }
    }
    saves();
  }, []);

  console.log(provedorData.id);
  useEffect(() => {
    // Your second useEffect logic here

      try {
        const sub = DataStore.observeQuery(Producto, (c) => c.proveedorID.eq(provedorData.id)).subscribe(({ items }) => {
          setProductos(items);
        });

        return () => {
          sub.unsubscribe();
        };
      } catch (error) {
        console.log(error);
      }
    
  }, [provedorData]);


  console.log('producto',Productos);

  return (
    <div className="col-12 pb-5 w-100 mx-0" style={{ paddingLeft: "2rem", paddingRight: "-2rem" }}>
      {/* <Filtros filtros={filtros} setFiltros={setFiltros} */}
      {Productos.length > 0 ? (
        <div className="row p-1">
          <div style={{ color: "#797D7F", fontSize: "14px", float: "left" }}>
            {Productos.length} resultados
          </div>
          <div className="col-lg-11 d-flex flex-row flex-wrap">
            {Productos.map((producto) => (
              <ListaProductos
                producto={producto}
                key={producto.id}
                productoId={producto.id}
                selectedProducto={selectedProducto}
                setSelectedProducto={setSelectedProducto}
              />
            ))}
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center align-items-center"
              style={{ paddingTop: "2rem" }}
            >
              <Stack spacing={2} className="justify-content-center align-items-center">
                <Pagination
                  count={Math.ceil(producto.length / resultsPerPage)}
                  page={currentPage}
                  onChange={(event, value) => setCurrentPage(value)}
                />
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

export default ListaProductosEditarEliminar;
