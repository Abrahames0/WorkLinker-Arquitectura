import { CardHeader } from "@mui/material";
import { Card } from "react-bootstrap";

 export function VistaPreviaProducto({ data }) {
    return (
      <div>
        <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1 }} variant="outlined">
          <CardHeader className="text-center" title="Vista previa del producto"> </CardHeader>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
              <h5>Datos del Producto</h5>
              <div className="row p-2">
              <div className="d-flex justify-content-center">
                {data.imagenURL ? <img src={data.imagenURL} alt="Imagen del producto" style={{ width: '100%', maxWidth: '200px' }} /> : <p>No hay imagen cargada.</p>}
              </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <strong>Nombre del producto:</strong> {data.nombreProducto}
                </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <strong>Descripcion:</strong> {data.descripcion}
                </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <strong>Precio:</strong> ${data.precio}
                </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <strong>Stock:</strong> {data.stock}
                </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <strong>Categoria:</strong> {data.categoria}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
  