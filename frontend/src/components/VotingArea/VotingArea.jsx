import { Button, Typography, Card, CardContent, Box, Grid } from "@mui/material";

const VotingArea = () => {
  const handleVote = (option) => {
    console.log(`You voted for: ${option.name}`);
  };

  const candidates = [
    { name: "John Doe", party: "Party A", age: 45, qualification: "BE" },
    { name: "Jane Smith", party: "Party B", age: 50, qualification: "BE" },
    { name: "Alice", party: "Party C", age: 40, qualification: "BE" },
    { name: "Bob Brown", party: "Party D", age: 38, qualification: "B.Tech" },
  ];

  return (
    <Box
      sx={{
        height: "1000vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "50px 0px 0px 0px",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          width: "900px",
          maxWidth:"2000px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Voting Area
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Please select a candidate to cast your vote:
        </Typography>

        <Grid container spacing={2}>
          {candidates.map((candidate, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "250px", 
                  backgroundColor: "#f9f9f9", 
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
                  borderRadius: "8px",
                  padding: 2,
                  border: "1px solid #ddd",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {candidate.name}
                  </Typography>
                  <Typography variant="body2">Party: {candidate.party}</Typography>
                  <Typography variant="body2">Age: {candidate.age}</Typography>
                  <Typography variant="body2">
                    Qualification: {candidate.qualification}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleVote(candidate)}
                  sx={{
                    marginTop: "auto", 
                    borderRadius: "20px",
                  }}
                >
                  Vote
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default VotingArea;
