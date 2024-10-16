import { AppBar, Toolbar, Typography, IconButton, InputBase, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => (
  <AppBar
    position="fixed"
    sx={{ zIndex: 1201, width: `calc(100% - 240px)`, marginLeft: 240, backgroundColor: '#1A76D2' }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Voting System
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#fff',
          padding: '4px 8px',
          borderRadius: '4px',
        }}
      >
        <SearchIcon />
        <InputBase placeholder="Search…" />
      </div>
      <IconButton sx={{ marginLeft: '16px' }}>
        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
