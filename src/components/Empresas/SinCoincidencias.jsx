import { Typography } from "@mui/material";
import workLinker from "../../landing/assets/img/WorkLinkerRecortada.png"

export function SinCoincidencias() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh", }}>
      <img src={workLinker} alt="workLinker" style={{ width: "12rem", paddingBottom: '2rem' }} />
      <Typography variant='h5' color='text.secondary' align='center' gutterBottom>
        Hola, aún no hay productos agregados, agrega productos para poder visualizarlos...
      </Typography>
    </div>
  );
}
