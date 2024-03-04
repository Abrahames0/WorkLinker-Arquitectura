import { Typography } from "@mui/material";
import workLinker from "../../landing/assets/img/WorkLinkerRecortada.png"

export function SinCompras() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh", }}>
      <img src={workLinker} alt="web-linker-store" style={{ width: "12rem", paddingBottom: '2rem' }} />
      <Typography variant='h5' color='text.secondary' align='center' gutterBottom>
        Hola, aún no has echo compras, realiza una compra...
      </Typography>
    </div>
  );
}
