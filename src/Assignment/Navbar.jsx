import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Rick and harry
          </Typography>
          <Typography variant='h6' component='div' sx={{flexGrow:10}}>
             <Link to='/like'>Liked pic</Link>

          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;