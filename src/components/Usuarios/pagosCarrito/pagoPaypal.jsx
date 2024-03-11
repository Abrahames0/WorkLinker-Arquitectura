import React from 'react';
import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

export const PayPalButton = ({ total }) => {
  return (
    <div>
      <PayPalButtons
      fundingSource={FUNDING.PAYPAL}
        style={{
          layout: 'vertical',
          color: 'blue', // Cambia el color del botón ( 'gold', 'blue', 'silver', 'white', 'black')
          shape: 'pill', // Cambia la forma del botón ('rect', 'pill')
          label: 'paypal', // Cambia el tipo de etiqueta ('paypal', 'checkout', 'buynow', 'pay')
          height: 40,
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "MXN",
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(details => {
            const paymentData = {
              payerID: data.payerID,
              orderID: data.orderID,
            };
            console.log('Payment Approved: ', paymentData);
          });
        }}
      />
    </div>
  );
};
