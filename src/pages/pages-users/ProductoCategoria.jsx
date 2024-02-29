import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Usuarios } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

import { NombreGrupo } from '../../hook/NombreGrupo';
import NavegacionUsuarios from '../../components/Usuarios/NavegacionUsuarios';
import Footer from '../../components/Footer';
import ListaProductosPorCategoria from '../../components/Usuarios/ListarProductosPorCategoria';
import Loader from "../../components/componentesRecicables/Loader";
function ProductoCategoria() {
  const [session, setSession] = useState('');
  const [, setIdOwner] = useState('');
  const [email, setEmail] = useState('');
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
  if (!nombreGrupo) {
    if (session) {
      return <Loader />
    }
  }
  

  return (
    <div>
      {session ? (
        <>
          {nombreGrupo === 'usuarios' ? (
            (existeBde === 1 && registroCompleto) ? (<Navigate to='/inicio-usuarios' />) : (existeBde === 0 || registroCompleto === false) && (
              <>
                <NavegacionUsuarios setSession={setSession} />
                 <ListaProductosPorCategoria email={email}/>
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

export default ProductoCategoria;

