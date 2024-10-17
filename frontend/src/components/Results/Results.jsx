import { Typography, Card, CardContent, Grid } from '@mui/material';

const Results = () => {
  const votingResults = [
    { option: 'Option 1', votes: 120 },
    { option: 'Option 2', votes: 75 },
    { option: 'Option 3', votes: 45 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Voting Results
      </Typography>
      <Grid container spacing={2}>
        {votingResults.map((result, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{result.option}</Typography>
                <Typography variant="body1">{result.votes} Votes</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Results;
