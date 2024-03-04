import { Typography } from "@mui/material";
import workLinker from "../../landing/assets/img/WorkLinkerRecortada.png"

export function SinCoincidencias() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh", }}>
      <img src={workLinker} alt="Web-Linker-Store" style={{ width: "12rem", paddingBottom: '2rem' }} />
      <Typography variant='h5' color='text.secondary' align='center' gutterBottom>
        Hola, aún no hay productos agregados
      </Typography>
    </div>
  );
}
