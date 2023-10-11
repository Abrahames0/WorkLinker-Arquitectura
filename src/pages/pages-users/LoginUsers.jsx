/* import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Clientes, Usuarios } from "../../models";

function LoginUsers() {
  const [session, setSession] = useState(false);
  const [nombreGrupo, setNombreGrupo] = useState("clientes");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async (data) => {
          data.length === 0 ? setSession(false) : setSession(true);
          await addToGroup(data.username);

          const sub = DataStore.observeQuery(
            Usuarios,
            (c) => c.correo.eq(data.attributes.email),
            { limit: 1 }
          ).subscribe(({ items }) => {
            setUserData(items[0])
          });
          return () => {
            sub.unsubscribe();
          };
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);


  //Agregar los usuarios a sus grupos
  async function addToGroup(username) {
    await Auth.currentSession().then((data) => {
      var token = data.idToken.jwtToken;
      const requestOptions = {
        method: "POST",
        headers: { Authorization: "Bearer " + token,
        "Content-Type": "application/json" },
        body: JSON.stringify({ groupname: nombreGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP }),
      };
      fetch(
        process.env.REACT_APP_API_WORK_LINKER + "/agregar-usuario-a-grupo",
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then(async (data) => {
          const body = JSON.parse(data.body);
          await setNombreGrupo(body.GroupName);
        });
    });
  }

  return (
    <div>
      Loading...
      {session ? (
        nombreGrupo === "clientes" ? (
          <Navigate to="/inicio-users" />
        ) : (
          <Navigate to="/login-empresa" />
        )
      ) : (
        <></>
      )}
    </div>
  );
}


export default withAuthenticator(LoginUsers);
 */