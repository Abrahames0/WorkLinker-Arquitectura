import React, { useEffect, useState } from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react";

import useAuth from '../hook/AuthHook';
import { useNavigate } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';

function Login() {
    /* const navigate = useNavigate();
    const { session, setSession, nombreGrupo } = useAuth();
    const localSession = localStorage.getItem("registrado");
    let [ groupName, setGroupName ] = useState((typeof nombreGrupo === "undefined" || nombreGrupo === null) ? "" : nombreGrupo);

    useEffect(() => {
        const checkSession = async () => {
            if (localSession) {
                setSession(true);
                localStorage.setItem("nombreGrupo", nombreGrupo);
                setGroupName(localStorage.getItem("nombreGrupo"));
                navigate("/Bienvenida");
            } else {
                setSession(false);
            }
        }

        checkSession();
    }, [ session, localSession, groupName, navigate, nombreGrupo, setSession ]);

    return (
        <div className="App">
        </div>
    ); */
};

export default Login;             //withAuthenticator(Login);