import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalPayment() {
  // Reemplaza "TU_ID_DE_CLIENTE_DE_PAYPAL" con tu ID de cliente de PayPal
  const paypalOptions = {
    "client-id": "AcQIZTabmw1Rn5oBW7RxZNG_rvlyYOD4IcDV26Lz3ExTxcy84iFUbsrwGml-Wmk4NhI-bMOavETCknlf",
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <h1>Realiza tu pago con PayPal</h1>
      <PayPalButtons
        createOrder={(data, actions) => {
          // Define la lógica para crear una orden de pago
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "100.00", // El monto a cobrar
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // Define la lógica para cuando el pago se apruebe
          return actions.order.capture().then(function (details) {
            alert("Pago completado: " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalPayment;
