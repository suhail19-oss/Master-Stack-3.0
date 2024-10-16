import React from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';

const VotingArea = () => {
  const handleVote = (option) => {
    console.log(`You voted for: ${option}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Voting Area
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Please select an option to cast your vote:
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Option 1</Typography>
            <Button variant="contained" color="primary" onClick={() => handleVote('Option 1')}>
              Vote
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Option 2</Typography>
            <Button variant="contained" color="primary" onClick={() => handleVote('Option 2')}>
              Vote
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Option 3</Typography>
            <Button variant="contained" color="primary" onClick={() => handleVote('Option 3')}>
              Vote
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VotingArea;
