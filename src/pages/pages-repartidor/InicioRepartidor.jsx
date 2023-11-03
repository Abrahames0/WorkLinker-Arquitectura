import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Auth } from "aws-amplify";
import { Repartidor } from "../../models";
import { DataStore } from "@aws-amplify/datastore";

import { Typography, Button } from "@mui/material";

import Footer from "../../components/Footer";
import { NombreGrupo } from "../../hook/NombreGrupo";
import NavegacionRepartidores from "../../components/Repartidores/NavegacionRepartidores";
import RepartidorView from "../../components/Repartidores/EntregaProductos"


function PerfilRepartidor() {
  const navigate = useNavigate();
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [session, setSession] = useState("");
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState("")

  //Repartidores
  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            await setSession(true);
            await NombreGrupo(user.username, "repartidores", setNombreGrupo)
            await setUser(user.username); 
            const sub = DataStore.observeQuery(Repartidor, c => c.correo.eq(user.attributes.email), { limit: 1 })
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
            Aún no has completado tu registro
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom className='pb-2'>
            Añade más información a tu perfil dentro de este registro para poder empezar a trabajar
          </Typography>
          <Button onClick={() => navigate('/registro-repartidor')} variant="contained">
            Completar registro
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === "repartidores" ? (
            <>
              {userData !== "" && userData !== undefined ? (
                <>
                  <NavegacionRepartidores setSession={setSession} />
                  <RepartidorView repartidorID={userData.id} repartidorCorreo={userData.correo}  />
                  <Footer/>
                </>
              ) : (
                <>
                  <NavegacionRepartidores setSession={setSession} />
                  <SinRegistro />
                  <Footer/>
                </>
              )}
            </>
          ) : nombreGrupo === "repartidores" && (
            <Navigate to='/login-empresa' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-users' />
      )}
    </div>
  );
}

export default PerfilRepartidor;
