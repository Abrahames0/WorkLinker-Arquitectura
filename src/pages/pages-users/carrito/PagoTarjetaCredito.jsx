import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';

import {Usuarios} from '../../../models';

import Footer from '../../../components/Footer';
import NavegacionUsuarios from '../../../components/Usuarios/NavegacionUsuarios';
import { NombreGrupo } from '../../../hook/NombreGrupo';
import CheckoutComponent from '../../../components/Usuarios/pagosCarrito/FinalizarCompra';

function PagoTarjetaCredito() {
  const [session, setSession] = useState('');
  const [, setIdOwner] = useState('');
  const [, setEmail] = useState('');
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [existeBde, setExisteBde] = useState('');
  const [registroCompleto, setregistroCompleto] = useState(false);
  const [, setbdeData] = useState({});

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser().then(async (data) => {
        await setSession(true);
        await setIdOwner(data.username);
        await setEmail(data.attributes.email);
        await NombreGrupo(data.username, 'usuario', setNombreGrupo);
        const sub = DataStore.observeQuery(Usuarios, (c) => c.correo.eq(data.attributes.email), { limit: 1 }).subscribe(({ items }) => {
          setExisteBde(items.length);
          setregistroCompleto(items[0]?.registroCompleto === true ? items[0]?.registroCompleto : false);
          if (items.length > 0) {
            setbdeData(items[0]);
          }
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
          {nombreGrupo === 'usuarios' ? (
            (existeBde === 1 && registroCompleto) ? (<Navigate to='/inicio-usuarios' />) : (existeBde === 0 || registroCompleto === false) && (
              <>
                <NavegacionUsuarios setSession={setSession}  />
                 <CheckoutComponent />
                 <Footer/>
              </>
            )
          ) : nombreGrupo === 'empresa' && (
            <Navigate to='/login-empresa' />
          )}
        </>
      ) : session === false && (
        <Navigate to='/login-users' />
      )}
    </div>
  );
}

export default PagoTarjetaCredito;
