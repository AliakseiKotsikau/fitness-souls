import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DefaultAppBar() {
    return (
      <Box >
        <AppBar color='info' elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="secondary">DS1</Button>
            <Button color="secondary">DS2</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }