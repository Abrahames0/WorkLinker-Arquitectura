import React from 'react';
import { Button } from '@chakra-ui/react'; 
import { Typography } from '@mui/material'; 
import Img from '../../landing/assets/img/dribbble-1-unscreen.gif';

export const PaginaError = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#2c3e50' }}> 
      <div className="text-center">
        <img src={Img} alt="Error" style={{ maxWidth: '100%', height: 'auto' }} /> 
        <Typography variant="h4" style={{ color: 'white' }}>404</Typography> 
        <Typography variant="subtitle1" style={{ color: 'white' }}>Look like you're lost</Typography> 
        <Typography variant="body1" style={{ color: 'white', marginBottom: '20px' }}>the page you are looking for not available!</Typography> 
        <Button colorScheme="teal" variant="solid" href="/"> 
          Go to Home
        </Button>
      </div>
    </div>
  );
}
