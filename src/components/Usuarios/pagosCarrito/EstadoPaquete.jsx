import React from 'react';
import { Stepper, Step, StepLabel, Typography, Container } from '@mui/material';

function PedidoStepper({ step }) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Estado del Pedido
      </Typography>
      <Stepper activeStep={step} alternativeLabel>
        <Step>
          <StepLabel>Compra Realizada</StepLabel>
        </Step>
        <Step>
          <StepLabel>Paquete en Camino</StepLabel>
        </Step>
        <Step>
          <StepLabel>Paquete Entregado</StepLabel>
        </Step>
      </Stepper>
    </Container>
  );
}

export default PedidoStepper;
