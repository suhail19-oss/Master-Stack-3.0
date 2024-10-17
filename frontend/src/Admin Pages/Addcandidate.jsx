import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
    qualification: '',
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    
    setSnackbarMessage('Candidate added successfully!');
    setOpenSnackbar(true);
    
    
    setFormData({
      name: '',
      party: '',
      age: '',
      qualification: '',
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      party: '',
      age: '',
      qualification: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        margin: '130px auto', 
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#3F51B5' }}>
          Add Candidate
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} sx={{ padding: 2, marginTop: 0 }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Party"
              name="party"
              variant="outlined"
              value={formData.party}
              onChange={handleChange}
              required
            />
            <TextField
              label="Age"
              name="age"
              variant="outlined"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <TextField
              label="Qualification"
              name="qualification"
              variant="outlined"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                Add Candidate
              </Button>
              <Button variant="outlined" color="primary" onClick={handleClear} sx={{ marginTop: 2 }}>
                Clear
              </Button>
            </Box>
          </Box>
        </form>
      </CardContent>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default AddCandidate;
