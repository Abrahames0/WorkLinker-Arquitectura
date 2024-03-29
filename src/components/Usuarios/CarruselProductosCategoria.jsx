import React, { useState } from "react";
import { Box, Flex, Image, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarruselProductosCategoria = ({ productos, categoria }) => {
  const navigate = useNavigate();
  const show = useBreakpointValue({ base: 2, md: 5 });
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + show;
      const filteredProducts = productos.filter(p => p.categoria === categoria);
      return newIndex < filteredProducts.length ? newIndex : prevIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - show;
      return newIndex >= 0 ? newIndex : 0;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <Card raised sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <IconButton onClick={handlePrev} aria-label="Previous" size="lg" isDisabled={startIndex === 0}>
        <FaChevronLeft />
      </IconButton>
      <Flex alignItems="center" justifyContent="center" overflow="hidden" sx={{ width: '100%', position: 'relative' }} className={isAnimating ? 'slideAnimation' : ''}>
        {productos
          ?.filter(p => p.categoria === categoria) // Filtra los productos por la categoría pasada como prop
          .slice(startIndex, startIndex + show)
          .map((item, index) => (
            <Box key={index} p={2} mx={2} display="flex" flexDirection="column" alignItems="center">
              <CardActionArea onClick={() => navigate(`/producto/${item.categoria}/${item.id}`)}>
                <Image src={item.imagenURL} alt={item.nombreProducto} sx={{ width: '180px', height: '180px', objectFit: 'contain' }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.nombreProducto}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${item.precio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box display="flex" justifyContent="flex-start" width="100%">
                <span style={{ backgroundColor: '#5d4fc6' }} className="badge">{item.categoria}</span>
              </Box>
            </Box>
          ))}
      </Flex>
      <IconButton onClick={handleNext} aria-label="Next" size="lg" isDisabled={startIndex + show >= productos.filter(p => p.categoria === categoria).length}>
        <FaChevronRight />
      </IconButton>
    </Card>
  );
};

export default CarruselProductosCategoria;
