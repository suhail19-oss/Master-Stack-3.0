import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const UserSignin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone, email, password } = formData;
    if (!name || !phone || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be exactly 10 digits');
      return;
    }

    
    navigate('/Sidebar');
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
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: '#000', fontWeight: 'bold' }}>
          User Sign Up
        </Typography>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <TextField
          label="Name"
          name="name"
          variant="outlined"
          required
          fullWidth
          value={formData.name}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <TextField
          label="Phone Number"
          name="phone"
          variant="outlined"
          required
          fullWidth
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          inputProps={{
            pattern: '[0-9]{10}',
            title: 'Please enter a valid 10-digit phone number',
          }}
          sx={{ backgroundColor: '#fff' }}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          required
          fullWidth
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          required
          fullWidth
          type="password"
          value={formData.password}
          onChange={handleChange}
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
