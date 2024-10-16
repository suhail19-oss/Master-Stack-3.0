import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AdminSignin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E3C',
        color: '#fff',
        padding: '20px',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Admin Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '90%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          required
          fullWidth
          type="email"
          sx={{ backgroundColor: '#fff' }}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          fullWidth
          type="password"
          sx={{ backgroundColor: '#fff' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default AdminSignin;
