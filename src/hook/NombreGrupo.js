import { Auth } from "aws-amplify";

export const NombreGrupo = async (username, nombreGrupo, setNombreGrupo) => {
    try {
        const user = await Auth.currentSession()
        const token = user.idToken.jwtToken;
        const requestOptions = {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ groupname: nombreGrupo, username: username, idAplicacion: process.env.REACT_APP_API_USER_GROUP }),
        };

        const response = await fetch(
            process.env.REACT_APP_API_WORK_LINKER + "/agregar-usuario-a-grupo",
            requestOptions
        );
        const data = await response.json();
        const body = await JSON.parse(data.body);

        await setNombreGrupo(body.GroupName);
    } catch (error) {
        console.log(error);
    }
};