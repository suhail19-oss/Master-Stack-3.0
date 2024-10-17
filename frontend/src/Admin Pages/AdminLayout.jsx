import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';

const AdminLayout = () => {
  return (
    <Box display="flex">
      <SidebarAdmin />
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
