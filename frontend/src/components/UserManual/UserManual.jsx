import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Ballot, CheckCircle, Info, PersonAdd } from "@mui/icons-material";

const UserManual = () => {
  const steps = [
    {
      icon: <PersonAdd color="primary" />,
      text: "Step 1: Register as a voter on the Registration page.",
    },
    {
      icon: <Info color="primary" />,
      text: "Step 2: Review the candidate information in the Voting Area.",
    },
    {
      icon: <Ballot color="primary" />,
      text: "Step 3: Select your preferred candidate from the ballot.",
    },
    {
      icon: <CheckCircle color="primary" />,
      text: "Step 4: Confirm and cast your vote. You will receive a success message.",
    },
  ];

  return (
    <Box
      sx={{
        padding: 0,
        backgroundColor: "transparent",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "800px",
          padding: "50px",
          boxShadow: 6,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom color="white">
          Information
        </Typography>
        <Typography variant="body1" align="center" color="white" gutterBottom>
          Follow these steps to cast your vote successfully.
        </Typography>
        <List>
          {steps.map((step, index) => (
            <ListItem key={index}>
              <ListItemIcon>{step.icon}</ListItemIcon>
              <ListItemText
                primary={step.text}
                primaryTypographyProps={{ color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UserManual;
