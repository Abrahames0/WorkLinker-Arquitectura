import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function AutocompleteNout({ idInput, nombreInput, autoInfo, setAutoInfo, arreglo }) {
  const handleClear = () => {
    setAutoInfo((prev) => ({ ...prev, [idInput]: '' }));
  };

  return (
    <div style={{width:'100%'}}>
      <Stack spacing={3} sx={{ paddingTop:'10px', paddingBottom:'10px' }}>
        <Autocomplete
          size="normal"
          id={idInput}
          disablePortal
          freeSolo
          options={[...arreglo]}
          value={autoInfo[idInput] || ''}
          onInputChange={(event, newInputValue) => {
            setAutoInfo((prev) => ({ ...prev, [idInput]: newInputValue }));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={nombreInput}
              fullWidth
            />
          )}
          onChange={(event, newValue) => { 
            if (newValue === null) {
              setAutoInfo((prev) => ({ ...prev, [idInput]: '' }));
            } else {
              setAutoInfo((prev) => ({ ...prev, [idInput]: newValue }));
            }
          }}
          endadornment={
            autoInfo[idInput] && (
              <IconButton onClick={handleClear} edge="end" style={{marginRight:'1rem', padding:'2px'}}>
                <ClearIcon style={{fontSize:'20px'}}/>
              </IconButton>
            )
          }
        />
      </Stack>
    </div>
  );
}
