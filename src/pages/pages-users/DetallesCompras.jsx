import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Auth } from "aws-amplify";
import { Usuarios } from "../../models";
import { DataStore } from "@aws-amplify/datastore";

import { Typography,} from "@mui/material";

import Footer from "../../components/Footer";
import { NombreGrupo } from "../../hook/NombreGrupo";
import NavegacionUsuarios from "../../components/Usuarios/NavegacionUsuarios";
import PedidoStepper from "../../components/Usuarios/pagosCarrito/EstadoPaquete";
import Loader from "../../components/componentesRecicables/Loader";

function DetallesCompras() {
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [session, setSession] = useState("");
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState("");

  const currentStep = 1;

  //Usuarios
  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            await setSession(true);
            await NombreGrupo(user.username, "usuarios", setNombreGrupo)
            await setUser(user.username); 
            const sub = DataStore.observeQuery(Usuarios, c => c.correo.eq(user.attributes.email), { limit: 1 })
              .subscribe(({ items }) => { setUserData(items[0]); });
            return () => {
              sub.unsubscribe();
            };
          })
      } catch (error) {
        console.log(error)
      }
    }
    saves()
  }, []);


  const SinRegistro = () => {
    return (
      <div className="container pt-5 pb-5 min-vh-100">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
          <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
            Aún no has realizado compras
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom className='pb-2'>
            Realiza compras, para poder visualizar su estatus
          </Typography>
        </div>
      </div>
    )
  }

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === "usuarios" ? (
            <>
              {userData !== "" && userData !== undefined ? (
                <>
                  <NavegacionUsuarios setSession={setSession} />
                  <PedidoStepper step={currentStep} />
                  <Footer/>
                </>
              ) : (
                <>
                  <NavegacionUsuarios setSession={setSession} />
                  <SinRegistro />
                  <Footer/>
                </>
              )}
            </>
          ) : nombreGrupo === "usuarios" && (
            <Navigate to='/login-empresa' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-users' />
      )}
    </div>
  );
}

export default DetallesCompras;
