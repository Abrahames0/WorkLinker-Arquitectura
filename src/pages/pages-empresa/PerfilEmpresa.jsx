import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { NombreGrupo } from "../../hook/NombreGrupo";
import { Navigate, useNavigate } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Proveedor } from "../../models";
import { Typography, Button } from "@mui/material";
//import Footer from '../../components/Footer';
import NavegacionEmpresas from "../../components/Empresas/NavegacionEmpresa";

function PerfilEmpresa() {
  const navigate = useNavigate();
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [session, setSession] = useState("");
  const [userData, setUserData] = useState("");
  const [user, setUser] = useState("")

  //Proveedores
  useEffect(() => {
    async function saves() {
      try {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            await setSession(true);
            await NombreGrupo(user.username, "proveedores", setNombreGrupo)
            await setUser(user.username);  // establecer user.username en el estado del proveedores
            const sub = DataStore.observeQuery(Proveedor, c => c.correo.eq(user.attributes.email), { limit: 1 })
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
            Añade más información a tu perfil dentro de este registro para poder agregar productos a tu perfil
          </Typography>
          <Button onClick={() => navigate('/registro-empresa')} variant="contained">
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
          {nombreGrupo === "proveedores" ? (
            <>
              {userData !== "" && userData !== undefined ? (
                <>
                  <NavegacionEmpresas setSession={setSession} />
                  {/* <ComponentePerfilBdE userID={user} usuario={userData} setUsuario={setUserData}  /> */}
                </>
              ) : (
                <>
                  <NavegacionEmpresas setSession={setSession} />
                  <SinRegistro />
                </>
              )}
            </>
          ) : nombreGrupo === "proveedores" && (
            <Navigate to='/login-empresa' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-users' />
      )}
    </div>
  );
}

export default PerfilEmpresa;
