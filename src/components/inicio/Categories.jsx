import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Navbar } from 'react-bootstrap';
import { createFilterOptions } from '@mui/material';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

const top100Films = [
  // Tus datos mock o data de ejemplo
];

function Categories() {
  return (
    <Navbar.Brand>
      <Autocomplete
        id="filter-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        sx={{ width: 180 }}
        renderInput={(params) => <TextField {...params} label="Categorías" />}
      />
    </Navbar.Brand>
  );
}

export default Categories;
