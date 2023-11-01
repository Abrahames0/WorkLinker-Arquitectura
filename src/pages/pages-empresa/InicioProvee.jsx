import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Proveedor } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

import { NombreGrupo } from '../../hook/NombreGrupo';
import NavegacionEmpresas from '../../components/Empresas/NavegacionEmpresa';
import ListaProductos from '../../components/Empresas/ListaProductosEditarEliminar';

function InicioEmpresaProvee() {
  const [session, setSession] = useState(null);
  const [idOwner, setIdOwner] = useState('');
  const [email, setEmail] = useState('');
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [existeBde, setExisteBde] = useState(null);
  const [registroCompleto, setRegistroCompleto] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Auth.currentAuthenticatedUser();
        setSession(true);
        setIdOwner(data.username);
        setEmail(data.attributes.email);
        NombreGrupo(data.username, 'proveedores', setNombreGrupo);
        
        const sub = DataStore.observeQuery(Proveedor, c => c.correo.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
          setExisteBde(items.length);
          setRegistroCompleto(items[0]?.registroCompleto || false);
        });
        return () => sub.unsubscribe();
      } catch (err) {
        setSession(false);
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === 'proveedores' ? (
            (existeBde === 1 && registroCompleto) ? (<Navigate to='/inicio-empresa' />) : (existeBde === 0 || registroCompleto === false) && (
              <>
                <NavegacionEmpresas setSession={setSession} />
                <ListaProductos/>
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

export default InicioEmpresaProvee;
