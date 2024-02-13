import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { NombreGrupo } from "../../hook/NombreGrupo";
import { Navigate, useNavigate } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Usuarios } from "../../models";
import { Typography, Button } from "@mui/material";
//import Footer from '../../components/Footer';
import NavegacionUsuarios from "../../components/Usuarios/NavegacionUsuarios";
import Footer from "../../components/Footer";
import InformacionPerfilUsuarios from "./InformacionPerfilUsuario";

function PerfilUsuario() {
  const navigate = useNavigate();
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [session, setSession] = useState("");
  const [userData, setUserData] = useState("");
  const [, setUser] = useState("")

  //Usuario
  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            await setSession(true);
            await NombreGrupo(user.username, "usuarios", setNombreGrupo)
            await setUser(user.username);  // establecer user.username en el estado del usuario
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
        <div className="pb-2">
          <h1>Mi perfil</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
          <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
            Aún no has completado tu registro
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom className='pb-2'>
            Añade más información a tu perfil dentro de este registro para poder conectarte con empresas acordes a tu perfil
          </Typography>
          <Button onClick={() => navigate('/registro-usuario')} variant="contained">
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
          {nombreGrupo === "usuarios" ? (
            <>
              {userData !== "" && userData !== undefined ? (
                <>
                  <NavegacionUsuarios setSession={setSession} />
                  <InformacionPerfilUsuarios userData={userData}/>
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
            <Navigate to='/login-users' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-empresas' />
      )}
    </div>
  );
}

export default PerfilUsuario;
