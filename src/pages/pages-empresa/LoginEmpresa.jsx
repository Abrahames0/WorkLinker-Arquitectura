import { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Typography } from "@mui/material";

function LoginEmpresa() {
  const [session, setSession] = useState(false);
  const [nombreGrupo, setNombreGrupo] = useState("proveedores");

  useEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser()
        .then(async (data) => {
          data.length === 0 ? setSession(false) : setSession(true);
          await addToGroup(data.username);
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  //Agregar los usuarios a sus grupos
  async function addToGroup(username) {
    await Auth.currentSession().then((data) => {
      const requestOptions = {
        method: "POST",
        headers: { Authorization: "Bearer ",
        "Content-Type": "application/json", },
        body: JSON.stringify({ groupname: nombreGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP }),
      };
      fetch(
        process.env.REACT_APP_API_WORKLINKER + "/agregar-usuario-a-grupo",
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

  if (!nombreGrupo) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '50rem' }}>
        <Spinner /><Typography variant='h6' color='text.secondary' gutterBottom >Cargando...</Typography>
      </div>
    )
  }

  return (
    <div>
      {session && (
        nombreGrupo === "proveedores" ? (
          <Navigate to="/inicio-empresa" />
        ) : (
          <Navigate to="/login-users" />
        )
      )}
    </div>
  );
}

export default withAuthenticator(LoginEmpresa);
