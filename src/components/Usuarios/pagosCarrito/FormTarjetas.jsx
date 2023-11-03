import React, { useEffect, useState } from 'react';
import { TextField, Grid, Card, CardContent, Typography, InputAdornment } from '@mui/material';
import { BiLogoVisa, BiLogoMastercard } from 'react-icons/bi';

function CreditCardForm({ onCardDetailsChange, isFormValid }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  useEffect(() => {
    handleFormChange();
  }, [cardNumber, cardHolder, expirationDate, cvv]);

  const handleFormChange = () => {
    const isValid = validateCardNumber(cardNumber) &&
                    validateCardHolder(cardHolder) &&
                    validateExpirationDate(expirationDate) &&
                    validateCVV(cvv);
    onCardDetailsChange(isValid);
  };



  const validateCardNumber = (number) => {
    return /^[0-9]{13,16}$/.test(number);
  };

  const validateCardHolder = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
  };

  const validateExpirationDate = (date) => {
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(date)) return false;
    
    const parts = date.split('/');
    const today = new Date();
    const expDate = new Date(`20${parts[1]}`, parts[0]);
    
    return expDate > today;
  };

  const validateCVV = (cvv) => {
    return /^[0-9]{3,4}$/.test(cvv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetear los errores
    setErrors({ cardNumber: '', cardHolder: '', expirationDate: '', cvv: '' });

    // Variables para controlar la validez de cada campo
    let isValid = true;
    let errorsTemp = {};

    if (!validateCardNumber(cardNumber)) {
      errorsTemp.cardNumber = 'El número de la tarjeta no es válido.';
      isValid = false;
    }
    
    if (!validateCardHolder(cardHolder)) {
      errorsTemp.cardHolder = 'El nombre del titular de la tarjeta no es válido.';
      isValid = false;
    }

    if (!validateExpirationDate(expirationDate)) {
      errorsTemp.expirationDate = 'La fecha de vencimiento no es válida o ya ha expirado.';
      isValid = false;
    }

    if (!validateCVV(cvv)) {
      errorsTemp.cvv = 'El CVV no es válido.';
      isValid = false;
    }

    setErrors(errorsTemp);

    if (isValid) {
    }
  };

  const handleCardNumberChange = (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);
    setErrors({ ...errors, cardNumber: validateCardNumber(newCardNumber) ? '' : 'El número de la tarjeta no es válido.' });
  };

  const handleCardHolderChange = (e) => {
    const newCardHolder = e.target.value;
    setCardHolder(newCardHolder);
    setErrors({ ...errors, cardHolder: validateCardHolder(newCardHolder) ? '' : 'El nombre del titular de la tarjeta no es válido.' });
  };

  const handleExpirationDateChange = (e) => {
    let value = e.target.value;
    
    value = value.replace(/[^\d]/g, '');
  
    if (value.length === 2 && expirationDate.length === 2) {
      value += '/';
    } else if (value.length > 2 && value.indexOf('/') === -1) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setExpirationDate(value);
    const isValidDate = validateExpirationDate(value);
    setErrors({ ...errors, expirationDate: isValidDate ? '' : 'La fecha de vencimiento no es válida o ya ha expirado.' });
  };

  const handleCVVChange = (e) => {
    const newCVV = e.target.value;
    setCVV(newCVV);
    setErrors({ ...errors, cvv: validateCVV(newCVV) ? '' : 'El CVV no es válido.' });
  };

  const getCardTypeIcon = (number) => {
    const firstDigit = number.substring(0, 1);
    switch (firstDigit) {
      case '4':
        return <BiLogoVisa size={20} />;
      case '5':
        return <BiLogoMastercard size={20} />;
      default:
        return null;
    }
  };

  return (
    <Card sx={{ maxWidth: 480, mx: "auto", mt: 5 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Detalles de la tarjeta de crédito/debito
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Número de tarjeta"
                variant="outlined"
                value={cardNumber}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Ingrese el número de tarjeta"
                inputProps={{ maxLength: 16 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {getCardTypeIcon(cardNumber)}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Titular de la tarjeta"
                variant="outlined"
                value={cardHolder}
                error={!!errors.cardHolder}
                helperText={errors.cardHolder}
                onChange={handleCardHolderChange}
                placeholder="Ingrese el nombre del titular"
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
              fullWidth
              label="Fecha de vencimiento"
              variant="outlined"
              value={expirationDate}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate}
              onChange={handleExpirationDateChange}
              placeholder="MM/AA"
              inputProps={{ maxLength: 5 }} 
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                value={cvv}
                error={!!errors.cvv}
                helperText={errors.cvv}
                onChange={handleCVVChange}
                placeholder="Ingrese el CVV"
                inputProps={{ maxLength: 3 }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Enviar
              </Button>
            </Grid> */}
          </Grid>
          </form>
      </CardContent>
    </Card>
  );
}

export default CreditCardForm;