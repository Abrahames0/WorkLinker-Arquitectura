import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function AutocompleteReusable({ idInput, nombreInput, autoInfo, setAutoInfo, arreglo, size}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <Stack spacing={3} sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Autocomplete
          size={size}
          id={idInput}
          disablePortal
          freeSolo
          disableClearable
          options={[...arreglo]}
          renderInput={(params) => (
            <TextField
              {...params}
              label={nombreInput}
              fullWidth
            />
          )}
          value={autoInfo[idInput] || ''}
          onChange={(event, value) => {
            setAutoInfo((prev) => ({ ...prev, [idInput]: value }));
          }}
          open={open}
          onInputChange={(_, value) => {
            if (arreglo.includes(value)) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
          onClose={() => setOpen(false)}
        />
      </Stack>
    </div>
  );
}