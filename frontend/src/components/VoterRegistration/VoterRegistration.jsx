import  { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const VoterRegistration = () => {
  const [aadhar, setAadhar] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (aadhar.length !== 12 || isNaN(aadhar)) {
      setError('Please enter a valid 12-digit Aadhar number.');
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Please enter a valid email ID.');
      return;
    }

    setError('');
    setSuccess(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', 
        paddingTop: '50px',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: '500px',
          padding: '40px',
          boxShadow: 6,
          borderRadius: '12px',
          backgroundColor: '#ffffff',
          margin: '100px 60px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Voter Registration
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: '15px' }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginBottom: '15px' }}>
            Registration successful!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Aadhar Card Number"
            variant="outlined"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            sx={{ marginBottom: '20px' }}
            inputProps={{ maxLength: 12 }}
          />
          <TextField
            fullWidth
            label="Email ID"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px' }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default VoterRegistration;
