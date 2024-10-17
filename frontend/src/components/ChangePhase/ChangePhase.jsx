import { Box, Button, Typography } from "@mui/material";

const ChangePhase = () => {
  const handleChangePhase = () => {
    console.log("Phase changed!");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "10vh",
        
      }}
    >
      <Box
        sx={{
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          minWidth: "500px", 
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          Current Phase: Elections Going On
        </Typography>
        <Button variant="contained" color="primary" onClick={handleChangePhase}>
          Change Phase
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePhase;
