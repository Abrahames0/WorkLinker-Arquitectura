import React, { useEffect, useState } from "react";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Proveedor } from "../../models";
import { DataStore } from "aws-amplify";

const CarouselProductos = ({ producto, selectedproducto }) => {
  const show = useBreakpointValue({ base: 2, md: 4 });
  const [, setProvedor] = useState({});

  useEffect(() => {
    async function getData() {
      if (producto) {
        try {
          const provedor = await DataStore.query(Proveedor, (c) =>
            c.id.eq(producto.provedorID)
          );
          setProvedor(provedor[0]);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getData();
  }, [producto]);

  return (
    <Card raised sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>      
      <Flex alignItems="center" justifyContent="center" overflow="hidden" sx={{ width: '100%', position: 'relative' }}>
        {producto.slice(0, show).map((producto, index) => (
          <Box key={index} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={producto.imagenURL} alt={producto.nombreProducto} sx={{ width: '180px', height: '180px', objectFit: 'contain' }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {producto.nombreProducto}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ${producto.precio}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Box>
        ))}
      </Flex>
    </Card>
  );
};

export default CarouselProductos;
