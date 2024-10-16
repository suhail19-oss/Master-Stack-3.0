import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const UserSignin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw', // Full width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E3C',
        padding: '20px',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '90%',
          maxWidth: '400px',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: '#000', fontWeight: 'bold' }}>
          User Sign Up
        </Typography>
        
        <TextField
          label="Name"
          variant="outlined"
          required
          fullWidth
          sx={{ backgroundColor: '#fff' }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          required
          fullWidth
          type="tel"
          inputProps={{
            pattern: '[0-9]{10}', // Ensures 10-digit numbers
            title: 'Please enter a valid 10-digit phone number',
          }}
          sx={{ backgroundColor: '#fff' }}
        />
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            padding: '10px',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default UserSignin;
