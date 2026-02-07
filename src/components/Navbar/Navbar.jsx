import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { styled, alpha } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#000000" }}>
            Exclusive
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link component={RouterLink} color='#000000' underline='none' to={'/home'}>Home</Link>
            <Link component={RouterLink} color='#000000' underline='none' to={'/contact'}>Contact</Link>
            <Link component={RouterLink} color='#000000' underline='none' to={'/about'}>About</Link>
            <Link component={RouterLink} color='#000000' underline='none' to={'/signup'}>Sign Up</Link>
         <IconButton sx={{ color: 'black' }}>
  <FavoriteBorderIcon />
</IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
