import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import React from 'react';
import { styled, alpha } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 const location=useLocation();
const getUnderLineAtCurrrentPage=(path)=>{
   
    if (location.pathname===path)
        return 'always';
    else return 'none';
}

export default function Navbar() {
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
}
