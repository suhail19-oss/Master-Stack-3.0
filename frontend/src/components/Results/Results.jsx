import { Typography, Card, CardContent, Grid, Box } from '@mui/material';

const Results = () => {
  const votingResults = [
    { option: 'Option 1', votes: 120 },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        padding:"100px 150px",
      }}
    >
      <Card
        sx={{
          width: '400px',
          textAlign: 'center',
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Voting Results
          </Typography>
          {votingResults.map((result, index) => (
            <Typography key={index} variant="h5">
              {result.option}: {result.votes} Votes
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Results;
