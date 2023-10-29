import { useEffect, useState } from "react";

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';

import { Navigate } from "react-router-dom";
import { NombreGrupo } from "../../hook/NombreGrupo";
import { Proveedor } from "../../models";
import RegistroProductos from "../../components/Empresas/RegistroProductos";
import NavegacionEmpresas from "../../components/Empresas/NavegacionEmpresa";

function RegistroProducto() {
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [session, setSession] = useState("");
  const [emailOwner, setEmailOwner] = useState("");
  const [existeEmpresa, setExisteEmpresa] = useState("");

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async (data) => {
          await setSession(true);
          await NombreGrupo(data.username, "proveedores", setNombreGrupo);
          setEmailOwner(data.attributes.email);
          const sub = DataStore.observeQuery(Proveedor, c => c.correo.eq(data.attributes.email), { limit: 1 })
            .subscribe(({ items }) => { setExisteEmpresa(items.length); });
          return () => {
            sub.unsubscribe();
          };
        })
        .catch((err) => {
          setSession(false);
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === "proveedores" ? (
            existeEmpresa === 0 ? (<Navigate to='/inicio-empresa' />) : existeEmpresa === 1 && (
              <>
                <NavegacionEmpresas setSession={setSession} />
                <div className='d-flex justify-content-center' style={{ marginTop: '5vw' }}>
                  <div className='d-flex'>
                    <RegistroProductos emailOwner={emailOwner} />
                  </div>
                </div>
              </>
            )
          ) : nombreGrupo === "usuarios" && (
            <Navigate to='/login-users' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/' />
      )}
    </div>
  );
}

export default RegistroProducto;