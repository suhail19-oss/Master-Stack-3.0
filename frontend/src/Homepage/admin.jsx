import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminSignin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    navigate('/SidebarAdmin');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
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
          position: 'relative',
          top: '-30px',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: '#000', fontWeight: 'bold' }}>
          Admin Sign In
        </Typography>

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
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default AdminSignin;
