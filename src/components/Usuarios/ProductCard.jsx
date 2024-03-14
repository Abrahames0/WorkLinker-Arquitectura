import { Box, Image, Text, VStack, HStack, Badge } from "@chakra-ui/react";

export default function ProductoCard({ producto }) {
  return (
    <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bgColor="white" >

      <HStack spacing={4}>
        <Image src={producto.imagenURL} alt={producto.nombreProducto} boxSize="100px" objectFit="cover" />
        <VStack align="start" justify="center">
          <Text fontWeight="bold" color="black" fontSize="lg">{producto.nombreProducto}</Text>
          <Text color="black">${producto.precio}</Text>
          {producto.stock > 0 ? (
            <Badge colorScheme="green">En stock</Badge>
          ) : (
            <Badge colorScheme="red">Agotado</Badge>
          )}
        </VStack>
      </HStack>
    </Box>
  );
}
