import React, { useState } from 'react';

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes implementar la lógica de validación y envío de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Número de tarjeta:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Ingrese el número de tarjeta"
      />

      <label htmlFor="cardHolder">Titular de la tarjeta:</label>
      <input
        type="text"
        id="cardHolder"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
        placeholder="Ingrese el nombre del titular"
      />

      <label htmlFor="expirationDate">Fecha de vencimiento:</label>
      <input
        type="text"
        id="expirationDate"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        placeholder="MM/AA"
      />

      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(e) => setCVV(e.target.value)}
        placeholder="Ingrese el CVV"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default CreditCardForm;
