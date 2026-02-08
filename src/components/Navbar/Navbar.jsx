import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/material';

const Navbar = () => {
  const location = useLocation();

  const getUnderLineAtCurrrentPage = (path) => {
    return location.pathname === path ? 'always' : 'none';
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#000000" }}>
            Exclusive
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 ,justifyContent:'center', alignItems:'center'}}>
            <Link component={RouterLink} color='#000000' underline={getUnderLineAtCurrrentPage('/home')} to={'/home'}  >Home</Link>
            <Link component={RouterLink} color='#000000' underline={getUnderLineAtCurrrentPage('/contact')} to={'/contact'}>Contact</Link>
            <Link component={RouterLink} color='#000000' underline={getUnderLineAtCurrrentPage('/about')} to={'/about'}>About</Link>
            <Link component={RouterLink} color='#000000' underline={getUnderLineAtCurrrentPage('/signup')} to={'/signup'}>Sign Up</Link>
         <IconButton sx={{ color: 'black' }}>
  <FavoriteBorderIcon />
</IconButton>
 <IconButton sx={{ color: 'black' }}>
  < ShoppingCartIcon/>
</IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
