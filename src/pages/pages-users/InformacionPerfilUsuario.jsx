
function InformacionPerfilUsuarios({ userData }) {
  
    return (
      <div>
        <h2>Perfil del Usuario</h2>
        <p>Nombre: {userData?.nombre}</p>
        <p>Email: {userData?.correo}</p>
      </div>
    );
  }
  
  export default InformacionPerfilUsuarios;
  