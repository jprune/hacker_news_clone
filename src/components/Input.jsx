import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ '& .MuiTextField-root': {
        backgroundColor: 'rgb(51 65 85)',
        border: '2px solid rgb(148 163 184)',
        borderRadius: '0.375rem',
      } }}
    >
      <TextField
        id="outlined-multiline-static"
        label="Enter your comment!"
        multiline
        rows={4}
        className="bg-slate-700 text-slate-100 border-1 border-slate-300"
        fullWidth
      />
    </Box>
  );
}
