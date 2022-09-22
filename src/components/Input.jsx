import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Input() {
  const [value, setValue] = React.useState([]);

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
      className="mt-5"
    >
      <TextField
        id="outlined-multiline-static"
        label="Enter your comment!"
        multiline
        rows={4}
        className="bg-slate-700 text-slate-100 focus:border-none"
        fullWidth
        onChange={handleChange}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        className="bg-slate-500 mt-3 hover:bg-slate-900"
      >
        Post
      </Button>
    </Box>
  );
}
