import React from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#white',
    backgroundColor: '#a28354',
    
    '&:hover': {
      backgroundColor: '#cab28d',
    },
    width: '250px',
    height: '50px',
    fontSize: '20px',
    fontWeight: 'bold'
  }));

export default function ExerciseItem({text, onExerciseItemClick}) {
    return (
    <ColorButton variant="contained" color="inherit" onClick={onExerciseItemClick}>
    {text}
    </ColorButton>)
}