import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    navigate('/home');
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
          top: '-30px', // Slightly move up
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            color: '#000', 
            fontWeight: 'bold',
          }}
        >
          User Login
        </Typography>

        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
        >
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
          />
          <TextField
            label="Password"
            variant="outlined"
            required
            fullWidth
            type="password"
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
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
