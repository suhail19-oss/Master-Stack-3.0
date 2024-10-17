import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Add,
  SwapHoriz,
  AccountCircle,
  Info,
  Check,
  Ballot,
  BarChart,
  Logout,
} from "@mui/icons-material";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("Logout Clicked");
  };
  const navItems = [
    {
      text: "Candidate Details",
      icon: <Info />,
      path: "/home/candidateDetails",
    },
    { text: "Add Candidate", icon: <Add />, path: "/home/addCandidate" },
    { text: "Change Phase", icon: <SwapHoriz />, path: "/home/changePhase" },
    { text: "User Manual", icon: <Info />, path: "/home/userManual" },
    {
      text: "Voter Registration",
      icon: <Check />,
      path: "/home/voterRegistration",
    },
    { text: "Voting Area", icon: <Ballot />, path: "/home/votingArea" },
    { text: "Results", icon: <BarChart />, path: "/home/results" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#001E3C",
          color: "#fff",
          paddingTop: "32px",
        },
      }}
    >
      <ListItem>
        <Box display="flex" alignItems="center" justifyContent="center">
          <ListItemIcon sx={{ color: "#FF7F50", margin: "0" }}>
            <AccountCircle />
          </ListItemIcon>
          <Typography
            variant="h6"
            sx={{
              color: "#FF7F50",
              textAlign: "center",
              marginLeft: "1px",
            }}
          >
            Admin
          </Typography>
        </Box>
      </ListItem>

      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            sx={{
              "&:hover": {
                backgroundColor: "#00395E",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#FFD700",
                transition: "color 0.3s ease",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
            <ListItemText primary={text} sx={{ color: "#fff" }} />
          </ListItem>
        ))}
        <ListItem
          button
          key="Logout"
          onClick={handleLogout}
          sx={{
            "&:hover": {
              backgroundColor: "#00395E",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            },
            "&:hover .MuiListItemText-primary": {
              color: "#FFD700",
              transition: "color 0.3s ease",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}><Logout/></ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "#fff" }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
