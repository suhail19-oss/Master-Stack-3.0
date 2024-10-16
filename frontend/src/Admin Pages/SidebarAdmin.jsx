import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LogoutIcon from '@mui/icons-material/Logout'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
  const navItems = [
    { text: 'Candidate Details', icon: <InfoIcon />, path: '/candidate-details' },
    { text: 'Add Candidate', icon: <AddIcon />, path: '/add-candidate' },
    { text: 'Register', icon: <AssignmentIcon />, path: '/register' },
    { text: 'Change Phase', icon: <SwapHorizIcon />, path: '/change-phase' },
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
