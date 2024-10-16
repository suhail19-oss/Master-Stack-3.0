import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
    qualification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 400,
        margin: '100px auto',
        padding: '20px',
        
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#3F51B5' }}>
          Add Candidate
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
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
            <Button variant="contained" color="primary" type="submit">
              Add Candidate
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCandidate;
