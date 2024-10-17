import { Box, Button, Typography } from "@mui/material";

const ChangePhase = () => {
  const handleChangePhase = () => {
    console.log("Phase changed!");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Current Phase: Elections Going On
      </Typography>
      <Button variant="contained" color="primary" onClick={handleChangePhase}>
        Change Phase
      </Button>
    </Box>
  );
};

export default ChangePhase;
