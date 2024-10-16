import { Box, Button, Typography } from '@mui/material'; 
import { Link } from 'react-router-dom';
import votingImage from './image.jpg';

const Homepage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #E0F7FA 30%, #B2EBF2)',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
      }}
    >
      <Box 
        component="img"
        src={votingImage}
        alt="Voting Illustration"
        sx={{ 
          width: '400px', 
          marginRight: '40px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      />

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: '-40px',
      }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            color: '#004D40', 
            fontWeight: 'bold', 
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' 
          }}
        >
          Empowering Your Voice
        </Typography>

        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: '#00796B', 
            marginBottom: '40px' 
          }}
        >
          Let your voice be heard! Choose your option below.
        </Typography>

        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Link to="/user-signin">
            <Button 
              variant="contained" 
              color="primary" 
              sx={{
                padding: '10px 20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#1976D2',
                },
              }}
            >
              Sign Up as User
            </Button>
          </Link>

          <Link to="/admin-signin">
            <Button 
              variant="contained" 
              color="secondary" 
              sx={{
                padding: '10px 20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#D32F2F',
                },
              }}
            >
              Sign In as Admin
            </Button>
          </Link>

          <Link to="/user-login">
            <Button 
              variant="contained" 
              color="success" 
              sx={{
                padding: '10px 20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#388E3C',
                },
              }}
            >
              Login as User
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
