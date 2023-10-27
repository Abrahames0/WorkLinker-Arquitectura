import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Proveedor } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

import { NombreGrupo } from '../../hook/NombreGrupo';
import NavegacionEmpresas from '../../components/Empresas/NavegacionEmpresa';
import RegistroEmpresaInformacion from '../../components/Empresas/RegistroEmpresaInformacion';

function RegistroEmpresa() {
  const [session, setSession] = useState('');
  const [idOwner, setIdOwner] = useState('');
  const [email, setEmail] = useState('');
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [existeBde, setExisteBde] = useState('');
  const [registroCompleto, setregistroCompleto] = useState(false);

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser().then(async (data) => {
        await setSession(true);
        await setIdOwner(data.username);
        await setEmail(data.attributes.email);
        await NombreGrupo(data.username, 'proveedores', setNombreGrupo);
        const sub = DataStore.observeQuery(Proveedor, (c) => c.correo.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
          setExisteBde(items.length);
          setregistroCompleto(items[0]?.registroCompleto === true ? items[0]?.registroCompleto : false);
        });
        return () => {
          sub.unsubscribe();
        };
      }).catch((err) => {
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
          {nombreGrupo === 'proveedores' ? (
            (existeBde === 1 && registroCompleto) ? (<Navigate to='/inicio-empresa' />) : (existeBde === 0 || registroCompleto === false) && (
              <>
                <NavegacionEmpresas setSession={setSession} />
                 <RegistroEmpresaInformacion idUser={idOwner} email={email}/>
              </>
            )
          ) : nombreGrupo === 'proveedores' && (
            <Navigate to='/login-empresa' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-users' />
      )}
    </div>
  );
}

export default RegistroEmpresa;
