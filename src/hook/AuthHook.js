/* import { useState, useEffect } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Clientes } from '../models';
import { NombreGrupo } from './NombreGrupo';

const useAuth = () => {
    const [ user, setUser ] = useState(null);

    const [ session, setSession ] = useState(false);
    const [ nombreGrupo, setNombreGrupo ] = useState("");
    const [ loadingData, setLoadingData ] = useState(true);
    const [ existe, setExiste ] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            setLoadingData(true);

            try {
                const data = await Auth.currentAuthenticatedUser();
                setSession(true);
                await NombreGrupo(data.username, 'analitica', setNombreGrupo);

                const userExists = await DataStore.query(Clientes, c => c.correo.eq(data.attributes.email));
                const resp = userExists.length > 0;

                localStorage.setItem("registrado", resp);
                setExiste(resp);
                setLoadingData(false);
                setUser(data);
            } catch (error) {
                setUser(null);
            }

            setLoadingData(false);
        };

        checkUser();
    }, []);

    return { user, loadingData, session, setSession, nombreGrupo, existe };
};

export default useAuth; */