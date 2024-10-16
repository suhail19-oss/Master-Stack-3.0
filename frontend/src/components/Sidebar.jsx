import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout'; 
import CheckIcon from '@mui/icons-material/Check';
import BallotIcon from '@mui/icons-material/Ballot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const navItems = [
    { text: 'User Manual', icon: <InfoIcon />, path: 'user-manual' },
    { text: 'Voter Registration', icon: <CheckIcon />, path: '/voter-registration' },
    { text: 'Voting Area', icon: <BallotIcon />, path: '/voting-area' },
    { text: 'Results', icon: <BarChartIcon />, path: '/results' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#001E3C',
          color: '#fff',
          paddingTop: '32px',
        },
      }}
    >
      <ListItem>
        <Box display="flex" alignItems="center" justifyContent="center">
          <ListItemIcon sx={{ color: '#FF7F50', margin: '0' }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography 
            variant="h6" 
            sx={{
              color: '#FF7F50',
              textAlign: 'center',
              marginLeft: '1px',
            }}
          >
            User
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
              '&:hover': {
                backgroundColor: '#00395E',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              },
              '&:hover .MuiListItemText-primary': {
                color: '#FFD700',
                transition: 'color 0.3s ease',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} sx={{ color: '#fff' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
