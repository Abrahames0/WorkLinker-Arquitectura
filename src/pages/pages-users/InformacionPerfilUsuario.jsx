import { Avatar, Box, Text, VStack } from '@chakra-ui/react';

function InformacionPerfilUsuarios({ userData }) {
  // Función para obtener las iniciales del nombre
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <div className="p-3">
      <div className="d-flex flex-column align-items-center">
      <Avatar
        name={userData?.nombreUsuario}
        bg="teal.500"
        color="white"
        size="2xl"
        className="mb-3 custom-avatar-size"
        style={{ width: '150px', height: '150px' }}
      >
        {getInitials( userData?.apellidoUsuario)}
      </Avatar>

        <Box textAlign="center">
          <VStack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">
              Nombre: {userData?.nombreUsuario}
            </Text>
            <Text fontSize="md">Email: {userData?.correo}</Text>
            <Text fontSize='md'>telefono: {userData?.telefono}</Text>
          </VStack>
        </Box>
        <Box textAlign="center">
          <VStack spacing={2}>
            <Text fontSize="lg" fontWeight="bold">
              Direccion
            </Text>
            <Text fontSize="md">Direccion: {userData?.calleUsuario} {userData?.numeroUsuario}, {userData?.colonia},{userData?.codigoPostalUsuario}, {userData?.municipioUsuario} </Text>
            <Text fontSize="md">Fecha de creacion: {userData?.createdAt}</Text>
          </VStack>
        </Box>
      </div>
    </div>
  );
}

export default InformacionPerfilUsuarios;
