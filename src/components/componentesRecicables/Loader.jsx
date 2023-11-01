import { Box, CircularProgress } from "@mui/material";
import WorkLinker from "../../landing/assets/img/WorkLinkerRecortada.png";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50rem",
      }}
    >
      <img src={WorkLinker} alt="WorkLinker" style={{ width: "14rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "3rem",
        }}
      >
        <CircularProgress />
        <div className="text-center pt-2" style={{ color: "#7F8C8D" }}>
          Cargando, no tardaremos mucho 😘...
        </div>
      </Box>
    </div>
  );
}

export default Loader;
