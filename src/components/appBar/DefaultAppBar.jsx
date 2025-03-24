import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Games } from '../../slices/fitnessSoulsSlice';

const DefaultAppBar = props => {

  const highlightSelectedGame = (game) => {
    return game === props.selectedGame ? { backgroundColor: "secondary.light", color: 'primary.main' } : {};
  }

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
          <Button color="secondary" sx={highlightSelectedGame(Games.DarkSouls1)} onClick={() => props.onGameChange(Games.DarkSouls1)}>DS1</Button>
          <Button color="secondary" sx={highlightSelectedGame(Games.DarkSouls2)} onClick={() => props.onGameChange(Games.DarkSouls2)}>DS2</Button>
          <Button color="secondary" sx={highlightSelectedGame(Games.DarkSouls3)} onClick={() => props.onGameChange(Games.DarkSouls3)}>DS3</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DefaultAppBar
